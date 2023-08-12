const admin = require("firebase-admin");
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const { uniqueNamesGenerator, colors, adjectives } = require('unique-names-generator');

require("dotenv").config();

// TODO: create function for matching and figuring out
// which commonality question to present to dyads before chat

// Don't forget to add DEV_MODE to heroku env variables!
// TOOD: also add prolific completion code/URl to .env file and heroku env variables!
// TODO: save server's users javascript object to firebase -- possibly to separate collection

const DEV_MODE = process.env.DEV_MODE;
const collectionName = DEV_MODE ? 'mind-dev-rooms': 'mind-prod-rooms';

// initialize firebase admin sdk on server
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.projectId,
    clientEmail: process.env.clientEmail,
    privateKey: process.env.privateKey.replace(/\\n/g, '\n')
  }),
  databaseURL: process.env.databaseURL
});

// initialize db instance to then read from it
const db = admin.firestore();
const serverTime = admin.firestore.FieldValue.serverTimestamp();


// set the static folder
app.use(express.static(path.join(__dirname, 'client/public')));

// Generate random room name (e.g., regular-jade)
const roomGenConfig = {
  dictionaries: [adjectives, colors],
  style: 'lowerCase',
  separator: '-'
};

// initialize users
let users = [];
const goalGroupSize = 2;
let numConsentedUsers = 0;
let avatarIdx = [128049, 128054]; // [cat, dog]

// SERVER utils, basically
// -------------------------------------------
// TODO: move to separate server utils file

// get last inserted value in a set
// i.e., in a set of socketIDs,
// return the ID of the client who just joined
const getLastValue = (set) => {
  let value;
  for(value of set);
  return value;
}

// Join user to room
const userJoin = (socketId, platformId, room) => {
  const user = { socketId, platformId, room };
  users.push(user);

  return user;
}

// User leaves room
const userLeave = (socketId) => {
  const index = users.findIndex(user => user.socketId === socketId);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
const getRoomUsers = (room) => {
  return users.filter(user => user.room === room);
}

// Change room status for all users in specified state
const updateRoomStatus = (users, oldStatus, newStatus) => {
  return Object.keys(users).forEach(key => {
  if (users[key].room === oldStatus) {
    users[key].room = newStatus; 
  }
});
}

// Find user
const findUser = (platformId) => {
  return users.findIndex(x => x.platformId === platformId)
}


// SERVER-CLIENT SOCKET CONNECTION LOGIC
// -------------------------------------------
// will run whenever a client connects to server
io.on('connection', (socket) => {

  // general user state change
  socket.on('user change state', (previousState, newState) => {

    if (newState == 'assignedRoom') {
      // do nothing
    } else {
      socket.join(newState);
    }

    socket.leave(previousState);
    prevStateSockets = io.sockets.adapter.rooms.get(previousState);
    console.log(`all sockets in ${previousState}`, prevStateSockets);
    newStateSockets = io.sockets.adapter.rooms.get(newState);
    console.log(`all sockets in ${newState}`, newStateSockets);
  })


  // WAITING ROOM
  // -------------------------------------------
  socket.on('user from bot-check to waiting-room', (platformId) => {

    // user join room
    socket.join('waiting-room');

    // check first if user exists
    // if so, update their socket id and timestamp
    let foundUserIdx = findUser(platformId);

    if (findUser(platformId) != -1) {
      // user was found, so update socket id and timestamp
      users[foundUserIdx] = {
        socketId: `${socket.id}`,
        platformId: platformId,
        room: 'waiting-room',
        waitingRoom_Start: serverTime,
      }
    } else {
      // when user is in waitingRoom state, initialize their data field in userData and users object
      const userData = {
        socketId: `${socket.id}`,
        platformId: platformId,
        room: 'waiting-room',
        waitingRoom_Start: serverTime,
      };
      // add user to users object
      users = users.concat(userData);
    };

    console.log("server --> users", users)

    // check for whether user already in room
    // refreshes generate a new socket id!!
    // TODO: filter by unique platformIds to account for refreshes generating new socket ids
    // alternative way of knowing how many users in waiting room
    const usersInWaitingObj = getRoomUsers('waiting-room');
    const numWaiting = new Set(usersInWaitingObj.map((o) => o.platformId)).size;
    console.log("server --> numWaiting", numWaiting);

    // construct field to save to db
    const data = {
      numWaiting: numWaiting,
    };

    const res = db.collection(`${collectionName}`).doc('mind-waiting-room').set(data);

    // this tells clients in waiting-room to update their counts
    // of how many users in waiting-room
    const waitingClients = io.sockets.adapter.rooms.get('waiting-room');
    console.log("waitingClients", waitingClients);

    const consentedUsers = io.sockets.adapter.rooms.get('consent-hallway-pass');
    console.log("consentedUsers", typeof consentedUsers)
    
    if (typeof consentedUsers == 'undefined') {
      numConsentedUsers = 0;
    } else {
      numConsentedUsers = consentedUsers.size;
    }
    console.log("numConsentedUsers", numConsentedUsers);
  
    io.to('waiting-room').emit('user from botCheck to waiting-room', numWaiting);

    if (numWaiting == goalGroupSize) {
      // change state to experiment for all in waiting-room state & then specify room
      const nWaiting = io.sockets.adapter.rooms.get('waiting-room');
      console.log("nWaiting", nWaiting.size);

      // update local server store
      updateRoomStatus(users, 'waiting-room', 'consent-hallway')

      io.to('waiting-room').emit('user from waiting-room to consent-hallway', numConsentedUsers);
      // socket.leave() only makes latest user (the 4th one) ubsubscribe from 'waiting-room'
    }
  });

  // POST-WAITING BUT PRE-EXPERIMENT
  // AKA CONSENT-HALLWAY
  // -------------------------------------------
  socket.on('user from consent-hallway to consent-hallway-pass', async (platformId) => {

    const consentedUsers = io.sockets.adapter.rooms.get('consent-hallway-pass');
    
    if (typeof consentedUsers !== 'undefined') {
      numConsentedUsers = consentedUsers.size;
    } else {
      numConsentedUsers = 0;
    }
    console.log("numConsentedUsers", numConsentedUsers);

    // check first if user exists
    // if so, update their socket id and timestamp
    let foundUserIdx = findUser(platformId);

    if (findUser(platformId) != -1) {
      // update user room
      users[foundUserIdx] = {
        socketId: `${socket.id}`,
        platformId: platformId,
        room: 'consent-hallway-pass',
        absolute_timestamp: serverTime,
      }
    };

    // server subscribes client socket to 'consent-hallway-pass' room/state
    console.log("server --> socket.rooms", socket.rooms);
    console.log("server --> users", users);

    // count how many have consent
    const consentedUsersObj = getRoomUsers('consent-hallway-pass');
    
    let consentedUsersSocketIDs = Array.from(consentedUsers);
    console.log("consentedUsersSocketIDs", consentedUsersSocketIDs)

    // assign avatar emoji to each socket/user
    let avatarAssignment = {};
    consentedUsersSocketIDs.forEach((socketId, avi) => avatarAssignment[socketId] = avatarIdx[avi]);

    const data = {
      users: consentedUsersSocketIDs,
      avatar_assignment: avatarAssignment,
      n_users: numConsentedUsers,
      absolute_timestamp: serverTime,
    };

    // server emits to all clients in 'consent-hallway-pass' state
    // i.e., these users have confirmed to proceed to expeirment phase
    // the number of those who've consented at this point
    // also tells client to update count of numConsentedUsers
    io.to('consent-hallway-pass').emit('user from waiting-room to consent-hallway', numConsentedUsers);

    const waitingClients = io.sockets.adapter.rooms.get('waiting-room');
    console.log("waitingClients", waitingClients);

    const consentHallwayClients = io.sockets.adapter.rooms.get('consent-hallway');
    console.log("consentHallwayClients", consentHallwayClients);

    const consentHallwayPassClients = io.sockets.adapter.rooms.get('consent-hallway-pass');
    console.log("consentHallwayPassClients", consentHallwayPassClients);
    
    // first four consented users move on to experiment state and are assigned their specific room
    if (numConsentedUsers == goalGroupSize) {
      console.log("server --> users", users)

      // check for duplicates & assign room here
      // and change 'waiting-room' field to room generated
      let roomAssigned = false;

      do {
        var assignedRoom = uniqueNamesGenerator(roomGenConfig);

        const assignedRoomDocRef = db.collection(`${collectionName}`).doc(`${assignedRoom}`);

        const doc = await assignedRoomDocRef.get();
          
        if (doc.exists) {
          var assignedRoom = uniqueNamesGenerator(roomGenConfig);
          roomAssigned = true;
        } else if (!doc.exists) {
          db.collection(`${collectionName}`).doc(`${assignedRoom}`).set(data);
          roomAssigned = true;
        }
        
      }
      while (!roomAssigned);
      console.log("server --> assignedRoom", assignedRoom);

      // iterate through to then emit the condition assignment to each socket
      // console.log("consentedUsersSocketIDs", consentedUsersSocketIDs)
      for (let socketId in avatarAssignment) {
        if (avatarAssignment.hasOwnProperty(socketId)) {
          // server sends each client their avatar assignment
          // one socket/user at at time
          io.to(socketId).emit("avatarAssignment", avatarAssignment[socketId]);
        }
      }

      // update users 
      // users who just moved experiment state, update their room from 'waiting-room' or 'consent-hallway' to the correct room
      updateRoomStatus(users, 'consent-hallway-pass', assignedRoom)

      // the below section currently takes users in 'consent-hallway-pass' state to assignedRoom state
      // and specifically shuttles them to the specified assignedRoom
      // that should in theory get assigned each time there are 4 people in a group/the cond is met
      // TODO: double check if this is appropriate to do
      // may be cause for room mixing...
      io.to('consent-hallway-pass').emit('user from consent-hallway-pass to assignedRoom', assignedRoom);
      // console.log("server numConsented cond --> socket.rooms", socket.rooms);

      const waitingClients = io.sockets.adapter.rooms.get('waiting-room');
      // console.log("waitingClients", waitingClients);

      const consentHallwayClients = io.sockets.adapter.rooms.get('consent-hallway');
      // console.log("consentHallwayClients", consentHallwayClients);

      const consentHallwayPassClients = io.sockets.adapter.rooms.get('consent-hallway-pass');
      // console.log("consentHallwayPassClients", consentHallwayPassClients);

      const assignedRoomClients = io.sockets.adapter.rooms.get(assignedRoom);
      // console.log("assignedRoomClients", assignedRoomClients);

    }
  });


  // EXPERIMENT & CHAT COMMS
  // -------------------------------------------
  socket.on('joinRoom', ({ avatar, room }) => {

    // console.log("server --> joinRoom socket.rooms", socket.rooms);
    socket.join(room);
    // console.log("server --> socket.join(room)", socket.rooms);

    // console.log("server -- start joinRoom -- users", users);
    // console.log("server -- start joinRoom -- room", room);

    let numUsers = io.sockets.adapter.rooms.get(room).size;
    // console.log("server - socket on join user numUsers", numUsers);

    // emit to all clients in room the number of users in room
    // given by server's copy of users
    io.in(room).emit('roomUsers', numUsers);

    // listen for message from client
    socket.on('message', (room, messageObj) => {
      console.log("server - on message", messageObj)
      socket.to(room).emit('message', messageObj);
    });

    // note: 'disconnect' can occur from client refreshing page!
    socket.on('disconnect', () => {

      // find corresponding platformId for socket.id of disconneted user
      // then go into their firestore doc
      let socketId = socket.id;
      socket.leave(room);

      const user = userLeave(socket.id);
      try {
        let numUsers = io.sockets.adapter.rooms.get(room).size;
        // console.log("disconnect numUsers", numUsers);
      } catch (err) {
        console.log("server socket disconnect err", err);
        let numUsers = 0;
      }

      // let userLeaveMessageString = `${avatar} has left the chat`;
      // let server_msg = ({
      //   author: 'Server',
      //   absolute_timestamp: serverTime,
      //   message_string: `Server: ${userLeaveMessageString}`
      // });

      let numUsers = 0;
      try {
        numUsers = io.sockets.adapter.rooms.get(room).size;
      } catch (err) {
        console.log(err)
        numUsers = 0;
      }

      // io.in(room).emit(
      //   'user left',
      //   server_msg,
      //   numUsers
      // );

    });
  });
});

app.get('*', (req, res) => {
  res.send('<h1> 404 </h1>');
});
const PORT = process.env.PORT || 5000;

http.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

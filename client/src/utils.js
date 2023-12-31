// Initialize firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import { writable } from 'svelte/store';
import { uniqueNamesGenerator, adjectives, animals, colors } from 'unique-names-generator';
import { nameSeparator } from 'concurrently/src/defaults';

// GLOBAL EXPERIMENT VARIABLES
// FUTURE TODO: read in a json with config
export const expConfig = {
  bonusAmount: 1.0,
  basePayment: 15.00,
  maxQuizAttempts: 3,
  quizAnswerBuffer: 5,
  groupSize: 2,
  waitLimit: 10, // default: 10 minutes
  waitFailLimit: .083, // 5 seconds
  consentHallwayLimit: 30, // 30 seconds
  debugMode: false
};

const firebaseConfig = {
  apiKey: 'AIzaSyDkdKO_KE0b2S6bg9CNH-yBGB-0Ph6GOXI',
  authDomain: 'svelte-vid-sync-chat-app.firebaseapp.com',
  databaseURL: 'https://svelte-vid-sync-chat-app-default-rtdb.firebaseio.com',
  projectId: 'svelte-vid-sync-chat-app',
  storageBucket: 'svelte-vid-sync-chat-app.appspot.com',
  messagingSenderId: '847886552871',
  appId: '1:847886552871:web:e858b721ad999f26696302',
  measurementId: 'G-CC4NVFPPX7',
};
console.log('firebaseConfig', firebaseConfig);
firebase.initializeApp(firebaseConfig);

// Export firebase globals for use elsewhere in the app
export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();
export const serverTime = firebase.firestore.FieldValue.serverTimestamp();
export const increment = firebase.firestore.FieldValue.increment(1);
export const append = firebase.firestore.FieldValue.arrayUnion;

// TODO: add handling for PROLIFIC_PID, STUDY_ID, SESSION_ID

// function to parse URL and only get value of desired variables
const getQueryVariable = (variable) => {
  let query = window.location.search.substring(1);
  let vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
};

const getProlificId = () => {
  return getQueryVariable("PROLIFIC_PID");
};

const getWorkerId = () => {
  return getQueryVariable("workerId");
};

// Functions to parse the URL to get workerID, hitID, and assignmentID
const unescapeURL = (s) => decodeURIComponent(s.replace(/\+/g, '%20'));
export const getURLParams = () => {
  const params = {};
  const m = window.location.href.match(/[\\?&]([^=]+)=([^&#]*)/g);
  if (m) {
    let i = 0;
    while (i < m.length) {
      const a = m[i].match(/.([^=]+)=(.*)/);
      params[unescapeURL(a[1])] = unescapeURL(a[2]);
      i += 1;
    }
  }

  let prolificId = getProlificId();
  let workerId = getWorkerId();

  let USE_MTURK = (workerId) ? true : false;
  let USE_PROLIFIC = (prolificId) ? true : false;

 if (USE_MTURK) { 
    params.platformId = workerId;
    console.log("Using MTurk \n MTURK_ID:", workerId)

 } else if (USE_PROLIFIC) {
    console.log("Using Prolific \n PROLIFIC_PID:", prolificId)
    let studyId = getQueryVariable("STUDY_ID");
   let sessionId = getQueryVariable("SESSION_ID");
    params.platformId = prolificId;
    params.hitId = studyId;
    params.assignmentId = sessionId;
  }
  console.log("params", params);
  return params;
};

// Use those functions to get the window URL params and make them available throughout the app
export const params = getURLParams();

// Shuffle array elements inplace: https://javascript.info/task/shuffle
export const fisherYatesShuffle = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    // eslint-disable-next-line no-param-reassign
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
};

// convert time from seconds to mm:ss format
export const formatTime = (seconds) => {
    if (isNaN(seconds)) return "...";
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    if (seconds < 10) seconds = "0" + seconds;
    return `${minutes}:${seconds}`;
  };


// SURVEY DATA MANAGEMENT
// TODO: randomize category order
export const questions = [
  {
    questionText: "What is something that lots of people like?",
    category: "preferences",
    survey: "open",
    type: "sim",
  },
  {
    questionText: "What is something that lots of other people don't like as much as you do?",
    category: "preferences",
    survey: "open",
    type: "dis",
  },
  {
    questionText: "What is a religious or spiritual belief that lots of people share?",
    category: "religion",
    survey: "open",
    type: "sim",
  },
  {
    questionText: "What is a religious or spiritual belief you hold that is more idiosyncratic or divisive?",
    category: "religion",
    survey: "open",
    type: "dis",
  },
  {
    questionText: "What is a political stance that you think most people would agree with?",
    category: "politics",
    survey: "open",
    type: "sim",
  },
  {
    questionText: "What is a political stance you hold that is more idiosyncratic or divisive?",
    category: "politics",
    survey: "open",
    type: "dis",
  },
  {
    questionText: "What is something that is central to your identity that you have in common with other people?",
    category: "identity",
    survey: "open",
    type: "sim",
  },
  {
    questionText: "What is something that is central to your identity that is unique to you?",
    category: "identity",
    survey: "open",
    type: "dis",
  },
  {
    questionText: "What is an ethical stance that you think most people would agree with?",
    category: "morality",
    survey: "binary",
    type: "sim",
  },
  {
    questionText: "What is an ethical stance you hold that is more idiosyncratic or divisive?",
    category: "morality",
    survey: "binary",
    type: "dis",
  },
  {
    questionText: "What is a mundane or boring fact about yourself that is also probably true for others?",
    category: "arbitrary",
    survey: "open",
    type: "sim",
  },
  {
    questionText: "What is a mundane or boring fact that is unique to you?",
    category: "arbitrary",
    survey: "open",
    type: "dis",
  },
];


// USER DATA MANAGEMENT
// Initialize store to share user state across the app
export const userStore = writable({});

// TODO: add or change to prod-participants
// Async update user firestore doc given a store as input
export const updateUser = async (userDoc) => {
  try {
    let collectionName = (DEV_MODE) ? 'mind-dev-participants' : 'mind-prod-participants';
    await db.collection(`${collectionName}`).doc(params.platformId).update(userDoc);
    console.log('user doc successfully updated');
  } catch (err) {
    console.error('Error updating user document in firestore');
    console.log(err);
  }
};

// Setup a fresh user account or reset an existing one
export const initUser = async () => {
  // Get 1 random recording based upon the least frequently tagged ones thus far
  // Experiment.svelte will handle selecting the next audio file by requerying the lowest tagged
  // audio files thus far. This is better than pregenerating a list of audio files ahead of time,
  // because all initial users will get the same files and we'll get lots of tags for those files
  // but none for others. By querying one at a time, we can better ensure uniform sampling of the
  // files based on whether they've been rated already in *real-time*.
  const trialOrder = [];
  try {
    const query = await db
      .collection('recordings')
      .orderBy('responses')
      .limit(1)
      .get();
    query.forEach((doc) => {
      trialOrder.push(doc.data().name);
    });
    fisherYatesShuffle(trialOrder);

    // TODO: change to prod-participants
    let collectionName = DEV_MODE ? 'mind-dev-participants' : 'mind-prod-participants';

    // Create the user doc
    await db.collection(`${collectionName}`).doc(params.platformId).set({
      platformId: params.platformId,
      assignmentId: params.assignmentId,
      hitId: params.hitId,
      consent_start: serverTime,
      currentState: 'consent',
      quizState: 'overview',
      // tutorialComplete: false,
      // tutorialStep: 0,
      // currentTrial: 1,
      quizAttempts: 0,
      quizPassed: false,
      bonus: 0,
      submitted: false,
      // trials: {},
      trialOrder,
    });
  } catch (error) {
    console.error(error);
  }
};
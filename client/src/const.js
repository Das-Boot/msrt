// adjust socket depending whether we're in production or not
export const SOCKET_ENDPOINT = DEV_MODE
  ? 'http://localhost:5000/' : 'https://mind-shared-reality-transfer-ad60b347b589.herokuapp.com/';

console.log(SOCKET_ENDPOINT);


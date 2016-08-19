import firebase from 'firebase';

const defaultEnv = process.env.NODE_ENV || 'development';
let env = require(`../config/${defaultEnv}.env`);

try {
    const config = {
        apiKey: env.REACT_APP_API_KEY,
        authDomain: env.REACT_APP_AUTH_DOMAIN,
        databaseURL: env.REACT_APP_DATABASE_URL,
        storageBucket: env.REACT_APP_STORAGE_BUCKET,
    };
    firebase.initializeApp(config);
} catch (e) {}

export const githubProvider = new firebase.auth.GithubAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const firebaseRef = firebase.database().ref();
export default firebase;

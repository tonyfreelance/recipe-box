import firebase from 'firebase';
import env from '../config/env';

try {
  const config = {
    apiKey: process.env.REACT_APP_API_KEY || env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN ||env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL || env.REACT_APP_DATABASE_URL,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET || env.REACT_APP_STORAGE_BUCKET,
  };
  firebase.initializeApp(config);
} catch (e) {}

export const githubProvider = new firebase.auth.GithubAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const firebaseRef = firebase.database().ref();
export default firebase;

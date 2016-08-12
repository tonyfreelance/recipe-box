import firebase from 'firebase';

try {
  const config = {
    apiKey: "AIzaSyB4abnQTHjS6oUQr4DpUXpNOU19DPhWcnM",
    authDomain: "recipebox-75174.firebaseapp.com",
    databaseURL: "https://recipebox-75174.firebaseio.com",
    storageBucket: "recipebox-75174.appspot.com",
  };
  firebase.initializeApp(config);
} catch (e) {}

export const githubProvider = new firebase.auth.GithubAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const firebaseRef = firebase.database().ref();
export default firebase;

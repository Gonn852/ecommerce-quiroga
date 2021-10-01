import * as firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAk-W7jGX0yn-lT3ac6jCz3aSekojgBq_Q",
    authDomain: "reactutn-4a0d6.firebaseapp.com",
    databaseURL: "https://reactutn-4a0d6.firebaseio.com",
    projectId: "reactutn-4a0d6",
    storageBucket: "reactutn-4a0d6.appspot.com",
    messagingSenderId: "308242894276",
    appId: "1:308242894276:web:ddc3bad2c2368e886d6891"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  firebase.auth = firebase.auth();
  firebase.db=db;

  export default firebase;
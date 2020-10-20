import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyATxba1Pwaic6NRV9ooyQdxn6UZp9Vo9Vs",
    authDomain: "beatmaker-espinaco.firebaseapp.com",
    databaseURL: "https://beatmaker-espinaco.firebaseio.com",
    projectId: "beatmaker-espinaco",
    storageBucket: "beatmaker-espinaco.appspot.com",
    messagingSenderId: "417357661627",
    appId: "1:417357661627:web:c5b4cfa7db88644a5e709e",
    measurementId: "G-6K3J6B91QQ"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}
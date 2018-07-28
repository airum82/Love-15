import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseKey } from '../APIkey';
import 'firebase/database';

const config = {
  apiKey: firebaseKey,
  authDomain: "love-15-210720.firebaseapp.com",
  databaseURL: "https://love-15-210720.firebaseio.com",
  projectId: "love-15-210720",
  storageBucket: "love-15-210720.appspot.com",
  messagingSenderId: "57178198843"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
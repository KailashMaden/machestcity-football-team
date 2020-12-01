import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const API_KEY = process.env.REACT_API_KEY;
const API_ID = process.env.REACT_API_ID;

const firebaseConfig = {
  apiKey: `${API_KEY}`,
  authDomain: 'm-city-ad8ae.firebaseapp.com',
  databaseURL: 'https://m-city-ad8ae.firebaseio.com',
  projectId: 'm-city-ad8ae',
  storageBucket: 'm-city-ad8ae.appspot.com',
  messagingSenderId: '546419049409',
  appId: `${API_ID}`,
  measurementId: 'G-TK4MMBWRZV',
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');

export { firebase, firebaseMatches };

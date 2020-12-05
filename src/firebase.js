import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyAKUX8YSaZCePvLNeoyUfXl922d8IFRBlM',
  authDomain: 'm-city-ad8ae.firebaseapp.com',
  databaseURL: 'https://m-city-ad8ae.firebaseio.com',
  projectId: 'm-city-ad8ae',
  storageBucket: 'm-city-ad8ae.appspot.com',
  messagingSenderId: '546419049409',
  appId: '1:546419049409:web:b91eefb31e99b21d81a540',
  measurementId: 'G-TK4MMBWRZV',
});

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');

export const auth = firebaseConfig.auth();

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebaseDB,
};

export default firebaseConfig;

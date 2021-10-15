// Import the functions you need from the SDKs you need

import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu6EqZiSO0cNB1ePmoqJ69_vo1CrCO8YU",
  authDomain: "portfolio-7a6ed.firebaseapp.com",
  projectId: "portfolio-7a6ed",
  storageBucket: "portfolio-7a6ed.appspot.com",
  messagingSenderId: "605472690734",
  appId: "1:605472690734:web:cdfb4142ebefabaa1d45bf",
  measurementId: "G-XKYYJL5KLE"
};

// Initialize Firebase
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();

export default db;
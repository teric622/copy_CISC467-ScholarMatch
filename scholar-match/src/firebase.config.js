// Firebase
/*import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD8c7x-yqw10THw01ilxLwhvQLFyacGOtg",
  authDomain: "scholarmatch-e5043.firebaseapp.com",
  projectId: "scholarmatch-e5043",
  storageBucket: "scholarmatch-e5043.appspot.com",
  messagingSenderId: "785111082002",
  appId: "1:785111082002:web:ee9263f0e14b3c2399a4cb",
  measurementId: "G-WVFDR8SMFT"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app); 
//const db = firebase.firestore();
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
//end of firebase setup 
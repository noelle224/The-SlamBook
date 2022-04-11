import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// write in your own firebase configurations.

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAEG_hsU_0U-jbtcMxQ6vsbJ7s8WqXvID0",
    authDomain: "the-slambook-60bc1.firebaseapp.com",
    projectId: "the-slambook-60bc1",
    storageBucket: "the-slambook-60bc1.appspot.com",
    messagingSenderId: "392655434527",
    appId: "1:392655434527:web:ecee94455e24a2283eb62a",
    measurementId: "G-5RLKPYECZ8"
  });
  
  const db= firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();

  export {db, auth, storage};
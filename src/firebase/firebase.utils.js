import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyA-NIA7ApHAoQK2HRexyMK6d904EPDz-wE",
    authDomain: "geo-clothing.firebaseapp.com",
    databaseURL: "https://geo-clothing.firebaseio.com",
    projectId: "geo-clothing",
    storageBucket: "geo-clothing.appspot.com",
    messagingSenderId: "383520379400",
    appId: "1:383520379400:web:2538046931ddfca05df7bd",
    measurementId: "G-WW85TJ29FH"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);
  export default firebase;
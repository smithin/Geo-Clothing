import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA-NIA7ApHAoQK2HRexyMK6d904EPDz-wE",
    authDomain: "geo-clothing.firebaseapp.com",
    databaseURL: "https://geo-clothing.firebaseio.com",
    projectId: "geo-clothing",
    storageBucket: "geo-clothing.appspot.com",
    messagingSenderId: "383520379400",
    appId: "1:383520379400:web:2538046931ddfca05df7bd",
    measurementId: "G-WW85TJ29FH"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

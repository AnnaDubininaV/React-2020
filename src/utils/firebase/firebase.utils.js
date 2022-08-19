import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCebs8TPlLHA4xFPkw9BcnLm3Fk48RF5rI',
  authDomain: 'crwn-clothing-db-a5019.firebaseapp.com',
  projectId: 'crwn-clothing-db-a5019',
  storageBucket: 'crwn-clothing-db-a5019.appspot.com',
  messagingSenderId: '671147115120',
  appId: '1:671147115120:web:ccd74cb16f00ac59556ab5',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// can have multiple providers
// if case we want to asing with Facebook ...
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// but only one auth
export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // if there is an existing document refference
  const userDocRef = doc(db, 'users', userAuth.uid);

  // special object where we can check if the user exist
  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  // create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createAt });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  // if user data exists
  return userDocRef;
};

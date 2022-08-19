import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

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
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

// but only one auth
const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

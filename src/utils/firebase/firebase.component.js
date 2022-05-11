// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbVw-Hj8Gwa1RPhmAggD15Q3mxp4VI8RE",
  authDomain: "crwn-clothing-db-d87d4.firebaseapp.com",
  projectId: "crwn-clothing-db-d87d4",
  storageBucket: "crwn-clothing-db-d87d4.appspot.com",
  messagingSenderId: "613607327435",
  appId: "1:613607327435:web:d371e79c55f4ccf8a2bd4e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

const auth = getAuth();
const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();
const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log({ userDocRef });

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};

export const firebase = {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
};

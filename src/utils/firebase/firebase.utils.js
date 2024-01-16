import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5wsyIo7YYxU0TW_OW-CZNXPxpN__CJGM",
  authDomain: "sl-webapp-25b1b.firebaseapp.com",
  projectId: "sl-webapp-25b1b",
  storageBucket: "sl-webapp-25b1b.appspot.com",
  messagingSenderId: "719577619533",
  appId: "1:719577619533:web:c992838bb2ea1307519004",
  measurementId: "G-2G015QCGC7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()){
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName ,
                email,
                createdAt
            })
        } catch (error){
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;

}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDx-d22fp3BHAOcF-hFSrB_-6pgDMxBiYk",
    authDomain: "guidy-guys-app.firebaseapp.com",
    projectId: "guidy-guys-app",
    storageBucket: "guidy-guys-app.appspot.com",
    messagingSenderId: "556919963800",
    appId: "1:556919963800:web:51f8a9ef411de7acd950ed",
    measurementId: "G-QXTN1ZGBC5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
export const auth = getAuth(app)

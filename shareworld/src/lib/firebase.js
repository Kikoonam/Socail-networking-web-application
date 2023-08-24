// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1eWmbMBZixQRV75RTFXOeKNUUcAQqNX4",
  authDomain: "shareworld-2e1b9.firebaseapp.com",
  projectId: "shareworld-2e1b9",
  storageBucket: "shareworld-2e1b9.appspot.com",
  messagingSenderId: "220337612514",
  appId: "1:220337612514:web:961b75bba9ecfc5423e0bb",
  measurementId: "G-VVEQZJV9D0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { app, firestore,auth };
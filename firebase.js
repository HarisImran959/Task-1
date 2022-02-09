// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyA7378EaRc5FnvxNn560695aTJKOWbpPuQ",
  authDomain: "insta-clone-6e323.firebaseapp.com",
  databaseURL: "https://insta-clone-6e323-default-rtdb.firebaseio.com",
  projectId: "insta-clone-6e323",
  storageBucket: "insta-clone-6e323.appspot.com",
  messagingSenderId: "156425419025",
  appId: "1:156425419025:web:e9d217745bf85ca0a034b0",
  measurementId: "G-J95WJHCZMX"
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebaseApp.firestore();
const auth= firebase.auth();
const auth = firebase.storage();

export {db, auth, storage};
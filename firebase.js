// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdpIqqrfrvvS-LhDLvpyke2VaB25-B_nQ",
  authDomain: "chat-app-da17d.firebaseapp.com",
  databaseURL: "https://chat-app-da17d-default-rtdb.firebaseio.com",
  projectId: "chat-app-da17d",
  storageBucket: "chat-app-da17d.appspot.com",
  messagingSenderId: "1062273541912",
  appId: "1:1062273541912:web:f5b81e444faa0b52d1606d",
  measurementId: "G-C45CC08V2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const auth = getAuth(app);


export { auth, app };
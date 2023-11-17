// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnDTPEH2xO0XGAd5gis67ifQbNAdlBsQM",
  authDomain: "netflixgpt-f4c35.firebaseapp.com",
  projectId: "netflixgpt-f4c35",
  storageBucket: "netflixgpt-f4c35.appspot.com",
  messagingSenderId: "1067650835835",
  appId: "1:1067650835835:web:12c3556003447158a8c9de",
  measurementId: "G-EDPD1F0ZGQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBED9elC-drFvwD_xSWw537alttT4HzYR4",
  authDomain: "fitmax-gym.firebaseapp.com",
  projectId: "fitmax-gym",
  storageBucket: "fitmax-gym.appspot.com",
  messagingSenderId: "120642155175",
  appId: "1:120642155175:web:f067d431ed4aeca6aea182"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCz4lMwleUrlbAIH8APSZQO0IG27zpK3hY",

  authDomain: "authenticator-aee06.firebaseapp.com",

  projectId: "authenticator-aee06",

  storageBucket: "authenticator-aee06.appspot.com",

  messagingSenderId: "921858383242",

  appId: "1:921858383242:web:dbea9d2c8b6f3cd91efc73"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
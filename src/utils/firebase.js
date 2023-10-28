// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "pixelpapyrus-43d3d.firebaseapp.com",
  projectId: "pixelpapyrus-43d3d",
  storageBucket: "pixelpapyrus-43d3d.appspot.com",
  messagingSenderId: "811002999088",
  appId: "1:811002999088:web:ff3e9075989a14ddb558f5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
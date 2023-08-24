// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
//import { } from 'firebase/firestore';
import "firebase/firestore";

//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkCEZsd2CR5h2v-8g_gpjs-HGBtqgd7HM",
  authDomain: "react-hooks-blog-1f2d8.firebaseapp.com",
  projectId: "react-hooks-blog-1f2d8",
  storageBucket: "react-hooks-blog-1f2d8.appspot.com",
  messagingSenderId: "1063583811647",
  appId: "1:1063583811647:web:05947b6059dc23729c508a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore=firebase.firestore();
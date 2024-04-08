// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAHYf2hV6UpLg0SDEgi9pQMdS3HLk6JFIc",
  authDomain: "usit-321ee.firebaseapp.com",
  projectId: "usit-321ee",
  storageBucket: "usit-321ee.appspot.com",
  messagingSenderId: "372506510559",
  appId: "1:372506510559:web:b54cbdc14475dcace6156a",
  measurementId: "G-FZW40SPD0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database=getAuth(app);
// const auth=getAuth();
// export {app,auth}
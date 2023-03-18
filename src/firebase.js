// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATsW8gtfrtwR-aZFdNvhw-ss64Bk6hAPM",
  authDomain: "realtor-clone-react-79576.firebaseapp.com",
  projectId: "realtor-clone-react-79576",
  storageBucket: "realtor-clone-react-79576.appspot.com",
  messagingSenderId: "677222921980",
  appId: "1:677222921980:web:4d4a0be4ab945b35200979"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db= getFirestore();
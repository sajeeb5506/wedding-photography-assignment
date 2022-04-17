// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANKCZr4Het9Nm-9PUPtvUuidk2GL9KC14",
  authDomain: "wedding-photography-71a28.firebaseapp.com",
  projectId: "wedding-photography-71a28",
  storageBucket: "wedding-photography-71a28.appspot.com",
  messagingSenderId: "733430479893",
  appId: "1:733430479893:web:03dbba57db1640b06fa21c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
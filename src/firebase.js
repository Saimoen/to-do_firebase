// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9VYBikRKe1JtjkzX6-sM2KZIr0sWwGQQ",
    authDomain: "to-do-687.firebaseapp.com",
    projectId: "to-do-687",
    storageBucket: "to-do-687.appspot.com",
    messagingSenderId: "1099337329531",
    appId: "1:1099337329531:web:7eadae823846a701f3ebde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged as _onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfKfRG0kDfm1yMUanBS-gaKsjr4EiVeIk",
    authDomain: "hacksingapore-1ec90.firebaseapp.com",
    projectId: "hacksingapore-1ec90",
    storageBucket: "hacksingapore-1ec90.appspot.com",
    messagingSenderId: "1094109326658",
    appId: "1:1094109326658:web:a5801c34dea96f7911ecdb",
    measurementId: "G-PN5GN679V8"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
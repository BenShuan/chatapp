// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { AuthCredential, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfbhjQsqQuTO-0yQrMqvRVtKzjqzQz9us",
  authDomain: "chatapp-ee84e.firebaseapp.com",
  databaseURL:
    "https://chatapp-ee84e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chatapp-ee84e",
  storageBucket: "chatapp-ee84e.appspot.com",
  messagingSenderId: "243279940596",
  appId: "1:243279940596:web:87a0c370022eb3d5f687a1",
  measurementId: "G-WNZSCNJV8C",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
auth.useDeviceLanguage();

export const db = getDatabase(app);

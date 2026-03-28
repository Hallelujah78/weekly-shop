// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzw7cbUi2jc_PDnbLQ5LOy_4UUGteAkkM",
  authDomain: "shopping-list-app-53786.firebaseapp.com",
  databaseURL: "https://shopping-list-app-53786-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shopping-list-app-53786",
  storageBucket: "shopping-list-app-53786.firebasestorage.app",
  messagingSenderId: "309648271278",
  appId: "1:309648271278:web:10fadd0a01b78acd628a3f"
};

// Initialize Firebase app and avoid duplicate initialization (in dev)
const app = getApps().length === 0 ?
initializeApp(firebaseConfig) : getApps()[0];

// Init and export database
export const db = getDatabase(app);
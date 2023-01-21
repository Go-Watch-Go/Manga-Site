// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnAzA1vQZ1faWd8uP2K4tvu-Amx4GhbG4",

  authDomain: "manga-19e8c.firebaseapp.com",

  projectId: "manga-19e8c",

  storageBucket: "manga-19e8c.appspot.com",

  messagingSenderId: "1070277497667",

  appId: "1:1070277497667:web:990de1bc56bf30360d95f6",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// init firestore service

const db = getFirestore(app);
export { db };

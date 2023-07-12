import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-4_6s7X4eygkzr0GAE27NrVDdNhle60k",
  authDomain: "job-app-c9b16.firebaseapp.com",
  projectId: "job-app-c9b16",
  storageBucket: "job-app-c9b16.appspot.com",
  messagingSenderId: "16047479321",
  appId: "1:16047479321:web:8764d5253a2a114fc36888",
  measurementId: "G-54DGV4TBHF"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth =  getAuth (app);
export {auth};
console.log(auth)

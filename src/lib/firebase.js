// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCG9dUGGLGSI-CPJzB7DiJ4T-Gsz53NIgQ",
  authDomain: "nextjs-firebase-223d9.firebaseapp.com",
  projectId: "nextjs-firebase-223d9",
  storageBucket: "nextjs-firebase-223d9.appspot.com",
  messagingSenderId: "564950207914",
  appId: "1:564950207914:web:e617f9f9c3e4d6dedeafd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
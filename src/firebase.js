import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBja9-YAtvFZDC0_YlJ4cEQ0QXqkaMaZG8",
  authDomain: "chat-3ff90.firebaseapp.com",
  projectId: "chat-3ff90",
  storageBucket: "chat-3ff90.appspot.com",
  messagingSenderId: "120749172519",
  appId: "1:120749172519:web:4c05a050b7aa0614e7eb02",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

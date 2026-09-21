import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpJ2foOkmoSLFp4ule_yUmrCXW6RlLL3Q",
  authDomain: "invitenest-6e4b0.firebaseapp.com",
  projectId: "invitenest-6e4b0",
  storageBucket: "invitenest-6e4b0.firebasestorage.app",
  messagingSenderId: "440866480836",
  appId: "1:440866480836:web:4020be9ad0bed219625f91",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
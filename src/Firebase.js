import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBWZXB7PNy-tg045UgMbT-9MeQOjc4XbSw",
  authDomain: "discord-clone-6691d.firebaseapp.com",
  projectId: "discord-clone-6691d",
  storageBucket: "discord-clone-6691d.appspot.com",
  messagingSenderId: "415530273128",
  appId: "1:415530273128:web:6a7a404fc73a4502536edd",
  measurementId: "G-69RWS4789X",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const db = getFirestore(app);

export default db;




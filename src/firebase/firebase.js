import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBv2jicyqhs5WQS8HveFMv6N64z6JINyec",
  authDomain: "authentication-tutorial-909ed.firebaseapp.com",
  projectId: "authentication-tutorial-909ed",
  storageBucket: "authentication-tutorial-909ed.appspot.com",
  messagingSenderId: "760111261324",
  appId: "1:760111261324:web:0db64e10aa04a054367da9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const imageDb  = getStorage(app);
export { imageDb  };
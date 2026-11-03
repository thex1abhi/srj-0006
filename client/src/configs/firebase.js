import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "srj-006.firebaseapp.com",
  projectId: "srj-006",
  storageBucket: "srj-006.firebasestorage.app",
  messagingSenderId: "233986272722",
  appId: "1:233986272722:web:b555bfce7b98feab8d2c0b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); 
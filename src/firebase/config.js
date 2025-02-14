import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRUNxt9m8NoEzQJLyb9CF5F7oOgB5JyG8",
  authDomain: "arteria-62901.firebaseapp.com",
  projectId: "arteria-62901",
  storageBucket: "arteria-62901.firebasestorage.app",
  messagingSenderId: "530161523000",
  appId: "1:530161523000:web:c1d0f59a445851e6dfc9cd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


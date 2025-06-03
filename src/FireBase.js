// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByMopjXjezuUjdr1ohcQdcQ-2Vpg_zlws",
  authDomain: "gobeng-test.firebaseapp.com",
  projectId: "gobeng-test",
  storageBucket: "gobeng-test.firebasestorage.app",
  messagingSenderId: "31836311850",
  appId: "1:31836311850:web:4ddc55e939690cd3ea0e53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
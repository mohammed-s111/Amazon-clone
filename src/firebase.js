import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC5ZFdiO_a9z6iL4L41ThTl_3y2Rn7JY-8",
  authDomain: "clone-c1a70.firebaseapp.com",
  projectId: "clone-c1a70",
  storageBucket: "clone-c1a70.appspot.com",
  messagingSenderId: "957447721660",
  appId: "1:957447721660:web:a6005fbd5f72054c9e36b9",
  measurementId: "G-4SXDE0WTBZ",
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { db, auth };
export default firebaseApp;

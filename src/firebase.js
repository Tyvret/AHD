import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOuw2v4K_7YgeB6c_Yo76KdF1twRefUgE",
  authDomain: "scrimbatest-a85bb.firebaseapp.com",
  projectId: "scrimbatest-a85bb",
  storageBucket: "scrimbatest-a85bb.appspot.com",
  messagingSenderId: "808487884521",
  appId: "1:808487884521:web:a8a3c9da920468b3e9c278",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const notesCollection = collection(db, "todos");

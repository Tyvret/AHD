import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDOuw2v4K_7YgeB6c_Yo76KdF1twRefUgE",
  authDomain: "scrimbatest-a85bb.firebaseapp.com",
  databaseURL:
    "https://scrimbatest-a85bb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "scrimbatest-a85bb",
  storageBucket: "scrimbatest-a85bb.appspot.com",
  messagingSenderId: "808487884521",
  appId: "1:808487884521:web:a8a3c9da920468b3e9c278",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export const filmCollection = ref(db, "val");

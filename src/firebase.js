// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDMqWOUvx-NAQ94-DFdj76pvJ3WrJDKOGw",
  authDomain: "rex-chatbot-6d89d.firebaseapp.com",
  projectId: "rex-chatbot-6d89d",
  storageBucket: "rex-chatbot-6d89d.appspot.com",
  messagingSenderId: "291087870189",
  appId: "1:291087870189:web:23b6c5aa09c2c9375d04e4",
  measurementId: "G-VVRN17LDVE"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);


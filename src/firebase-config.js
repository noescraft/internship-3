import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCxfk4Iqk4QlH1DqVChOL5Js5QjZ5fj23k",
  authDomain: "noeschat.firebaseapp.com",
  projectId: "noeschat",
  storageBucket: "noeschat.appspot.com",
  messagingSenderId: "79861758278",
  appId: "1:79861758278:web:65edb35d2075cb2e368d47"
};


  
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore()


  
  
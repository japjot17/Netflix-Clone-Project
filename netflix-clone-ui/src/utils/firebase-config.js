
 

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCXpY-xcbalv0E57coZFsMpd_f2PT_WFZo",
  authDomain: "react-netflix-clone-3e842.firebaseapp.com",
  projectId: "react-netflix-clone-3e842",
  storageBucket: "react-netflix-clone-3e842.appspot.com",
  messagingSenderId: "1038137663120",
  appId: "1:1038137663120:web:9e2fcc28873313b7a50215",
  measurementId: "G-RBC6SJP98E"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);




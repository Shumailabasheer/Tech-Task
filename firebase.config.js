
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import{
   getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
     sendEmailVerification


}from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

////===============firestore Database=======================//
import { getFirestore,
  addDoc,
  collection,
  serverTimestamp,

  query,
  where,
  getDocs,
    deleteDoc,
     onSnapshot,
       doc,


 } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyDg5vIAz4uveBpvxh3D62oJZ7VHgLeG7P8",
    authDomain: "tech-task-77c1b.firebaseapp.com",
    projectId: "tech-task-77c1b",
    storageBucket: "tech-task-77c1b.firebasestorage.app",
    messagingSenderId: "70609424676",
    appId: "1:70609424676:web:280876747962ea778c63b1",
    measurementId: "G-52VG2X1GF7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore(app);

  export{
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,

    db,
   addDoc,
  collection,
  serverTimestamp,

  query,
  where,
  getDocs,
    deleteDoc,
     onSnapshot,
       doc,

  }
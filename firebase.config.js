
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import{
   getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    updatePassword,
    signOut

}from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

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
  const auth = getAuth(); //instance banaya

  export{
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    updatePassword,
    signOut
  }
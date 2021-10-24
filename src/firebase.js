// import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyAAK1-BUHKzfDz-iD7JLr2nmvOBlD0RgA0",
//     authDomain: "netflix-clone-37c12.firebaseapp.com",
//     projectId: "netflix-clone-37c12",
//     storageBucket: "netflix-clone-37c12.appspot.com",
//     messagingSenderId: "8157081772",
//     appId: "1:8157081772:web:d1d7775697a0b66099af09",
//     measurementId: "G-07PXDXGY51"
//   };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();

//   const auth = firebase.auth();
  
//   export {auth}
//   export default db;

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAAK1-BUHKzfDz-iD7JLr2nmvOBlD0RgA0",
    authDomain: "netflix-clone-37c12.firebaseapp.com",
    projectId: "netflix-clone-37c12",
    storageBucket: "netflix-clone-37c12.appspot.com",
    messagingSenderId: "8157081772",
    appId: "1:8157081772:web:d1d7775697a0b66099af09",
    measurementId: "G-07PXDXGY51"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();

export {auth}
export default db;



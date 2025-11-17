// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm7ZdCf7h36uh_yDxd2pmO36gO2ioI_So",
  authDomain: "avicolatello-f0cb9.firebaseapp.com",
  projectId: "avicolatello-f0cb9",
  storageBucket: "avicolatello-f0cb9.firebasestorage.app",
  messagingSenderId: "597666483645",
  appId: "1:597666483645:web:b0ee29f7f731d4852156d4",
  measurementId: "G-FCLT51LFMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Exportar esa instancia de firestore

export const db = getFirestore(app)
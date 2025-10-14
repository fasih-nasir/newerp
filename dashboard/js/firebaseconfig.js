// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore ,collection, addDoc, getDocs ,Timestamp ,updateDoc, deleteDoc,getDoc ,doc  } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { getAuth ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

 const firebaseConfig = {
  apiKey: "AIzaSyDcESbpgJGOLNWvr5pfynMhudtPUhFetB0",
  authDomain: "cmss-d216e.firebaseapp.com",
  projectId: "cmss-d216e",
  storageBucket: "cmss-d216e.firebasestorage.app",
  messagingSenderId: "889323041497",
  appId: "1:889323041497:web:ed101eef1ec5db29f5c4c8",
  measurementId: "G-SX0JNGWKE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services you need
 const db = getFirestore(app);
 const auth = getAuth(app);
export{ signInWithEmailAndPassword , db , auth,collection, addDoc, getDocs ,Timestamp ,updateDoc, deleteDoc,getDoc,doc}

 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const analytics = getAnalytics(app);
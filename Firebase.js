// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-L3tN5gpgVSZjPJ5CNzBj513RPXLzXZ8",
  authDomain: "timetable-ab-21.firebaseapp.com",
  projectId: "timetable-ab-21",
  storageBucket: "timetable-ab-21.appspot.com",
  messagingSenderId: "474114867717",
  appId: "1:474114867717:web:659560ca24d591db1b126c",
  measurementId: "G-4K5DHYPR8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
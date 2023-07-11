// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhLgCWyouXEw_9Ann7rZq-YzDy-l_hdIE",
  authDomain: "pinterest-eb337.firebaseapp.com",
  projectId: "pinterest-eb337",
  storageBucket: "pinterest-eb337.appspot.com",
  messagingSenderId: "86595243031",
  appId: "1:86595243031:web:8aa7ec0fb25b748e372052",
  measurementId: "G-JB715FMGD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 
export default app;
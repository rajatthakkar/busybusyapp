// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqdn_qnYISLFeTK4IZzFMC-2f_WFZZswg",
  authDomain: "bussybussyapp.firebaseapp.com",
  projectId: "bussybussyapp",
  storageBucket: "bussybussyapp.appspot.com",
  messagingSenderId: "680484690154",
  appId: "1:680484690154:web:6cbdf203bbb67759095f93",
  measurementId: "G-Y3L5LCSZJD"
};

// Initialize Firebase
export const auth = getAuth()
 export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);
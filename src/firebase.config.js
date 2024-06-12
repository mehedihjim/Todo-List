// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsx5nT9utFqKc75I_nTVV-0-NMlrWKLHc",
    authDomain: "crud-mhjim.firebaseapp.com",
    databaseURL: "https://crud-mhjim-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "crud-mhjim",
    storageBucket: "crud-mhjim.appspot.com",
    messagingSenderId: "352175909479",
    appId: "1:352175909479:web:54478a61d59ad7ae3442c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;
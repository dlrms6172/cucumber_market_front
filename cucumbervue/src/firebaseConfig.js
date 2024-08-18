// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVXUsc88NfEifSAcuEq4zRw4_5x_FB-I4",
    authDomain: "cucumbermarket-a5bc7.firebaseapp.com",
    projectId: "cucumbermarket-a5bc7",
    storageBucket: "cucumbermarket-a5bc7.appspot.com",
    messagingSenderId: "218116308357",
    appId: "1:218116308357:web:b08058ca156f74d5af18ec",
    measurementId: "G-3TSHTKRDV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app , analytics};

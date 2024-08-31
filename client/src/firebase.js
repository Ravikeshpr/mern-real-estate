import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-real-estate-8ac18.firebaseapp.com",
    projectId: "mern-real-estate-8ac18",
    storageBucket: "mern-real-estate-8ac18.appspot.com",
    messagingSenderId: "452679552455",
    appId: "1:452679552455:web:53706bb87a4b8ccb98dde2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

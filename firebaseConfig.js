// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAwiDNs0w50P6hlK6nKzX9G3EtXUJ3T3jw",
    authDomain: "ai-dopple.firebaseapp.com",
    projectId: "ai-dopple",
    storageBucket: "ai-dopple.firebasestorage.app",
    messagingSenderId: "518209644974",
    appId: "1:518209644974:web:6cd000c5bf00336a4ec03f",
    measurementId: "G-7BMY9DB57D"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAwiDNs0w50P6hlK6nKzX9G3EtXUJ3T3jw",
    authDomain: "ai-dopple.firebaseapp.com",
    projectId: "ai-dopple",
    storageBucket: "ai-dopple.firebasestorage.app",
    messagingSenderId: "518209644974",
    appId: "1:518209644974:web:6cd000c5bf00336a4ec03f",
    measurementId: "G-7BMY9DB57D"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

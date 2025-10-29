// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyB457TEBPety9vH9_Zflxat8NNwXhJkRp4",
    authDomain: "fire-pass-e4a61.firebaseapp.com",
    databaseURL: "https://fire-pass-e4a61-default-rtdb.firebaseio.com",
    projectId: "fire-pass-e4a61",
    storageBucket: "fire-pass-e4a61.firebasestorage.app",
    messagingSenderId: "450490715980",
    appId: "1:450490715980:web:dd73ce19e3bea82355c9e9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = firebase.auth();


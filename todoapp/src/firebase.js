import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBtBXzDAGGZ7sbhCaEqQSO_MpV9Yd-B6n8",
  authDomain: "todo-app-b9310.firebaseapp.com",
  databaseURL: "https://todo-app-b9310.firebaseio.com",
  projectId: "todo-app-b9310",
  storageBucket: "todo-app-b9310.appspot.com",
  messagingSenderId: "750305635691",
  appId: "1:750305635691:web:2df34f77c68030e2e4b02e",
  measurementId: "G-LWNGKZ40FN"
};


// Initialize Firebase
const firebaseApp =  firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;

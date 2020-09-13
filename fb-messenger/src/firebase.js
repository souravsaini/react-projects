import firebase from "firebase";

const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXX",
  authDomain: "fb-messenger-clone-0.firebaseapp.com",
  databaseURL: "https://fb-messenger-clone-0.firebaseio.com",
  projectId: "fb-messenger-clone-0",
  storageBucket: "fb-messenger-clone-0.appspot.com",
  messagingSenderId: "525961495997",
  appId: "1:525961495997:web:78500bff7d0b119280bed4",
  measurementId: "G-WJ5QDZSZ6S"
};

// Initialize Firebase
const firebaseApp =  firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;

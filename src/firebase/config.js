import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUptkZTPXyRK9H-KVSHs2qOMVgEpGxmEU",
  authDomain: "vue-blog-abe6a.firebaseapp.com",
  projectId: "vue-blog-abe6a",
  storageBucket: "vue-blog-abe6a.appspot.com",
  messagingSenderId: "1002407824550",
  appId: "1:1002407824550:web:15cf846cd0ad079a6d7867",
};

firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };

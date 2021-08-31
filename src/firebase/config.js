import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmWeDrR5-5CRxUvmlL7NCSVRbK3dabZ8M",
  authDomain: "hopeimage.firebaseapp.com",
  databaseURL: "https://hopeimage-default-rtdb.firebaseio.com",
  projectId: "hopeimage",
  storageBucket: "hopeimage.appspot.com",
  messagingSenderId: "287902400419",
  appId: "1:287902400419:web:9e601799236208bda0a416",
  measurementId: "G-QC775XTQEF",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export default firebaseConfig;

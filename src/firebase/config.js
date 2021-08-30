import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

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

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };

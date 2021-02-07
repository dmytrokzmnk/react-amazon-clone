import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_1JyiImR8qP4YRVhO23YDcgAT2RzxeOI",
  authDomain: "e-clone-eb1d1.firebaseapp.com",
  projectId: "e-clone-eb1d1",
  storageBucket: "e-clone-eb1d1.appspot.com",
  messagingSenderId: "509113267080",
  appId: "1:509113267080:web:af02f6e275f90548cbc03d",
  measurementId: "G-JTSM5ZJ884",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

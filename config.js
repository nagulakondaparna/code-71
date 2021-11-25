import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDMY1Dv5A5g498Wi8mkdlDsqxHQsWRPZg8",
  authDomain: "pro-c71-e229a.firebaseapp.com",
  projectId: "pro-c71-e229a",
  storageBucket: "pro-c71-e229a.appspot.com",
  messagingSenderId: "83869837771",
  appId: "1:83869837771:web:5a3e4fd13015f8b7b72e4e",
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

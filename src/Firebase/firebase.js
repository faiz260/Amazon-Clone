import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDJ2-cYzxXvz18iXlGUQRUTAGrq48bp8xw",
    authDomain: "clone-5145b.firebaseapp.com",
    databaseURL: "https://clone-5145b.firebaseio.com",
    projectId: "clone-5145b",
    storageBucket: "clone-5145b.appspot.com",
    messagingSenderId: "975379486049",
    appId: "1:975379486049:web:797ed52294fa4868af2120",
    measurementId: "G-E2S30K46R0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
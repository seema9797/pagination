import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyDMZrLN0egHJCBtu1DDToLvJf6rhn9B9G0",
    authDomain: "prospect-set.firebaseapp.com",
    databaseURL: "https://prospect-set-default-rtdb.firebaseio.com",
    projectId: "prospect-set",
    storageBucket: "prospect-set.appspot.com",
    messagingSenderId: "604923387987",
    appId: "1:604923387987:web:fd730a6694ac4c7ae1a6a6",
    measurementId: "G-FH4VXHZ9RM"
  };
 // Initialize Firebase
 var fireDb=firebase.initializeApp(firebaseConfig);
 export default fireDb.database().ref();
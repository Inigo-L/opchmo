// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAwIaQ8PdDVuoOwKULFLwrgb945OndQr80",
  authDomain: "opchmo.firebaseapp.com",
  databaseURL: "https://opchmo.firebaseio.com",
  projectId: "opchmo",
  storageBucket: "opchmo.appspot.com",
  messagingSenderId: "78441034334",
  appId: "1:78441034334:web:b3d881fedacbbc7a6cfacf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.firestore.setLogLevel("debug");

var auth = firebase.auth();
var db = firebase.firestore();

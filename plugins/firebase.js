import firebase from "firebase/app";
import "firebase/auth"

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyA5KUQm3n1L0pe7bEKYxO5pG5fgjq3TQss",
        authDomain: "manager-6eb21.firebaseapp.com",
        projectId: "manager-6eb21",
        storageBucket: "manager-6eb21.appspot.com",
        messagingSenderId: "92667529196",
        appId: "1:92667529196:web:db53a6fe21b84ae793e2c9"
      })
}

export default firebase;
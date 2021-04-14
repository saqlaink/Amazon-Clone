import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDY9waiab8mlHpDTgR7CmXSdeQmJdaAgFA",
  authDomain: "clone-32802.firebaseapp.com",
  projectId: "clone-32802",
  storageBucket: "clone-32802.appspot.com",
  messagingSenderId: "1092738997774",
  appId: "1:1092738997774:web:fbd8db56d8bafbe728e65f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

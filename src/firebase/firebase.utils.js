import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAuZkhOc0KlRnfe0qxwO8bZN9jZF5iUw30",
  authDomain: "bears-shop.firebaseapp.com",
  databaseURL: "https://bears-shop.firebaseio.com",
  projectId: "bears-shop",
  storageBucket: "",
  messagingSenderId: "193449299877",
  appId: "1:193449299877:web:9b4dece0f7b24d1403a24c"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

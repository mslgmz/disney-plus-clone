import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCCNpEIX4k06tY0TaaIhsGxql6jIZn8sn4",
  authDomain: "disneyplus-clone-challenge.firebaseapp.com",
  projectId: "disneyplus-clone-challenge",
  storageBucket: "disneyplus-clone-challenge.appspot.com",
  messagingSenderId: "67366105026",
  appId: "1:67366105026:web:b9c777c834429adc7ef05b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

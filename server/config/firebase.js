import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuqK87ltXWWXNkzxso07QAHwdK2X2aFmY",
  authDomain: "prakruti-parikshan-e2377.firebaseapp.com",
  projectId: "prakruti-parikshan-e2377",
  storageBucket: "prakruti-parikshan-e2377.appspot.com",
  messagingSenderId: "573973787870",
  appId: "1:573973787870:web:7fc2744c887cd27241fe4f",
  measurementId: "G-NKQQ7158ZV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

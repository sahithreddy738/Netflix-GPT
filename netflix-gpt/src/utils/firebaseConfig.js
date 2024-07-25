import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAR9Tcr9Do-dKKr7KImeW7h6rI4KpetVW0",
  authDomain: "netflix-gpt-c5b78.firebaseapp.com",
  projectId: "netflix-gpt-c5b78",
  storageBucket: "netflix-gpt-c5b78.appspot.com",
  messagingSenderId: "786823343711",
  appId: "1:786823343711:web:c48a48e97df20bea93f5ea",
  measurementId: "G-X4EGBTFE1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth=getAuth();
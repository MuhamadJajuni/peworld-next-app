// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByEPFG5RqrcCFVGPW1iu0LpCRRLcS1GeU",
  authDomain: "nextjs-14-app-peworld.firebaseapp.com",
  projectId: "nextjs-14-app-peworld",
  storageBucket: "nextjs-14-app-peworld.appspot.com",
  messagingSenderId: "177965426453",
  appId: "1:177965426453:web:4ac44800503b0c3bb66b1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
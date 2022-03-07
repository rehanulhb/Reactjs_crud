import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAMkr6sAvoNENpAj_tsd9Gx7zpWss6bW7g",
    authDomain: "fir-tutorial-6ef09.firebaseapp.com",
    projectId: "fir-tutorial-6ef09",
    storageBucket: "fir-tutorial-6ef09.appspot.com",
    messagingSenderId: "291937780281",
    appId: "1:291937780281:web:4e07cd8cbe41e332f5c3e8",
    measurementId: "G-YSGYW6MKCF"
  };

  const app = initializeApp(firebaseConfig);

  export const db= getFirestore(app);
  
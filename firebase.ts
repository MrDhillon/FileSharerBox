import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

    apiKey: "AIzaSyAZyIhKaJSwYbZAUhBGeW4LH4P7Eforh9w",
  
    authDomain: "filesharer-24462.firebaseapp.com",
  
    projectId: "filesharer-24462",
  
    storageBucket: "filesharer-24462.appspot.com",
  
    messagingSenderId: "237700393123",
  
    appId: "1:237700393123:web:7fe82a9a10e001eb01f716",
  
    measurementId: "G-F4HW4CGG2C"
  
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage(app);

  export {db, auth, storage};
  
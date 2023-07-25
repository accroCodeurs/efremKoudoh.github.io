// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
function startFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyBmvt5gEqs_hYMSXDSNl-q6UgtlHxVCwr4",
        authDomain: "portofolio-3f623.firebaseapp.com",
        databaseURL: "https://portofolio-3f623-default-rtdb.firebaseio.com",
        projectId: "portofolio-3f623",
        storageBucket: "portofolio-3f623.appspot.com",
        messagingSenderId: "944832730158",
        appId: "1:944832730158:web:e363e291ff0ee650673bbf"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      return getDatabase(app);
}

export default startFirebase();

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const config = {
  apiKey: "AIzaSyDkZKzkV8d9NY9wVnZx9mvfp9g8sfORis0",
  authDomain: "rent-cars-7f432.firebaseapp.com",
  databaseURL:
    "https://rent-cars-7f432-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rent-cars-7f432",
  storageBucket: "rent-cars-7f432.appspot.com",
  messagingSenderId: "874111293353",
  appId: "1:874111293353:web:808a4f0383d635bf9256b8",
};

const app = initializeApp(config);

export default getDatabase(app);

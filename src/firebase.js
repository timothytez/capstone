// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7p-Z7UeVllnhWmZVu_7zKkNVEhJPbFXo",
  authDomain: "capstone-7c33c.firebaseapp.com",
  projectId: "capstone-7c33c",
  storageBucket: "capstone-7c33c.appspot.com",
  messagingSenderId: "642418509693",
  appId: "1:642418509693:web:3872898985d7491d602e14",
  measurementId: "G-391D5KKFDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore, collection, getDocs} from "firebase/firestore/lite";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// import firebaseConfig from './firebaseConfig'

// const firebaseConfig ={

// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)
// export const auth = getAuth(app);
// export default app 

// async function getCities(db) {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
//   }
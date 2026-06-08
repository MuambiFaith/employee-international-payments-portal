import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCt4y7C5kPlnPFqB7vPZjIcMhSj0OCxWA8",
  authDomain: "payment-portal-82298.firebaseapp.com",
  projectId: "payment-portal-82298",
  storageBucket: "payment-portal-82298.firebasestorage.app",
  messagingSenderId: "834557803351",
  appId: "1:834557803351:web:caa117b8d139d1dbf11c12",
  measurementId: "G-S1YF3YV2R2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
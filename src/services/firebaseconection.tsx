// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDstRgR8m0_wWWiuRGjpV2QvPT2oMXVSjE",
  authDomain: "web-carros-loiz.firebaseapp.com",
  projectId: "web-carros-loiz",
  storageBucket: "web-carros-loiz.firebasestorage.app",
  messagingSenderId: "906554689023",
  appId: "1:906554689023:web:d14b589fba0aa2796f93ca",
  measurementId: "G-TS34CK5G35"
};

const app = initializeApp(firebaseConfig);

if (typeof window !== "undefined") {
  try {
    getAnalytics(app);
  } catch (e) {
  }
}

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
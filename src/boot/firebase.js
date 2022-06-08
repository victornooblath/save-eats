// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  // apiKey: "AIzaSyCBbOy3mijNWajGQg8DDFVr89FoyNNtnB8",
  authDomain: "save-eats-vue.firebaseapp.com",
  projectId: "save-eats-vue",
  storageBucket: "save-eats-vue.appspot.com",
  messagingSenderId: "997516710611",
  appId: "1:997516710611:web:bad0fe8db68bbafb3bfa26",
  measurementId: "G-QP0ZD89VQ6",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export default async ({ Vue }) => {
  console.log(process.env.FIREBASE_KEY);
  Vue.prototype.$firebase = app;
  Vue.prototype.$db = db;
  Vue.prototype.$auth = auth;
  Vue.prototype.$storage = storage;
};

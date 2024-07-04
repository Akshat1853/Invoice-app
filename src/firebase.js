import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAI8dTdXU3cCZhzPYpXs15QOL0I-T883oQ",
  authDomain: "invoice-app-765c2.firebaseapp.com",
  projectId: "invoice-app-765c2",
  storageBucket: "invoice-app-765c2.appspot.com",
  messagingSenderId: "721453946257",
  appId: "1:721453946257:web:f1903f75eea73d427bb630"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
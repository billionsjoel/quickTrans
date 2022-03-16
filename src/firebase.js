// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import auth from 'firebase/auth';
import storage from 'firebase/storage';
import firestore from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCP2ZGZQd0il6EyLA-vdTG4Y-gLHV4Pz9c',
  authDomain: 'quicktrans-1b800.firebaseapp.com',
  projectId: 'quicktrans-1b800',
  storageBucket: 'quicktrans-1b800.appspot.com',
  messagingSenderId: '1009287031432',
  appId: '1:1009287031432:web:348e5c5240d9270ec5cd3d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {
  app, auth, storage, firestore,
};

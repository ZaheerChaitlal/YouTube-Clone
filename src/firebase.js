import firebase from 'firebase/compat/app';

import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDb_hS9tkt3dOmB8HwGjhw1JxNru-MZKMc",
  authDomain: "cole-33cbc.firebaseapp.com",
  projectId: "cole-33cbc",
  storageBucket: "cole-33cbc.appspot.com",
  messagingSenderId: "318577136171",
  appId: "1:318577136171:web:70e4e644cfbbb78179106e"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
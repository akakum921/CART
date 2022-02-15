import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBQ3o2trG94hdpr74x6RncrSJoIDfxCviU",
  authDomain: "cart-e0ff4.firebaseapp.com",
  projectId: "cart-e0ff4",
  storageBucket: "cart-e0ff4.appspot.com",
  messagingSenderId: "523559802481",
  appId: "1:523559802481:web:6d4f33409520acf3faedd0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


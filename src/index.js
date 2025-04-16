import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlxdkB4u1mXoPZA7TDPMxnJ7A3XmcjZBg",
    authDomain: "coderhouse-ecommerce-b2453.firebaseapp.com",
    projectId: "coderhouse-ecommerce-b2453",
    storageBucket: "coderhouse-ecommerce-b2453.appspot.com",
    messagingSenderId: "946902079510",
    appId: "1:946902079510:web:75ad57603b0438ef553d37"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

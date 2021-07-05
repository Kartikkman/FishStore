import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   
    apiKey: "AIzaSyCfYa-2kMePpqAgUpLC6Jqx_35yI4JuBMA",
    authDomain: "take-my-fish.firebaseapp.com",
    databaseURL: "https://take-my-fish-default-rtdb.firebaseio.com",
    projectId: "take-my-fish",
    storageBucket: "take-my-fish.appspot.com",
    messagingSenderId: "354575097952",
    appId: "1:354575097952:web:a54555e359a16f5378e305",
    measurementId: "G-3YP76HMT7M"

});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;
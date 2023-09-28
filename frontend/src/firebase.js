import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBwCLZj0xMsfIHt3z85pPhw6ooF-qaUQf0",
    authDomain: "vidlit-mern.firebaseapp.com",
    projectId: "vidlit-mern",
    storageBucket: "vidlit-mern.appspot.com",
    messagingSenderId: "894818781909",
    appId: "1:894818781909:web:2242d8799e084633da705c",
    measurementId: "G-GG6V98C976"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage
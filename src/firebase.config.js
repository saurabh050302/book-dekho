import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBMBfHPuKvj39s6FnY6NnhmRowgLIqHcx4",
    authDomain: "book-dekho-c95dc.firebaseapp.com",
    projectId: "book-dekho-c95dc",
    storageBucket: "book-dekho-c95dc.appspot.com",
    messagingSenderId: "120122134496",
    appId: "1:120122134496:web:8aa7565f700ec6a258e585"
};

const app = initializeApp(firebaseConfig);

export default { app };
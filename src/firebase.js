import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyAKQoebXkauuI7tSQl8-mvamToFp-vdXkM",
    authDomain: "spring-trophy.firebaseapp.com",
    databaseURL: "https://spring-trophy.firebaseio.com",
    projectId: "spring-trophy",
    storageBucket: "spring-trophy.appspot.com",
    messagingSenderId: "1057971749002"
})

export const db = app.database();
export const namesRef = db.ref('names');
export const surnameRef = db.ref('surnames');


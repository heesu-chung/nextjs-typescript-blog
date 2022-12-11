import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCbOEJUNp4imCr8k_-4bs8LslVltOhi15c",
    authDomain: "vue-blog-3e728.firebaseapp.com",
    projectId: "vue-blog-3e728",
    storageBucket: "vue-blog-3e728.appspot.com",
    messagingSenderId: "469671127943",
    appId: "1:469671127943:web:ccfc724598c10a883a8122",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { db, storage, timestamp };

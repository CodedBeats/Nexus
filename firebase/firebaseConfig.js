import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARqst_oHsoaxRcTiyeTACGLo80A_r_Lc4",
    authDomain: "nexus-2f89a.firebaseapp.com",
    projectId: "nexus-2f89a",
    storageBucket: "nexus-2f89a.appspot.com",
    messagingSenderId: "50014803493",
    appId: "1:50014803493:web:0f47f4326385c2043991cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of documents from a collection in database
async function getPop(db) {
    const popularity = collection(db, "popularity");
    const popSnapshot = await getDocs(popularity);
    const popList = popSnapshot.docs.map((doc) => doc.data());
    // return popList;
    console.log(popList)
}


export { getPop, db}

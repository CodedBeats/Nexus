import { doc, getDoc, getDocs, updateDoc, collection, query, where } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js"
import { db } from "../firebase/misc/firebaseConfig.js"

// === Update Game Popularity === //
async function getGameDoc(collectionName, gameName) {
    const gamesCollectionRef = collection(db, collectionName);
    const q = query(gamesCollectionRef, where('name', '==', gameName));
    
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
        const docSnapshot = querySnapshot.docs[0]; // Assuming there's only one match
        return docSnapshot.id; // Access the id property
    } else {
        return null; // No match found
    }
}

async function updatePopularity() {
    // Get the selected gameId from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const gameName = urlParams.get("gameId");
    
    const collectionName = "games";
    const fieldName = "popularity";

    // get docID from doc name
    const docId = await getGameDoc(collectionName, gameName);
    console.log("docId:", docId); // Check the value of docId

    // Get the current value from db
    const docRef = doc(db, collectionName, docId);
    const docSnapshot = await getDoc(docRef);
    const currentValue = docSnapshot.data()[fieldName];

    // Modify the value
    const updatedValue = currentValue + 1;

    // Use the updateDoc function to update the specific field
    const data = { [fieldName]: updatedValue };

    updateDoc(docRef, data)
        .then(() => {
            console.log("Game popularity updated successfully!");
        })
        .catch((error) => {
            console.error("Error updating popularity:", error);
        });
}
// ============================== //


// update popularity on page load
document.addEventListener("DOMContentLoaded", updatePopularity);

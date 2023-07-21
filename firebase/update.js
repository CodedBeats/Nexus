import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js"
import { db } from "./firebaseConfig.js"

// doc(database, collection, id)
const gameRef = doc(db, "popularity", "game1");
let docSnap = await getDoc(gameRef);



let updatePop = () => {
    // set value
    updateDoc(gameRef, {
        pop: docSnap.data().pop += 1,
    });
    console.log(docSnap.data())
}

export { updatePop }

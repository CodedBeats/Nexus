import { collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js"
import { db } from "./firebaseConfig.js"
import { getTotalDocuments } from "./misc.js"


async function createDocument() {
    const collectionRef = collection(db, "popularity")

    // set custom ID here...maybe turn into a func
    const documentId = `doc${await getTotalDocuments()}`;

    // turn this into params
    const newDocumentData = {
        testField: "test field info2",
        // add more
    }

    try {
        // add doc
        const docRef = await setDoc(doc(collectionRef, documentId), newDocumentData)

        console.log("Document created with ID:", documentId)
    } catch (error) {
        console.error("Error creating document:", error)
    }
}

export { createDocument }

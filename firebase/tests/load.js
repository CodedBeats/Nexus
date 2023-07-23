import { getPop, db } from "../firebaseConfig.js"
import { updateDocument } from "../CRUD/update.js"
import { createDocument } from "../CRUD/create.js"
import { getData } from "../CRUD/read.js"


await getData("popularity", "doc33")

document.getElementById('btn1').addEventListener('click', updateDocument)

// create doc
document.getElementById('btn2').addEventListener("click", () => {
  
    const collectionName = "popularity";
    
    const data = {
        testField: "test field info33 fffffffffffffffffff -- rrgggggggggg",
        // add more
    }
  
    createDocument(collectionName, data);
});


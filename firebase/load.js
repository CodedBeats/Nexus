import { updateDocument } from "./CRUD/update.js";
import { createDocument } from "./CRUD/create.js";
import { getData } from "./CRUD/read.js";
import { deleteDocument } from "./CRUD/delete.js";

// await getData("popularity", "doc33")

// create doc
document.getElementById("btn1").addEventListener("click", () => {
    const collectionName = "popularity";

    const data = {
        testField: "test field info33 fffffffffffffffffff -- rrgggggggggg",
        // add more
    };

    createDocument(collectionName, data);
});

// await getData("popularity", "doc33")

// update doc
document.getElementById("btn3").addEventListener("click", updateDocument);

// delete doc
document.getElementById("btn4").addEventListener("click", () => {
    const collectionName = "popularity";
    const docId = "doc34";

    deleteDocument(collectionName, docId);
});

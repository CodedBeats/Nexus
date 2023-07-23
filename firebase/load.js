import { getPop, db } from "./firebaseConfig.js"
import { updateDocument } from "./update.js"
import { createDocument } from "./create.js"
import { getTotalDocuments } from "./misc.js"

let getDB = () => {
    console.log("loading DB")
    getPop(db)
}

getTotalDocuments()

document.getElementById('btn1').addEventListener('click', getDB)
document.getElementById('btn2').addEventListener('click', updateDocument)
document.getElementById('btn3').addEventListener('click', createDocument)


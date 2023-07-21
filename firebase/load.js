import { getPop, db } from "./firebaseConfig.js"
import { updatePop } from "./update.js"

let getDB = () => {
    console.log("loading DB")
    getPop(db)
}


document.getElementById('btn1').addEventListener('click', getDB)
document.getElementById('btn2').addEventListener('click', updatePop)


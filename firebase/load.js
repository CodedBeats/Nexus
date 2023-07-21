import { getPop, db } from "./firebaseConfig.js"

console.log("loaded firebase config")
getPop(db)

// signUp.js
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { auth, db } from "../../misc/firebaseConfig.js";

// Function to handle user sign-up
async function signUp(email, password, accountName) {
    try {
        // Create a new user using Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;

        // Create a new document for the user in the db
        const userRef = doc(db, "users", user.uid);
        const userData = {
            email: user.email,
            password: password,
            accountName: accountName,
        };
        await setDoc(userRef, userData);

        console.log("User account created successfully!");
        console.log(user.email, password, accountName);
    } catch (error) {
        console.error("Error creating user account:", error.message);
    }
}

// Example usage in your sign-up form submit handler
const signUpForm = document.getElementById("signUpForm");

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const accountName = document.getElementById("accountName").value;

    signUp(email, password, accountName);
});

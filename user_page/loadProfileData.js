import { getDoc, doc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { db, auth } from "../firebase/misc/firebaseConfig.js";


async function loadProfile() {
    // Check if a user is logged in
    const user = auth.currentUser;

    if (user) {
        try {
            // Retrieve the user's profile document from db
            const userRef = doc(db, "users", user.uid);
            const profileSnapshot = await getDoc(userRef);

            if (profileSnapshot.exists()) {
                // Get the user's profile data
                const profileData = profileSnapshot.data();
                console.log(profileData.accountName, profileData.email, profileData.realName);

                // Update the profile page HTML elements with the user's information
                document.getElementById("acc-name").textContent = profileData.accountName;
                document.getElementById("email-address").textContent = profileData.email;
                document.getElementById("real-name").textContent = profileData.realName;
                // Add more fields as needed

            } else {
                console.log("User profile not found");
            }
        
        // handle user error
        } catch (error) {
            console.error("Error loading user profile:", error);
        }
    } else {
        console.log("No user is currently logged in");
    }
}


// Listen for changes in authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is signed in:", user);

        // load the profile
        loadProfile()

    } else {
        // User is signed out
        console.log("User is signed out.");
        
        // You can redirect the user to the login page or perform other actions as needed.
    }
});

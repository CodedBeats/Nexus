import { getAuth } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { getDoc, doc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { db } from "../misc/firebaseConfig.js";


async function loadProfile() {
    // Check if a user is logged in
    const user = getAuth().currentUser;

    if (user) {
        try {
            // Retrieve the user's profile document from db
            const userRef = doc(db, "users", user.uid);
            const profileSnapshot = await getDoc(userRef);
            console.log(profileSnapshot);

            if (profileSnapshot.exists()) {
                // Get the user's profile data
                const profileData = profileSnapshot.data();

                // Update the profile page HTML elements with the user's information
                document.getElementById("user-display-name").textContent = profileData.username;
                document.getElementById("user-email").textContent = profileData.email;
                // Add more fields as needed

                // Show the profile page ig the original profile display = "none"
                // document.getElementById("profilePage").style.display = "block";
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

// Call the function to load the profile when the page loads
document.addEventListener("DOMContentLoaded", loadProfile);

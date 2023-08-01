import { getDoc, doc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { db, auth } from "../misc/firebaseConfig.js";


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
                console.log(profileData.accountName, profileData.email);

                // Update the profile page HTML elements with the user's information
                document.getElementById("field1").textContent = profileData.accountName;
                document.getElementById("field2").textContent = profileData.email;
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


// Listen for changes in authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is signed in:", user);

        // Call the function to load the profile when the page loads
        loadProfile()

    } else {
        // User is signed out
        console.log("User is signed out.");
        
        // You can redirect the user to the login page or perform other actions as needed.
    }
});

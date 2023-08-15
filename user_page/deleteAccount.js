import { onAuthStateChanged, reauthenticateWithCredential, EmailAuthProvider } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { auth, db } from "../firebase/misc/firebaseConfig.js";

// Function to delete the account
function deleteAccount() {
    // Get the currently logged-in user
    const currentUser = auth.currentUser;
    const userDocRef = doc(db, "users", currentUser.uid);

    if (currentUser) {
        // Prompt the user to re-enter their password to confirm identity
        const password = prompt(
            "Please re-enter your password to confirm account deletion."
        );

        // Create a credential with the provided password
        const credential = EmailAuthProvider.credential(
            currentUser.email,
            password
        );

        // Try to re-authenticate the user first
        reauthenticateWithCredential(currentUser, credential)
            .then(() => {
                // User successfully re-authenticated, proceed with account deletion
                if (
                    confirm(
                        "Are you sure you want to delete your account? This action cannot be undone."
                    )
                ) {
                    // Delete the user account first
                    currentUser
                        .delete()
                        .then(() => {
                            // User account deletion successful, now delete the Firestore document associated with the user
                            deleteDoc(userDocRef)
                                .then(() => {
                                    // Document deletion successful, handle any further actions (e.g., sign out)
                                    alert(
                                        "Account and associated document deleted successfully."
                                    );
                                })
                                .catch((error) => {
                                    // Document deletion failed, handle the error
                                    alert(
                                        "An error occurred while deleting the associated document. Please try again later."
                                    );
                                    console.error(error);
                                });
                        })
                        .catch((error) => {
                            // User account deletion failed, handle the error
                            alert(
                                "An error occurred while deleting the account. Please try again later."
                            );
                            console.error(error);
                        });
                        
                    // link to home
                    // window.location.href = "../home_page/homepage.html";
                }
            })
            .catch((error) => {
                // Re-authentication failed, handle the error
                alert(
                    "Password re-authentication failed. Please make sure you entered the correct password."
                );
                console.error(error);
            });

    } else {
        // User is not logged in, handle accordingly (e.g., show a login prompt)
        alert("You must be logged in to delete your account.");
    }
}

// Add event listener to the delete button
const deleteButton = document.getElementById("delete-acc-btn");

// Listen for changes in authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        // diaply loading page
        deleteButton.addEventListener("click", deleteAccount);

    } else {
        // User is signed out
        console.log("User is signed out.");

        // You can redirect the user to the login page or perform other actions as needed.
    }
});

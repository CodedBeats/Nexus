import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { db } from "../firebase/misc/firebaseConfig.js";

// Function to fetch trending games from db
async function fetchTrendingGames(threshold) {
    try {
        const trendingGamesSnapshot = await getDocs(collection(db, "games"));
        const trendingGames = [];
        trendingGamesSnapshot.forEach((doc) => {
            const game = doc.data();
            if (game.popularity >= threshold) {
                trendingGames.push({ id: doc.id, ...game });
            }
        });
        return trendingGames;
    } catch (error) {
        console.error("Error fetching trending games:", error);
        return [];
    }
}

export { fetchTrendingGames };

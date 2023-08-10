import { fetchNewGames } from "./fetchNewGames.js";

// Function to create a game card element
function renderGameCard(gameData) {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");

    const gameImgContainer = document.createElement("div");
    gameImgContainer.classList.add("game-image-container");
    gameCard.appendChild(gameImgContainer);

    const gameImage = document.createElement("img");
    gameImage.classList.add("game-image");
    gameImage.src = gameData.imgPath;
    gameCard.appendChild(gameImage);

    const gameTitle = document.createElement("div");
    gameTitle.classList.add("game-title");
    gameTitle.textContent = gameData.name;
    gameCard.appendChild(gameTitle);

    const gameCreator = document.createElement("div");
    gameCreator.classList.add("game-creator");
    gameCreator.textContent = `Creator: ${gameData.createdBy}`;
    gameCard.appendChild(gameCreator);

    const gameTimestamp = document.createElement("div");
    gameTimestamp.classList.add("game-timestamp");
    const timestamp = new Date(gameData.createdAt.seconds * 1000); // Convert to milliseconds
    gameTimestamp.textContent = `Date: ${timestamp.toLocaleDateString()}`;
    gameCard.appendChild(gameTimestamp);

    return gameCard;
}

// Function to load and display games
async function loadAndDisplayGames() {
    const gameContainer = document.getElementById("new-games-container");
    const games = await fetchNewGames();

    if (games.length === 0) {
        gameContainer.textContent = "No games available in the past 30 days.";
        return;
    }

    games.forEach((gameData) => {
        const gameCard = renderGameCard(gameData);
        gameContainer.appendChild(gameCard);
    });
}

// load new games
document.addEventListener("DOMContentLoaded", loadAndDisplayGames);

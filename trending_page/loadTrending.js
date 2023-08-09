import { fetchTrendingGames } from "./fetchTrendingGames.js";

// Function to render a game card
function renderGameCard(game) {
    console.log(game.imageUrl, game.title, game.popularity)

    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");

    const gameImgContainer = document.createElement("div");
    gameImgContainer.classList.add("game-image-container");
    gameCard.appendChild(gameImgContainer);
  
    const gameImage = document.createElement("img");
    gameImage.classList.add("game-image");
    gameImage.src = game.imgPath;
    gameImgContainer.appendChild(gameImage);
  
    const gameTitle = document.createElement("div");
    gameTitle.classList.add("game-title");
    gameTitle.textContent = game.name;
    gameCard.appendChild(gameTitle);
  
    const gamePopularity = document.createElement("div");
    gamePopularity.classList.add("game-popularity");
    gamePopularity.textContent = `Popularity: ${game.popularity}`;
    gameCard.appendChild(gamePopularity);
  
    return gameCard;
}

// Function to load trending games from db
async function loadTrendingGames() {
    const trendingGamesContainer = document.getElementById("gameContainer");
    const threshold = 2; // load games >= threshold

    const trendingGames = await fetchTrendingGames(threshold);
    trendingGames.forEach((game) => {
        const gameCard = renderGameCard(game);
        trendingGamesContainer.appendChild(gameCard);
    });
}

// Call the function to load trending games when the page is ready
document.addEventListener("DOMContentLoaded", loadTrendingGames);

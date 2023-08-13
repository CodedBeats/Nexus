// Get the selected gameId from the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get("gameId");

// Create a script element
const scriptElement = document.createElement("script");

// Set the source of the script based on the selected game
if (gameId === "snake") {
    loadGame("../games/snake/snake.js", "../games/snake/snake.css", 900, 600);
} else if (gameId === "pong") {
    loadGame("../games/pong/pong.js", "../games/pong/pong.css");
}
// Add more conditions for other games if needed

function loadGame(scriptSrc, styleHref, canvasWidth, canvasHeight) {
    const scriptElement = document.createElement("script");
    scriptElement.src = scriptSrc;
    document.getElementById("gameScript").appendChild(scriptElement);

    const stylesheetElement = document.getElementById("gameStylesheet");
    stylesheetElement.href = styleHref;

    const canvas = document.getElementById('gameCanvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
}

// Append the script element to the page
document.getElementById("gameScript").appendChild(scriptElement);

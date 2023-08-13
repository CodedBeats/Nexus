// Get the selected gameId from the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get("gameId");

// Create a script element
const scriptElement = document.createElement("script");

// Set the source of the script based on the selected game
if (gameId === "snake") {
    loadGame("../games/snake/snake.js", "../games/snake/snake.css", 900, 600);
} 
else if (gameId === "pong") {
    console.log("pong game")
}
// Add more conditions for other games if needed

// game not available yet
else {
    const canvas = document.getElementById('gameCanvas');
    const restartBtn = document.getElementById("restart-game")
    console.log("WIP");
    loadWip();

    // hide game content
    canvas.style.display = "none";
    restartBtn.style.display = "none";
}

// load apropriate game and set canvas width and height
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

// load WIP overlay
function loadWip() {
    const wipOverlay = document.getElementById('wip');
    wipOverlay.classList.add('active');
}

// Append the script element to the page
document.getElementById("gameScript").appendChild(scriptElement);

// ===== Navbar component ===== //
let createNavbarComponent = () => {
    let navbarComponentHTML = `
    <div id="dom-side-nav" class="side-nav">
        <div class="nav-menu">
            <a href="../home_page/homepage.html" data-page="homepage">
                <div class="nav-link">
                    <i class="fa-solid fa-house"></i>
                    <div class="nav-link-name">Home</div>
                </div>
            </a>
            <a href="../about_page/aboutpage.html" data-page="aboutpage">
                <div class="nav-link">
                    <i class="fa-solid fa-info"></i>
                    <div class="nav-link-name">About</div>
                </div>
            </a>
            <a href="../trending_page/trendingpage.html" data-page="trendingpage">
                <div class="nav-link">
                    <i class="fa-solid fa-fire"></i>
                    <div class="nav-link-name">Trending</div>
                </div>
            </a>
            <a href="#">
                <div class="nav-link">
                    <i class="fa-solid fa-shuffle"></i>
                    <div class="nav-link-name">Random</div>
                </div>
            </a>
        </div>
        <hr class="nav-page-break" />
        <div class="nav-categories">
            <a href="#">
                <div class="nav-link">
                    <i class="fa-solid fa-puzzle-piece"></i>
                    <div class="nav-categories-name">Puzzle</div>
                </div>
            </a>
            <a href="#">
                <div class="nav-link">
                    <i class="fa-solid fa-dice-five"></i>
                    <div class="nav-categories-name">Stratergy</div>
                </div>
            </a>
            <a href="#">
                <div class="nav-link">
                <i class="fa-regular fa-chess-rook"></i>
                    <div class="nav-categories-name">Tower<br>Defense</div>
                </div>
            </a>
            <a href="#">
                <div class="nav-link">
                    <i class="fa-solid fa-atom"></i>
                    <div class="nav-categories-name">Sci-Fi</div>
                </div>
            </a>
            <a href="#">
                <div class="nav-link">
                    <i class="fa-solid fa-rocket"></i>
                    <div class="nav-categories-name">Space</div>
                </div>
            </a>
            <a href="#">
                <div class="nav-link">
                    <i class="fa-solid fa-flag-checkered"></i>
                    <div class="nav-categories-name">Racing</div>
                </div>
            </a>
            <a href="#">
                <div class="nav-link">
                    <i class="fa-solid fa-wheat-awn"></i>
                    <div class="nav-categories-name">Farming</div>
                </div>
            </a>
            <a href="#">
                <div class="nav-link">
                    <i class="fa-solid fa-question"></i>
                    <div class="nav-categories-name">Trivia</div>
                </div>
            </a>
            <a href="#">
                <div class="nav-link">
                    <i class="fa-solid fa-baseball"></i>
                    <div class="nav-categories-name">Sport</div>
                </div>
            </a>
            <a href="#">
                <div class="nav-link">
                    <i class="fa-solid fa-skull-crossbones"></i>
                    <div class="nav-categories-name">Pirate</div>
                </div>
            </a>
        </div>
    </div>
    `;

    return navbarComponentHTML;
}

// ===== Load Navbar ===== //
const navbarComponentHTML = createNavbarComponent();
document.getElementById("navbar-container").innerHTML = navbarComponentHTML;
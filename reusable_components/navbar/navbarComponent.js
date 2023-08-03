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
            <a href="#">
                <div class="nav-link" data-page="trendingpage">
                    <i class="fa-solid fa-fire"></i>
                    <div class="nav-link-name">Trending</div>
                </div>
            </a>
            <a href="#">
                <div class="nav-link" data-page="randompage">
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
        </div>
    </div>
    `;

    return navbarComponentHTML;
}

// ===== Load Navbar ===== //
const navbarComponentHTML = createNavbarComponent();
document.getElementById("navbar-container").innerHTML = navbarComponentHTML;
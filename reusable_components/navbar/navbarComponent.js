// ===== Navbar component ===== //
let createNavbarComponent = () => {
    let navbarComponentHTML = `
    <div id="dom-side-nav" class="side-nav">
        <div class="nav-menu">
            <div id="collapsed-nav-menu">
                <a href="../home_page/homepage.html" data-page="homepage">
                    <div class="nav-link">
                        <i class="fa-solid fa-house"></i>
                        <div class="nav-link-name">Home</div>
                    </div>
                </a>
                <a href="../about_page/aboutpage.html" data-page="aboutpage">
                    <div class="nav-link">
                        <i class="fa-solid fa-info" style="color: #878B9F;"></i>
                        <div class="nav-link-name">About</div>
                    </div>
                </a>
                <a href="#">
                    <div class="nav-link" data-page="trendingpage">
                    <i class="fa-solid fa-fire" style="color: #878B9F;"></i>
                        <div class="nav-link-name">Trending</div>
                    </div>
                </a>
                <a href="#">
                    <div class="nav-link" data-page="randompage">
                    <i class="fa-solid fa-shuffle" style="color: #878B9F;"></i>
                        <div class="nav-link-name">Random</div>
                    </div>
                </a>
            </div>
        </div>
        <hr class="nav-page-break" />
        <p id="nav-categories-title">Popular Genres</p>
        <div class="nav-categories">
            <div id="collapsed-nav-categories">
                <a href="#"><i class="fa-solid fa-puzzle-piece" style="color: #ffffff;"></i><br>Puzzle</a>
                <a href="#"><i class="fa-solid fa-dice-five" style="color: #ffffff;"></i><br>Stratergy</a>
            </div>
        </div>
    </div>
    `;

    return navbarComponentHTML;
}

// ===== Load Navbar ===== //
const navbarComponentHTML = createNavbarComponent();
document.getElementById("navbar-container").innerHTML = navbarComponentHTML;
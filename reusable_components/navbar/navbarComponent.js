// ===== Navbar component ===== //
let createNavbarComponent = () => {
    let navbarComponentHTML = `
    <div id="dom-side-nav" class="side-nav">
        <div class="nav-menu">
            <div id="collapsed-nav-menu">
                <a href="../home_page/homepage.html"><i class="fa-solid fa-house" style="color: #ffffff;"></i><br>Home</a>
                <a href="../about_page/aboutpage.html"><i class="fa-solid fa-info" style="color: #ffffff;"></i><br>About</a>
            </div>
        </div>
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
// ===== Navbar component ===== //
let createNavbarComponent = () => {
    let navbarComponentHTML = `
    <div id="dom-side-nav" class="side-nav">
        <div class="nav-menu">
            <div id="open-nav-menu" style="display:none;">
                <a href="../homepage.html">Home</a>
                <a href="../game page/gamespage.html">Games</a>
                <a href="../aboutpage.html">About</a>
                <a href="../reusable components/example.html">Tests</a>
            </div>
            <div id="collapsed-nav-menu">
                <a href="../homepage.html">Home</a>
                <a href="../game page/gamespage.html">Games</a>
                <a href="../aboutpage.html">About</a>
                <a href="../firebase/firebase.html">Tests</a>
            </div>
        </div>
        <div class="nav-categories">
            <div id="open-nav-categories" style="display:none;">
                <p>Popular Genres</p>
                <a href="#">Puzzle</a>
                <a href="#">Stratergy</a>
                <a href="#">Idle</a>
            </div>
            <div id="collapsed-nav-categories">
                <a href="#">icon</a>
            </div>
        </div>
    </div>
    `;

    return navbarComponentHTML;
}


// ===== Navbar functionality ===== //
// Toggle Nav
let toggleNav = () => {
    // elements
    const sideNav = document.getElementById("dom-side-nav")
    const toggleNavBtn = document.getElementById("navbarToggleIcon")
    // store in arr and foreach
    const openMenu = document.getElementById("open-nav-menu")
    const collapsedMenu = document.getElementById("collapsed-nav-menu")
    const openCategories = document.getElementById("open-nav-categories")
    const collapsedCategories = document.getElementById("collapsed-nav-categories")

    if (openMenu.style.display === "none") {
        // toggleNavBtn.innerHTML = "Nav <<"

        openMenu.style.display = "block"
        collapsedMenu.style.display = "none"
        openCategories.style.display = "block"
        collapsedCategories.style.display = "none"
        
        // phone view adjustments 
        if (window.screen.width <= 800) {
            // console.log(sideNav)
            sideNav.style.width = "100vw"
            document.body.style.height = "100%"
            document.body.style.marginLeft = "100%"
        } 
        // desktop view adjustments
        else {
            sideNav.style.width = "15vw" 
            document.body.style.marginLeft = "15vw"
            document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
        }
    } else {
        // toggleNavBtn.innerHTML = "Nav >>"

        openMenu.style.display = "none"
        collapsedMenu.style.display = "block"
        openCategories.style.display = "none"
        collapsedCategories.style.display = "block"

        sideNav.style.width = "7vw";
        document.body.style.marginLeft = "7vw";
        document.body.style.backgroundColor = "white";
    }
}



// ===== Load Navbar ===== //
const navbarComponentHTML = createNavbarComponent();
document.getElementById("navbar-container").innerHTML = navbarComponentHTML;
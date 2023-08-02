// ===== Navbar component ===== //
let createNavbarComponent = () => {
    let navbarComponentHTML = `
    <div id="dom-side-nav" class="side-nav">
        <div class="nav-menu">
            <div id="open-nav-menu" style="display:none;">
                <a href="../home_page/homepage.html">Home</a>
                <a href="../about_page/aboutpage.html">About</a>
            </div>
            <div id="collapsed-nav-menu">
                <a href="../home_page/homepage.html"><i class="fa-solid fa-house" style="color: #ffffff;"></i></a>
                <a href="../about_page/aboutpage.html"><i class="fa-solid fa-info" style="color: #ffffff;"></i></a>
            </div>
        </div>
        <p id="nav-categories-title">Popular Genres</p>
        <div class="nav-categories">
            <div id="open-nav-categories" style="display:none;">
                <a href="#">Puzzle</a>
                <a href="#">Stratergy</a>
            </div>
            <div id="collapsed-nav-categories">
                <a href="#"><i class="fa-solid fa-puzzle-piece fa-fade" style="color: #ffffff;"></i></a>
                <a href="#"><i class="fa-solid fa-dice-five fa-spin" style="color: #ffffff;"></i></i></a>
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
    const categoriesTitle = document.getElementById("nav-categories-title")
    // store in arr and foreach
    const openMenu = document.getElementById("open-nav-menu")
    const collapsedMenu = document.getElementById("collapsed-nav-menu")
    const openCategories = document.getElementById("open-nav-categories")
    const collapsedCategories = document.getElementById("collapsed-nav-categories")

    if (openMenu.style.display === "none") {
        // expanded
        openMenu.style.display = "block"
        collapsedMenu.style.display = "none"
        openCategories.style.display = "block"
        collapsedCategories.style.display = "none"
        categoriesTitle.style.display = "block"
        
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
        // collapsed
        openMenu.style.display = "none"
        collapsedMenu.style.display = "block"
        openCategories.style.display = "none"
        collapsedCategories.style.display = "block"
        categoriesTitle.style.display = "none"

        sideNav.style.width = "7vw";
        document.body.style.marginLeft = "7vw";
        document.body.style.backgroundColor = "white";
    }
}



// ===== Load Navbar ===== //
const navbarComponentHTML = createNavbarComponent();
document.getElementById("navbar-container").innerHTML = navbarComponentHTML;
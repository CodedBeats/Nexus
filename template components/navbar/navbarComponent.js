// Example reusable component
let createNavbarComponent = (navTitle1, navTitle2, navTitle3) => {
    let componentHTML = `
    <div class="navbar">
    <ul>
        <li><a href="#">${navTitle1}</a></li>
        <li><a href="#">${navTitle2}</a></li>
        <li><a href="#">${navTitle3}</a></li>
    </ul>
    </div>
    `;

    return componentHTML;
}

// Generate a component and render it
let navbarComponentData = {
    navTitle1: "Home",
    navTitle2: "About",
    navTitle3: "Games",
};

const componentHTML = createNavbarComponent(navbarComponentData.navTitle1, navbarComponentData.navTitle2, navbarComponentData.navTitle3);
document.getElementById("navbar-container").innerHTML = componentHTML;

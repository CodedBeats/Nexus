// ===== Header component ===== //
let createHeaderComponent = () => {
    let headerComponentHTML = `
    <div class="header">
        <div class="left-container">
            <div id="navbarToggleIcon" class="navbarIcon"><button onclick="toggleNav()" type="button"><i class="fa fa-bars fa-3x"></i></button></div>
        </div>
        <div class="middle-container">
            <div class="search-container">
                <form class="search-form">
                    <input
                        type="text"
                        placeholder="Search"
                        class="search-input"
                    />
                    <button type="submit">
                        <i class="fa fa-search fa-lg"></i>
                    </button>
                </form>
            </div>
        </div>
        <div class="right-container">
            <div class="profile">
                <a href="../user_page/userpage-profile.html"><i class="fa fa-user-circle-o fa-3x"></i></a>
            </div>
        </div>
    </div>
    `;

    return headerComponentHTML;
}


// ===== Load Header ===== //
const headerComponentHTML = createHeaderComponent();
document.getElementById("header-container").innerHTML = headerComponentHTML;

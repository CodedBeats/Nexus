// ===== Header component ===== //
let createHeaderComponent = () => {
    let headerComponentHTML = `
    <div class="header">
        <div class="logo">
            logo placeholder
        </div>
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
        <div class="profile">
            <a href="../signup/signup.html" id="signup-btn">
                <button>Signup</button>
            </a>
            <a href="../login/login.html" id="login-btn">
                <button>Login</button>
            </a>
            <a href="../user_page/userpage-profile.html" id="user-btn" style="display: none;">
                <i class="fa fa-user-circle-o fa-3x"></i>
            </a>
        </div>
    </div>
    `;

    return headerComponentHTML;
}


// ===== Load Header ===== //
const headerComponentHTML = createHeaderComponent();
document.getElementById("header-container").innerHTML = headerComponentHTML;

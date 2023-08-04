// ===== Header component ===== //
let createFooterComponent = () => {
    let footerComponentHTML = `
    <div class="footer">
        <p>&copy; 2023 My Website. All rights reserved.</p>
    </div>
    `;

    return footerComponentHTML;
}


// ===== Load Header ===== //
const footerComponentHTML = createFooterComponent();
document.getElementById("footer-container").innerHTML = footerComponentHTML;

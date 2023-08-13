// ===== Header component ===== //
let createFooterComponent = () => {
    let footerComponentHTML = `
    <div class="footer">
        <p>Nexus - Team 4. All rights reserved.</p>
        <button id="back-to-top-button">Back to Top</button>
    </div>
    `;

    return footerComponentHTML;
}


// ===== Load Header ===== //
const footerComponentHTML = createFooterComponent();
document.getElementById("footer-container").innerHTML = footerComponentHTML;

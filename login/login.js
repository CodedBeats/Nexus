const loginPanel = document.getElementById("login-screen")

function changeSize1() {
    loginPanel.classList.add("hovered");
}
loginPanel.addEventListener("mouseover", changeSize1);
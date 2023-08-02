const registrationPanel = document.getElementById("registration-screen")

function changeSize1() {
    registrationPanel.classList.add("hovered");
}
registrationPanel.addEventListener("mouseover", changeSize1);
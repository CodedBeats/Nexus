const registrationScreen = document.getElementsById("registration-screen")

function changeSize1() {
    registrationScreen.style.width = "40%";
    registrationScreen.style.height = "80%";
}

registrationScreen.addEventListener("mouseoever", changeSize1);

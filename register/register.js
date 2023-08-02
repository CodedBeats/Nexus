let registrationPanel = document.getElementsByClassName("registration-panel")

function changeSize1(event) {
    
    registrationPanel.classList.add("permanent-hover");
    registrationPanel.style.width = "40%";
    registrationPanel.style.height = "80%";
  }

registrationPanel.addEventListener("mouseoever", changeSize1);

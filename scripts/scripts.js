let openButton = document.getElementsByClassName("btn--open");
let closeButton = document.getElementsByClassName("btn--close");
let popup = document.getElementById("popup");
let startButton = document.getElementById("start-button")
let startMenu = document.getElementById("start-menu");

const openModal  = () => {
  this.popup.classList.add("open-popup");
}
const closeModal  = () => {
  this.popup.classList.remove("open-popup");
}

openButton[0].addEventListener("click", openModal);
closeButton[0].addEventListener("click", closeModal)

const toggleStartMenu = () => {
  
  if (startMenu.style.display === "none") {
    startMenu.style.display = "flex";
  } else {
    startMenu.style.display = "none";
  }
}
startButton.addEventListener("click", toggleStartMenu)
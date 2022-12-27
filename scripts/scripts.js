let openButton = document.getElementsByClassName("btn--open");
let closeButton = document.getElementsByClassName("btn--close");
let popup = document.getElementById("popup");

const openModal  = () => {
  this.popup.classList.add("open-popup");
}
const closeModal  = () => {
  this.popup.classList.remove("open-popup");
}

openButton[0].addEventListener("click", openModal);
closeButton[0].addEventListener("click", closeModal)
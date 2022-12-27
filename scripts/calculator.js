let openCalculator = document.getElementById("calculator-open");
let closeCalculator = document.getElementById("calculator-close");
let calculator = document.getElementById("calculator")

const handleOpenCalculator  = () => {
  calculator.classList.add("open-popup");
}
const handleCloseCaluclator  = () => {
  calculator.classList.remove("open-popup");
}

openCalculator.addEventListener("click", handleOpenCalculator);
closeCalculator.addEventListener("click", handleCloseCaluclator);
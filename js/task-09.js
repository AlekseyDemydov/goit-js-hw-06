function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const clrBtn = document.querySelector(".change-color");
let showClr = document.querySelector(".color");

clrBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();

  showClr.textContent = document.body.style.backgroundColor;
});

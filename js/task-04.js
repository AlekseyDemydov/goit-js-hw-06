const decreme = document.querySelectorAll("#counter button");

const result = document.querySelector("#value");

decreme[0].addEventListener("click", () => {
  result.textContent -= 1;
});
decreme[1].addEventListener("click", () => {
  ++result.textContent;
});

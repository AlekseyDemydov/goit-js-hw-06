const items = document.querySelectorAll(".item");
console.log("Number of categories:", items.length);

const categories = document.querySelectorAll("#categories h2");

const elements = document.querySelectorAll("#categories ul");
const listEl = [];
const elementsEl = elements.forEach((list) => {
  listEl.push(list.children.length);
});

console.log("Category:", categories[0].textContent);
console.log("Elements:", listEl[0]);
console.log("Category:", categories[1].textContent);
console.log("Elements:", listEl[1]);
console.log("Category:", categories[2].textContent);
console.log("Elements:", listEl[2]);

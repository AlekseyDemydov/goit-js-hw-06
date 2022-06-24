const categoriesEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesEl.children.length}`);

const itemsAllEl = document.querySelectorAll("#categories .item");
itemsAllEl.forEach((el) => {
  const categoryEl = el.querySelector("h2");
  const numberOfCategories = el.querySelector("ul").children.length;
  console.log(`Category: ${categoryEl.textContent}`);
  console.log(`Elements: ${numberOfCategories}`);
});

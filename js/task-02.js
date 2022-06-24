const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const addList = (foo) => {
  return foo.map((addEl) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = addEl;
    itemEl.classList.add("item");
    return itemEl;
  });
};
const items = addList(ingredients);
list.append(...items);

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const ingr = [];
ingredients.forEach((ingredientsEl) => {
  ingr.push(ingredientsEl);
});

const firstList = document.createElement("li");
firstList.textContent = ingr[0];
firstList.classList.add("item");

const secondList = document.createElement("li");
secondList.textContent = ingr[1];
secondList.classList.add("item");

const thirdList = document.createElement("li");
thirdList.textContent = ingr[2];
thirdList.classList.add("item");

const fourthList = document.createElement("li");
fourthList.textContent = ingr[3];
fourthList.classList.add("item");

const fifthList = document.createElement("li");
fifthList.textContent = ingr[4];
fifthList.classList.add("item");

const sixthList = document.createElement("li");
sixthList.textContent = ingr[5];
sixthList.classList.add("item");

list.append(firstList, secondList, thirdList, fourthList, fifthList, sixthList);

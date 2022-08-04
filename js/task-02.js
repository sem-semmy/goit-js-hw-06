const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const addTextLi = ingredients.map((ingredient) => {
  const arrLi = document.createElement("li");
  arrLi.classList.add("item");
  arrLi.textContent = ingredient;
  return arrLi;
});
console.log(addTextLi);

document.querySelector("#ingredients").append(...addTextLi);

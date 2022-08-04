const sumItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${sumItem.length}`);
console.log();
const sumTitle = document.querySelectorAll(".item h2");
console.log(sumTitle);
sumTitle.forEach((elem) => {
  console.log(`Category: ${elem.textContent}`);
  console.log(`Elements: ${elem.nextElementSibling.children.length}`);
});

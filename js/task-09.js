// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку
// на button.change - color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const body = document.querySelector("body");
const changeColor = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const onClickColorChange = () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorText.textContent = color;
};
changeColor.addEventListener("click", onClickColorChange);

// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
//     підставляє його поточне значення в span#name - output.Якщо інпут порожній,
//     у спані повинен відображатися рядок "Anonymous".

const textOutput = document.querySelector("#name-output");
const nameDefault = "Anonymous";

const textInput = document.querySelector("#name-input");
textInput.addEventListener("input", () => {
  if (textInput.value.length > 0) {
    // console.log(textInput.value.length);
    textOutput.textContent = textInput.value;
  } else {
    textOutput.textContent = nameDefault;
  }
});
// console.log(textInput);
// console.log(textInput.value);
// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });

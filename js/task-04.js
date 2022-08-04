// Створи змінну counterValue, в якій буде зберігатися поточне
//  значення лічильника та ініціалізуй її значенням 0.

// Додай слухачів кліків до кнопок, всередині яких збільшуй
// або зменшуй значення лічильника.

// Оновлюй інтерфейс новим значенням змінної counterValue.
// Лічильник складається зі спану і кнопок, які по кліку
// повинні збільшувати і зменшувати його значення на одиницю.

let counterValue = 0;
const dec = document.querySelector('[data-action="decrement"]');
const inc = document.querySelector('[data-action="increment"]');
const values = document.querySelector("#value");
const addMin = () => {
  counterValue -= 1;
  values.textContent = counterValue;
};
const addPlus = () => {
  counterValue += 1;
  values.textContent = counterValue;
};
dec.addEventListener("click", addMin);
inc.addEventListener("click", addPlus);

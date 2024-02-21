let fruits = prompt("Введите пять фруктов:");
switch (fruits.toLowerCase()) {
  case "манго":
    alert("Этот фрукт есть в наличии");
    break;
  case "яблоко":
    alert("Этот фрукт есть в наличии");
    break;
  case "гранат":
    alert("Этот фрукт есть в наличии");
    break;
  case "груша":
    alert("Этот фрукт есть в наличии");
    break;
  case "киви":
    alert("Этот фрукт есть в наличии");
    break;
  default:
    alert("Данного фрукта в наличии нет");
}

// Второе задание

let day = new Date();

let daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
let dayOfWeek = daysOfWeek[day.getDay()];

alert(`Сегодня ${dayOfWeek}`);

//Третье задание

let num1 = prompt("Введите первое число");
let operator = prompt("Введите один из следующих операторов:(+, -, *, /,) ");
let num2 = prompt("Введите второе число ");
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    alert("Произошла ошибка!");
}
alert(`Результат: ${result}`);

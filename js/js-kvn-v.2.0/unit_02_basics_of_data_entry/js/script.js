// ======= Task 01. =======
// Создайте 2 переменные a = 7, & b = 9. выведите в консоль результат умножения a на b.
let a = 7;
let b = 9;
console.log(a * b);

// ======= Task 02. =======
// Создайте две переменные c = 7 & d = 9. Выведите на страницу в .out-2 результат деления c на d.
let c = 7;
let d = 9;

document.querySelector('.out-2').textContent = c / d;

// ======= Task 03. =======
// Создайте две переменные e = 3 & f = 5. Выведите на страницу  в .out-3 результат сложения e + f.
let e = 3;
let f = 5;

document.querySelector('.out-3').textContent = e + f;

// ======= Task 04. =======
// Создайте две переменные e1 = '3' & f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.
let e1 = '3';
let f1 = 5;

document.querySelector('.out-4').textContent = e1 + f1;

// ! Если складывается тип данных string и любой другой тип, то любой другой тип приводиться к string. Результат такой операции называется не сложение, а конкатенация.


// ======= Task 05. =======
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.
let e2 = 3;
let f2 = 0;

document.querySelector('.out-5').textContent = e2 / f2;

// ! Результат деления на 0 в JavaScript равно Infinity - бесконечность.

// ======= Task 06. =======
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.
let e3 = 3;
let f3 = 'Hello';

document.querySelector('.out-6').textContent = e3 + f3;

// ======= Task 07. =======
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.
let e4 = 3;
let f4 = 'Hello';

document.querySelector('.out-7').textContent = e4 * f4;

// ! Результат умножения в JavaScript числа со строкой даст - NaN.

// ======= Task 08. =======
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

let createInput8 = document.querySelector('.out-8');
createInput8.innerHTML = 'Input i-8 <input type="number" class="i-8">';

let takeValueInput8 = document.querySelector('.i-8');

function t8() {
    console.log(takeValueInput8.value);
}

document.querySelector('.b-8').onclick = t8;

// ======= Task 9. =======
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

let takeValueInput9 = document.querySelector('.i-9');

function t9() {
    console.log(takeValueInput9.value);
    takeValueInput9.value = '';
}

document.querySelector('.b-9').onclick = t9
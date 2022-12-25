// TODO ============================================================================================
// ! 1. Какое будет выведено значение?
let x = 5;
// console.log(x++); // 5

// ! 2. Чему равно выражение?
// console.log([] + false - null + true); // NaN

// ! 3. Что выведет консоль?
let y3 = 1;
let x3 = y3 = 2;
// console.log(x3); // 2

// ! 4. Чему равна сумма?
// console.log([] + 1 + 2); // 12

// ! 5. Что выведет console.log?
// console.log("1" [0]); // 1

// ! 6. Чему равно?
// console.log(2 && 1 && null && 0 && undefined); // null - оператор && запинается на лжи

// ! 7. Есть ли разница между выражениями !!(a && b) и (a && b)?
let a7
let b7
// console.log(!!(1 && 2) === (1 && 2)); // false -> || превращает в boolean значение

// ! 8. Какой будет результат?
// console.log(null || 2 && 3 || 4); // 3 -> 3 правдивое и будет возвращаться && имеет приоритет перед || - запинается на правде

// ! 9. Правдиво ли, что a == b?
let a9 = [1, 2, 3];
let b9 = [1, 2, 3];
// console.log(a9 == b9); // false

// ! 10. Что выведет console.log?
// console.log(+"Infinity"); // Infinity - унарный + делает его не строкой

// ! 11. Верно ли сравнение "Ëжик" > "яблоко"?
// console.log("Ëжик" > "яблоко"); // false

// ! 12. Чему равно?
// console.log(0 || "" || 2 || undefined || true || false); // 2



// ======= Task 001 =======
// Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.

// console.log(
//     // !Входной массив
//     [1, 4, 3, 0, 4, 5, 4]
//     // !Оставляем только чётные числа
//     .filter(element => !(element % 2))
//     // !Считаем квадратный корень и записываем в аккумулятор
//     .reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0) // 6
// );

/*
Метод reduceRight() применяет функцию к аккумулятору и каждому значению массива (справа налево), сводя его к одному значению. А метод reduce() выполняет функцию callback один раз для каждого элемента, присутствующего в массиве, за исключением пустот, принимая четыре аргумента:
начальное значение (или значение от предыдущего вызова callback);
значение текущего элемента;
текущий индекс;
массив, по которому происходит итерация.
*/

// ======= Task 002 =======
// Яблоко стоит 1.15, апельсин стоит 2.30. Сколько они стоят вместе – чему равна сумма 1.15 + 2.30 с точки зрения JavaScript?
let apple = 1.15;
let orange = 2.30;
// console.log(apple + orange); // !3.4499999999999997

/*
Число хранится в памяти в бинарной форме, как последовательность бит – единиц и нулей. Но дроби, такие как 1.15, 2.30, которые выглядят довольно просто в десятичной системе счисления, на самом деле являются бесконечной дробью в двоичной форме.
*/


// ================================================================================================================
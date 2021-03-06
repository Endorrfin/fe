/*
    Рекурсия – это термин в программировании, означающий вызов функцией самой себя. Рекурсивные функции могут быть использованы для элегантного решения определённых задач.

    Возведение в степень
    Возведе́ние в сте́пень — арифметическая операция, первоначально определяемая как результат многократного умножения числа на себя. ...
    Возведение в степень может быть определено также для отрицательных, рациональных, вещественных и комплексных степеней.
*/

// !OPTiON I
function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1))
}

// console.log(pow(3, 3))


// !OPTiON II
function pow2(x, n) {
    if (n == 1) {
        return x;
    } else {
        return (x * pow2(x, n - 1))
    }
}

// console.log(pow2(2, 10))
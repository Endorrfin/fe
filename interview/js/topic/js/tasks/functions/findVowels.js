/*
Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u».

findVowels('hello') // 2
findVowels('why') // 0
*/

// !Option I
const findVowels = str => {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            console.log(count++);
            count++
        }
    }
    return count
}

// console.log(findVowels('KvN'));
// console.log(findVowels('Volvo'));
// console.log(findVowels('Mercedes'));
// console.log(findVowels('Jaguar'));

/*
Важно обратить внимание на использование метода .includes(). 
Он доступен и для строк, и для массивов. 
Его стоит применять для того, чтобы выявить, содержит ли массив определенное значение. 
Этот метод возвращает true, если массив содержит указанное значение, и false, если нет.
*/

// !Option II
const findVowels2 = str => {
    const matched = str.match(/[aeiou]/gi)
    return matched ? matched.length : 0
}

// console.log(findVowels2('Bingo')); // 2
// console.log(findVowels2('Hoooooooorse')); // 9

/*
Здесь задействуется метод .match(), который позволяет реализовать эффективный поиск. 
Если регулярное выражение как аргумент метода обнаружено внутри указанной строки, 
то возвращаемым значением становится массив совпадающих символов. 
Ну а если совпадений нет, то .match() возвращает null.
*/
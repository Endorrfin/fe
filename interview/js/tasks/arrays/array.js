
// ============ КОМБИНАЦИЯ РАБОТЫ МЕТОДОВ МАССИВА ============

// ------- Example I -------
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const evens = [];
const odds = [];

numbers
    .filter((element) => element % 3)
    .map((element) => element * 10)
    .forEach((element) => evens.push(element));

// console.log('evens', evens);


// ------- Example II -------
const arrayNames = ['Ric', 'Dilan', 'Ben', 'Silvia', 'Forstmann', 'Emma', 'Julia', 'Leonid'];

const getRandomName = () => arrayNames[Math.floor(Math.random() * arrayNames.length)];
// console.log('getRandomName', getRandomName());

// Если имя не определено, то будет использоваться параметр по умолчанию - getRandomName()
// const greet = (name = getRandomName()) => console.log(`Hi ${name}!`);
const greet = (name = getRandomName()) => {
    // console.log(`Hi ${name}!`);
}
greet();
greet('Tom');
greet();
greet('Megan');
greet();
greet();


const greet2 = (name, ...titles) => {
    const [firstTitle = '', ...otherTitle] = titles;
    const aka = otherTitle.length > 0 ? ` известный как ${otherTitle.join(', ')}` : '';

    // console.log(`Привет ${firstTitle} ${name}${aka}`);
}

const nameAndTitles = ['Dear', 'Nice', 'Smart', 'Alone', 'Hanson'];

greet2(nameAndTitles[0], nameAndTitles[1]);

greet2(...nameAndTitles.slice(0, 2));
greet2("Viktor", ...nameAndTitles.slice(2));
greet2(undefined, ...nameAndTitles.slice(1));

// console.log(...nameAndTitles);



// ------- Example III -------
const generateArray = () => {
    const randomInt = (max) => Math.floor(Math.random() * max);

    const array = [];
    for (let i = randomInt(10); i--;) {
        array.push(randomInt(100));
    }

    return array;
};

// console.log(Math.max(...generateArray()));
// console.log(Math.min(...generateArray()));
// console.log(Math.max(...generateArray()));
// console.log(Math.min(...generateArray()));


// разбираем 1 массив и 2-й массив, в результате будет новый массив, созданные из 2-х
const max = (array, ...numbers) => Math.max(...[...array, ...numbers]);
// console.log(max(generateArray(), 102, 108, 143, 112));



// ------- Example IV - создание нового массива с помощью spread -------
const originalArray = [1, 2, 3, 4];
const newArray = [0, ...originalArray, 5];

// console.log('originalArray', originalArray);
// console.log('newArray', newArray);











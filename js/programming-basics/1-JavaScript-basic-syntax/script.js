"use strict"

// ============ EXAMPLE #1 ============

// const INTERVAL = 500;
// let counter = 0;
// const MAX_VALUE = 10;
// let timer = null;
//
// const event = () => {
//     if (counter === MAX_VALUE) {
//         console.log('The end');
//         clearInterval(timer);
//         return;
//     }
//
//     // console.dir({counter, date: new Date() });
//     console.table({counter, date: new Date() });
//     counter++;
// };
//
// console.log('Begin');
// timer = setInterval(event, INTERVAL);


// ============ EXAMPLE #2 - CYCLE ============
// const MAX_VALUE = 10;
//
// console.log('Begin');
// for (let i = 0; i < MAX_VALUE; i++) {
//     console.log({i, date: new Date() });
//     // console.table({i, date: new Date() });
//     // console.table(i, new Date() );
// }
// console.log('The end');


// ============ EXAMPLE #3 - FUNCTION ============
// const add = (a, b) => a + b;
//
// console.log('Add numbers: 5 + 2 = ' + add(5, 2));
// console.log('Add floats: 5.1 + 2.3 = ' + add(5.1, 2.3));
// console.log("Concatenate: \'5\' + \'2\' = " + add('5', '2'));
// console.log('Subtraction: 5 + (-2) = ' + add(5, -2));


// ============ EXAMPLE #4 - OBJECT ============
// const welcome = person => {
//     console.log(`Ave, ${person.name}!`);
// };
//
// const marcus = { name: 'Marcus Aurelius' };
// const mau = { name: 'Mao Zedong' };
// const cartesius = { name: 'Rene Descartes' };
//
// welcome(marcus);
// welcome(mau);
// welcome(cartesius);


// ============ EXAMPLE #5 - ARRAY ============
// const welcome = person => {
//     console.log(`Ave, ${person.name}!`);
// };
//
// const persons = [
//     { name: 'Marcus Aurelius' },
//     { name: 'Mao Zedong' },
//     { name: 'Rene Descartes' },
// ];
//
// for (const person of persons) welcome(person);


// ============ EXAMPLE #6 - HASH ============
// const welcome = person => {
//     console.log(`Ave, ${person.name}!`);
// };
//
// const persons = {
//     marcus: { name: 'Marcus Aurelius' },
//     mao: { name: 'Mao Zedong' },
//     rene: { name: 'Rene Descartes' },
// };
//
// for (const name in persons) {
//     const person = persons[name];
//     welcome(person);
// }


// ============ EXAMPLE #7 - COLORIZE ============
// // Constants
//
// const SALUTATION = 'Ave';
//
// const COLORS = [
//     /* 1 */ 'black',
//     /* 2 */ 'red',
//     /* 3 */ 'green',
//     /* 4 */ 'yellow',
//     /* 5 */ 'blue',
//     /* 6 */ 'magenta',
//     /* 7 */ 'cyan',
//     /* 8 */ 'white',
//     /* 9 */ 'pink',
// ]
//
// // Functions
// // \x1b - escape последовательность
// // \x1b[ - escape последовательность
//
// const colorer = (s, color) => `\x1b[3${color}m${s}\x1b[0m`;
//
// const colorize = name => {
//     let res = '';
//     const letters = name.split('');
//     let color = 1;
//
//     for (const letter of letters) {
//         res += colorer(letter, color++);
//         if (color > COLORS.length) color = 1
//     }
//     return res;
// };
//
// const greetings = name => (
//     name.includes('Augustus') ?
//         `${SALUTATION}, ${colorize(name)}!` :
//         `Hello, ${name}!`
// );
//
// // Usage
//
// const fullName = 'Marcus Aurelius Antoninus Augustus';
// console.log(greetings(fullName));
//
// const shortName = 'Marcus Aurelius';
// console.log(greetings(shortName));


// ============ EXAMPLE #8 - ADDER ============
// const adder = (initial = 0) => ({
//     value: initial,
//     steps: [initial],
//     add(value) {
//         this.steps.push(value);
//         this.value += value;
//         return this;
//     }
// });
//
// const Adder = class {
//     constructor(initial = 0) {
//         this.steps = [initial];
//         this.value = initial;
//     }
//     add(value) {
//         this.steps.push(value);
//         this.value += value;
//         return this;
//     }
// };
//
// // Usage
// // statement block
// {
//     const {value, steps } = adder(5).add(-8).add(11);
//     console.log(value);
//     const [a, b, c] = steps;
//     console.log(a, b, c);
// }
//
// // statement block
// {
//     const {value, steps } = new Adder(5).add(-8).add(11);
//     console.log(value);
//     const [a, b, c] = steps;
//     console.log(a, b, c);
// }


// ============ EXAMPLE #9 - Point ============
// const Point = class {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// };
//
// const serializable = Category => class extends Category {
//     toString() {
//         return `[${this.x}, ${this.y}]`;
//     }
// };
//
// const movable = Category => class extends Category {
//     move(x, y) {
//         this.x += x;
//         this.y += y;
//     }
// };
//
// // Usage
// const PointEx = serializable(movable(Point));
// const point1 = new PointEx(10, 20);
// point1.move(5, -2);
// console.log(point1.toString());
// const { x, y } = point1;
// console.log(x, y);


// ============ EXAMPLE #10 - UNICODE ============

// const 人 = (α, β, γ) => (α + β + γ);
// const ツ = (α, γ) => 人(α, 10, γ);
// console.log(ツ(2, 3));
//
// const расстрелять = '🔫';
// console.log(расстрелять);














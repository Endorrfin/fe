'use strict';

// ============ DEFINITION ============
/*
  Object - составный тип, в который могут входить данные разного типа.
  Объект может состоять из строк, чисел, логических значений и т.д.
  id - ключ (свойство)
  15 - значение
*/

const someObj = {
  id: 15,
  name: 'John',
  active: true
}



// ------- Example I -------
const obj = {};
Object.defineProperty(obj, 'a', {writable: true,  configurable: true,  value: 'a'});
Object.defineProperty(obj, 'b', {writable: false, configurable: true,  value: 'b'});
Object.defineProperty(obj, 'c', {writable: false, configurable: false, value: 'c'});

// console.log(obj.a);
obj.a = 'b';
// console.log(obj.a);
delete obj.a;

// console.log(obj.b);
// obj.b = 'a'; // Cannot assign to read only property 'b' of object
// console.log(obj.b);
delete obj.b;

// console.log(obj.c);
obj.b = 'a';
// console.log(obj.c);
delete obj.b;



// ============ Object.assign ============
const products = { name: 'phone', price: 100 };
const phoneCase = { name: "phone", material: "leather" };
// console.log(products);
const clone = Object.assign ({}, products);
// console.log(clone);
// console.log(products == clone);

const extendsProducts = Object.assign ({}, products, {color: 'black'});
// console.log('extendsProducts', extendsProducts);

const combine = Object.assign({}, products, phoneCase);
// console.log('combine', combine);




// ============ ПРОВЕРКА ЕСТЬ ЛИ НЕКОЕ СВОЙСТВО В ОБЪЕКТЕ ============
const car = {
  type: "Mercedes",
  model: "ML-350",
  weight: '1650kg',
  color: "white",

  start() {},
  drive() {},
  brake() {},
  stop() {}
};

// console.log('car', car);
// delete car.weight;

// Option I - not reliable
// console.log(car.weight !== undefined);

// Option II
// console.log('weight' in car);


// Option III - not reliable
// console.log(car.hasOwnProperty('weight'));




// ============ METHODS OF COPY OF OBJECTS ============
const guitarPlayer = {
  firstName: 'Rik',
  lastName: 'Martin',
  address: {
    city: 'Colorado',
    street: 'Ranger Avenue',
  },
  soloSpeed: 10,
  birthDate: '11.07.1978',
  guitarCount: 277,
  isLeftHanded: false,

  play() {
    console.log(`Let's rock!`);
  },

  playSolo(speed = 2) {
    console.log(`Play solo ${speed}x`);
  },

  guitar: {
    strings: 6
  },
}



// ------- Case I - using Object.assign({} someObj) -------
const clonesObjectAssign = [];
const countObjectAssign = 10;

for (let i = 0; i < countObjectAssign; i++) {
  const newClone = Object.assign({}, guitarPlayer)
      clonesObjectAssign.push(newClone);
}

// console.log('clonesObjectAssign', clonesObjectAssign);
// console.log(clonesObjectAssign[0] === clonesObjectAssign[1]); // false
// console.log(clonesObjectAssign[0].address === clonesObjectAssign[1].address); // true
// console.log(clonesObjectAssign[0].play === clonesObjectAssign[1].play); // true




// ------- Case II - using ...spread -------
const clonesSpread = [];
const countSpread = 10;

for (let i = 0; i < countSpread; i++) {
  const newClone = {
    ...guitarPlayer
  };
  clonesSpread.push(newClone);
}

// console.log('clonesSpread', clonesSpread);
// console.log(clonesSpread[0] === clonesSpread[1]); // false
// console.log(clonesSpread[0].address === clonesSpread[1].address); // true
// console.log(clonesSpread[0].play === clonesSpread[1].play); // true



// ------- Case III - using Recursion -------
const isObject = (object) => {
  const type = typeof object;
  return type === 'function' || type === 'object';
};

const cloneObject = (source) => {
  const clone = {};

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (isObject(source[key])) {
        clone[key] = cloneObject(source[key]);
      } else {
        clone[key] = source[key];
      }
    }
  }
  return clone;
}

const clonesRerursion = [];
const countRecursion = 10;

for (let i = 0; i < countRecursion; i++) {
  const newClone = cloneObject(guitarPlayer);
  clonesRerursion.push(newClone);
}

// console.log('clonesRerursion', clonesRerursion);
// console.log(clonesRerursion[0] === clonesRerursion[1]); // false
// console.log(clonesRerursion[0].address === clonesRerursion[1].address); // false
// console.log(clonesRerursion[0].play === clonesRerursion[1].play); // false



// ------- Case IV - using Lodash cloneDeep -------


// ------- Case V - using JSON.stringify & JSON.parse -------
























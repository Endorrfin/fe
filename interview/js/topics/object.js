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



























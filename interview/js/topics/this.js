
// ============ THIS ============

/*
* Как работает ключевое слово this?
* В большинстве языков программирования, по крайней мере С-подобных языков, есь ключевое слово this и оно ссылается
*  на текущий объект. тоесть на объект, которому принадлежит метод, где использовано это ключевое слово.
*
* Однако в JS методы, они же функции не обязательно принадлежать какому-то объекту.
* Кроме того, они могут принадлежать нескольким объектам, или менять объекты, которым принадлежат.
* По причине выше перечисленного в JS ключевое слово this указывает не на текущий объект, а на контекст вызова функции.
*
* В отличии от других языков программирования в JS ключевое слово this можно использовать глобально, тоесть вне,
*  какого-либо класса, или функции.
* Глобальный объект предоставляется средой выполнения.
* Если код будет выполняться node.js - то ключевое слово this будет ссылаться на объект global
* Если код будет выполняться в браузере - то ключевое слово this будет ссылаться на объект Window
* https://www.youtube.com/watch?v=qZDjK5BqLbM&list=PLwHvxJae2LazDrHm6ayqLKz6jszEn7ArQ&index=3
*
* В целом - контекст это то, на что будет ссылаться ключевое слово this если оно использовано в теле разных функций
*
* В JS функция является подвидом объекта.
* Поэтому, когда объявляется функция, она автоматически наследуется от некого базоваго объекта - FUNCTION PROTOTYPE
* Methods call, apply & bind являются методами этого базового объекта FUNCTION PROTOTYPE - это позволяет вызывать их
*  на любой функции просто используя точку.
*
* Методы call & apply позволяют непосредственно выполнить функцию с опеределенным контекстом и параметрами
* Метод bind позволяет связать функцию с опеределенным контекстом и параметрами для того, чтоб выполнить позже
* */


// ------- Example I - execution this in browser -------

// console.log(this); // undefined - в VS Code
// console.log(this); // undefined - в IntellijIDEA
// console.log(this); // Window - в консоли браузера

// console.log("Content zone height is "+this.innerHeight); // Content area height is 594
// console.log("Content zone width is "+this.innerWidth); // Content area width is 1366


function getContentWidth () {
  return this.innerWidth;
}

// console.log("Content zone width is "+getContentWidth()); // Content area width is 1366


// ------- Example II - how work this -------
const person1 = {
  name: "Dolly",
};

function sayHello () {
    return "Hello, " + this.name;
}

// Указываем, что у объекта person будет метод sayHello, который будет соответствовать глобальной функции sayHello
person1.sayHello = sayHello;
// console.log(person1.sayHello()); // Hello, Dolly


/*
* Методы в JS не обязательно принадлежать какому-то объекту.
* Поэтому, после объявления функции, мы можем указать, какому объекту, или объектам она будет принадлежать, это называется - установка контекста.
* */

const person2 = {
    name: "Bob",

    sayHello() {
        return "Hello, " + this.name;
    }
};

const person3 = {
    name: "Forstmann",

    sayHello() {
        return "Hello, " + this.name;
    }
};


const anotherPerson = {
  name: "Gabriella"
};

// anotherPerson.sayHello = person1.sayHello;
// console.log('anotherPerson', anotherPerson.sayHello()); // Hello, Gabriella

// console.log('person1', person1.sayHello()); // Hello, Dolly
// console.log('person2.1', person2.sayHello()); // Hello, Bob
// console.log('person2.2', person2.sayHello.call(anotherPerson)); // Hello, Gabriella
// console.log('person3', person3.sayHello.apply(anotherPerson, [])); // Hello, Gabriella




const employee1 = {
  name: "Hanna",
  position: "Project manager",
  salary: 1000
};


const employee2 = {
  name: "Bill",
  position: "Junior developer",
  salary: 800
};

// Global function promote
function promote (newPosition, salaryRise) {
  this.position = newPosition;
  this.salary += salaryRise;

  return this.name+" is "+this.position+" and earns "+this.salary
}

/*
* На global function promote вызываем метод call и первым параметром передаем в нее новый контекст выполнения
* То, что будет подставлятся вместо ключевого слова this при выполнении этой функции
* */

const promotePMcall = promote.call(employee1, "Department head", 500);
const promotePMapply = promote.apply(employee1, ["Department head", 500]);
console.log('promote using call:', promotePMcall);
console.log('promote using apply:', promotePMapply);

const promoteMDcall = promote.call(employee2, "Middle developer", 300);
const promoteMDapply = promote.apply(employee2, ["Middle developer", 300]);
console.log('promote using apply:', promoteMDcall);
console.log('promote using apply:', promoteMDapply);

const promotePMbind = promote.bind(employee1, "Department head", 500);
const promoteMDbind = promote.bind(employee2, "Middle developer", 300);
console.log('promote using bind:', promotePMbind());
console.log('promote using bind:', promoteMDbind());




/**
|--------------------------------------------------
  === <<<---  TASK - THIS --->>>  ===
#1
Создать объект с розничной ценой и количеством продуктов.
Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)

#2
Создать объект из предыдущей задачи.
Создать второй объект, который описывает количество деталей и цену за одну деталь.
Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.
Для этого “позаимствуйте” метод из предыдущего объекта.

|--------------------------------------------------
*/

// // #1
// let product1 = {
//   price: 40,
//   counts: 20,
//   getTotalPrice() {
//     return this.price * this.counts;
//   },
// };

// console.log(product1.getTotalPrice()); // 800


// // #2
// let product2 = {
//   price: 100,
//   counts: 12,
// };

// const totalPriceProduct2 = product1.getTotalPrice.call(product2);
// console.log(totalPriceProduct2); // 1200

// console.log(product1.getTotalPrice.apply(product2));


/**
|--------------------------------------------------
  === <<<---  TASK  --->>>  ===
Даны объект и функция:
let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};
Не изменяя функцию или объект, получить результат функции
getSquare для объекта sizes

|--------------------------------------------------
*/

// let sizes = {
//   width: 5,
//   height: 10
// },

// getSquare = function () {
//   return this.width * this.height
// };

// console.log(getSquare.call(sizes)); // 50
// console.log(getSquare.apply(sizes)); // 50


/**
|--------------------------------------------------
  === <<<---  TASK this.bind --->>>  ===
let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight;
getElementHeight(); // undefined

Измените функцию getElementHeight таким образом, чтобы можно
было вызвать getElementHeight() и получить 25.
|--------------------------------------------------
*/

// let element = {
//   height: 25,
//   getHeight: function () {
//     return this.height;
//   }
// };

// let getElementHeight = element.getHeight.bind(element);
// console.log(getElementHeight()); // 25


// ------- Example I - THIS in FUNCTION -------
    /*
    * Когда создается функция с помощью ключевого слова function,
    * то this которая находиться внутри ключевого слова function
    * будет ссылаться именно на контекст этой функции
    * */
const Muhtar = {
    name: 'Keks',
    friends: ['Shakik', 'Barsik', 'Sirko', 'Bim'],
    showFriends: function () {
        this.friends.forEach((name) => {
            console.info(`${this.name} friends with ${name}`);
        });
    }
};

// Muhtar.showFriends();


// ------- Example II - THIS in ARROW FUNCTION -------
/*
* У стрелочной функции нет своего собственного контекста
* this - ссылается на контекст родителя
* в arrow function контекст берется из замыкания
*
* Conclusion - this - window
* In window not property friends and mean undefined
* And in undefined not forEach method
* */
const Roy = {
    name: 'Keks',
    friends: ['Shakik', 'Barsik', 'Sirko', 'Bim'],
    showFriends: () => {
        this.friends.forEach((name) => {
            console.info(`${this.name} friends with ${name}`);
        });
    }
};

// Roy.showFriends(); // Cannot read properties of undefined (reading 'friends')



// ------- Example II - THIS in ARROW FUNCTION -------
const checkThisOut = () => console.log(this);
// checkThisOut();



// ------- Example III - CHANGE CONTEXT IN FUNCTION -------
const showThisFunction = function () { console.log(this); }
// showThisFunction();

const bindedThisInFunction = showThisFunction.bind({name: 'My function context'});
// bindedThisInFunction();

const myObject1 = {
    callMethod: showThisFunction
}

// myObject1.callMethod();



// ------- Example IV - CHANGE CONTEXT IN ARROW FUNCTION -------
const showThisArrowFunction = () => console.log(this);
// showThisArrowFunction();

const bindedThisInArrowFunction = showThisFunction.bind({name: 'My arrow function context'});
// bindedThisInArrowFunction();

const myObject2 = {
    callMethod: bindedThisInArrowFunction
}

// myObject2.callMethod();



'use strict';

// ==========================================================
//            206 What is Object-Oriented Programming?
// ==========================================================

/*
* 1. Abstraction
* 2. Encapsulation
*    Encapsulation: Keeping properties and methods private inside the class, so they are not accessible from
*  outside the class. Some methods can be exposed as a public interface (API)
* 3. Inheritance
* 4. Polymorphism
*    Polymorphism: A child class can overwrite a method it inherited from a paren class [it's more complex that that, but enough for our purposes].
*
*
* */


// ==========================================================
//            207 OOP in JavaScript
// ==========================================================

/*
* CLASSICAL OOP: CLASSES
* Objects (instances) are instantiated from a class, which functions like a blueprint
*
* OOP IN JS: PROTOTYPES
* Objects are linked to a prototype object
* Prototypal inheritance: The prototype contains methods (behavior) that are accessible to all objects linked to
*  that prototype;
* Behavior is delegated to the linked prototype object
* */


// ==========================================================
//       208 Constructor Functions and the new Operator
// ==========================================================

const Person = function(firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // console.log('this', this);

  // // Never to this
  // this.calcAge = function() {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);
























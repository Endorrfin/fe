'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22
  },
  [weekdays[4]]: {
    open: 11,
    close: 23
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24
  }
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({
                            starterIndex = 1,
                            mainIndex = 0,
                            time = '20:00',
                            address
                          }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]}
      and ${this.mainMenu[mainIndex]}
      will be delivered to ${address}
      at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  }
};

// ==========================================================
//            103 Destructuring Arrays
// ==========================================================

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//
//   order: function(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   }
// }
//
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
//
// const [x, y, z] = arr;
// console.log(x, y, z);
//
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);
//
// // // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);
//
// [main, secondary] = [secondary, main];
// console.log(main, secondary);
//
// restaurant.order(2, 0);
// console.log(restaurant.order(2, 0));
//
// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);
//
//
// // Nested destructuring
// const nested = [2, 4, [5, 6]];
//
// // const [i, , j] = nested;
// // console.log(i, j); // (2)[5, 6]
//
// const [i, , [j, k]] = nested;
// console.log(i, j, k); // 2 5 6
//
//
// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8 9 1


// ==========================================================
//            104 Destructuring Object
// ==========================================================
//
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
//
// restaurant.orderDelivery({
//   address: 'Via del Piero Mount, 54',
//   mainIndex: 1,
// });
//
//
// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);
//
// const{
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags
// } = restaurant;
// console.log(restaurantName, hours, tags);
//
//
// // Default values
// const { menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);
//
// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};
//
// ({a, b} = obj);
// console.log(a, b);
//
//
// // Nested objects
// const { fri } = openingHours;
// const { fri: {open, close} } = openingHours;
// const { fri: {open: o, close: c} } = openingHours;
// console.log(fri); // {open: 11, close: 23}
// console.log(open, close); // 11 23
// console.log(o, c); // 11 23


// ==========================================================
//            105 The Spread Operator (...)
// ==========================================================
//
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log('badNewArr:', badNewArr);
//
// const newArr = [1, 2, ...arr];
// console.log('newArr:', newArr);
//
// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);
//
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
// console.log(restaurant.mainMenu);
//
// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log('---mainMenuCopy: ---', ...mainMenuCopy);
//
// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log('---menu---', menu);
//
// // Iterables: arrays, strings, maps, sets. NOT objects
//
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} Schmedtmann`);
//
//
// // Real-world example
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt("Ingredient 2?"),
//   // prompt("Ingredient 3")
// ];
//
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);
//
//
// // Objects
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
// console.log(newRestaurant);
//
// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Rome';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);


// ==========================================================
//            106 Rest Pattern and Parameters
// ==========================================================

// // 1) Destructuring
//
// // SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
//
// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
//
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu
// ];
// console.log(pizza, risotto, otherFood);
//
//
// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
//
//
// // 2) Functions
// const add = function(...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
//
// const x = [23, 5, 7, 65];
// add(...x);
//
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');


// ==========================================================
//            107 Short Circuiting (&& and ||)
// ==========================================================
//
// console.log('---- OR ----');
// // Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);
//
// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
//
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
//
// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
//
// console.log('Hello' && 23 && null && 'jonas', undefined, 0, '', false, NaN);
//
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
//
// restaurant.orderPizza && restaurant.orderPizza ('mushroom', 'spinach');


// ==========================================================
//            108 The Nulish Coalescing Operator
// ==========================================================

// // restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);
//
// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);


// ==========================================================
//            109 Logical Assignment Operators
// ==========================================================

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };
//
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };
//
// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
//
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;
//
// // nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
//
// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
//
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';
//
// console.log(rest1);
// console.log(rest2);


// ==========================================================
//            110 Coding Challenge #1
// ==========================================================

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski'
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze'
    ]
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Now 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
  }
};
//
// // 1 Destructuring players - two separate arrays
// const [players1, players2] = game.players;
// console.log(players1, players2);
//
// // 2 Remaining players except goalKeeper
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
//
// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
//
// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
//
// // 5.
// const {odds: {team1, x: draw, team2}} = game;
// console.log(team1, draw, team2);
//
// // 6.
// const printGoals = function(...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
//
// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// printGoals(...game.scored);
//
// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 < team2 && console.log('Team 2 is more likely to win');


// ==========================================================
//            111 Looping Arrays The for-of loop
// ==========================================================

// const  menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//
// // for (const item of menu) console.log(item);
// for (const item of menu.entries()) {
//   // console.log(item);
//   console.log('--- option I old school ---', `${item[0] + 1}: ${item[1]}`);
// }
//
// for (const [i, el] of menu.entries()) {
//   console.log('--- option II Destructuring ---',`${i + 1}: ${el}`);
// }
//
// // console.log(menu.entries());
// // console.log([...menu.entries()]);


// ==========================================================
//            112 Enhanced Object Literals
// ==========================================================

// Transform main object Restaurant


// ==========================================================
//            113 Optional Chaining
// ==========================================================

// if (restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
//
// if (restaurant.openingHours.fri)
//   // console.log(restaurant.openingHours.fri.open);
//
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
//
// // WITH optional chaining
// // console.log(restaurant.openingHours.mon?.open);
// // console.log(restaurant.openingHours?.mon?.open);
//
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'close'
//   console.log(`On ${day}, we open at ${open}`);
// }
//
// // Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
//
//
// // Arrays
// const users = [{name: 'Jonas', email: 'hello@jonas.io' }];
// // const users = [];
//
// console.log(users[0]?.name ?? 'User array empty');
// if (users.length > 0) console.log(users[0].name); else console.log('user array empty');


// ==========================================================
//   114 Looping Objects: Objects Keys, Values, and Entries
// ==========================================================

// // Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);
//
// console.log(`We are open on ${properties.length} days`);
// let openStr = (`We are open on ${properties.length} days`);
//
// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, ` ;
// }
//
// console.log(openStr);
//
//
// // Property VALUES
// const values = Object.values(openingHours)
// console.log(values);
//
//
// // ENTIRE objects
// const entries = Object.entries(openingHours);
// console.log(entries);
//
// // destructured - [key, value]
// for(const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }


// ==========================================================
//            115 Coding Challenge #2
// ==========================================================

/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// // 1.
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }
//
// // 2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of Object.values(game.odds))
//   average += odd;
// average /= odds.length;
// console.log(average);
//
//
// // 3.
// for(const [team, odd] of Object.entries(game.odds)) {
//   // console.log(team, odd);
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
//   console.log(`Odd of ${teamStr} ${odd}`);
// }


// ==========================================================
//            116 Sets
// ==========================================================

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Risotto',
//   'Pizza',
//   'Pasta',
//   'Pizza'
// ])
// console.log(ordersSet); // Set(3) {'Pasta', 'Pizza', 'Risotto'}
//
// console.log(new Set('Jonas')); // Set(5) {'J', 'o', 'n', 'a', 's'}
//
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
//
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);
// ordersSet.delete('Risotto');
// console.log(ordersSet);
// // console.log(ordersSet[0]); // undefined
// // ordersSet.clear(); // {}.
//
// for (const order of ordersSet) console.log(order);
//
// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(staff);
//
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size); // 3 unique
// console.log(new Set('jonasschmedtmann').size);



// ==========================================================
//            117 Maps Fundamentals
// ==========================================================
//
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));
//
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :');
//
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));
//
// // const time = 21;
// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
//
// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// // rest.clear();
// console.log(rest.size);
//
// rest.set([1, 2], 'Test');
// console.log(rest);
//
// console.log(rest.get([1, 2])); // undefined
//
// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));
//
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);



// ==========================================================
//            118 Maps Iteration
// ==========================================================

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ]);
//
// console.log(question);
//
// // Convert object to map
// console.log(Object.entries(openingHours));
//
// const hoursMap = new Map(Object.entries(openingHours));
// console.log( hoursMap);
//
// // Quiz app
// console.log( question.get('question'));
// for (const [key, value] of question) {
//   if (typeof  key === 'number') console.log(` Answer ${key}: ${value}`);
// }
//
// // const answer = Number(prompt('Your answer'));
// const answer = 3
// console.log(answer);
//
// console.log(question.get(question.get('correct') === answer));
//
// // Convert map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log(...question.keys());
// console.log(...question.values());



// ==========================================================
//          119 Summary Which Data Structure to Use
// ==========================================================

/*
* SOURCE OF DATA
* 1. From the program itself: Data written directly in source code (e. g. status messages)
* 2. From the UI: Data input from the user or data written in DOM (e.g. tasks in todo app)
* 3. From external sources: Data fetched for example from web API (e.g. recipe objects)
*
*
* Collection of data -> Data structure
* SIMPLE LIST? - Arrays or Sets
* KEY / VALUE PAIRS? - Objects or Maps
*
*
* OTHER BUILT-IN:
* - WeakMap
* - WeakSet
*
* NON-BUILT IN:
* - Stacks
* - Queues
* - Linked lists
* - Trees
* - Hash tables
* */











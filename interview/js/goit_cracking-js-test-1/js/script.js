/**
|--------------------------------------------------
  ======= <<<---  Quiz #1 -  --->>> =======

|--------------------------------------------------
*/






/**
|--------------------------------------------------
  ======= <<<---  Quiz #2 -  --->>> =======
|--------------------------------------------------
*/




/**
|--------------------------------------------------
  ======= <<<---  Quiz #3 -  --->>> =======
|--------------------------------------------------
*/





/**
|--------------------------------------------------
  ======= <<<---  Quiz #4 -  --->>> =======

|--------------------------------------------------
*/






/**
|--------------------------------------------------
  ======= <<<---  Quiz #5 - --->>> =======
  (Q-2-1)  Что покажет console.log ? <br>
|--------------------------------------------------
*/

const func5 = () => 3;
const b = '' || 1 || 'there';
const c = 1 && 2 && func5();
const d = 1 && '' && func5();
console.log(b, c, d); // 1 3 ""



/**
|--------------------------------------------------
  ======= <<<---  Quiz #6 - --->>> =======
(Q-2-2)  Что покажет console.log ?

|--------------------------------------------------
*/

const user = {
  name: "Bill"
};
const func6 = user => {
  const currentUser = user || {
    name: "Bob"
  };
  const userName = user && user.name;
  console.log(currentUser.name, userName); // Bob undefined
};

func6();




/**
|--------------------------------------------------
  ======= <<<---  Quiz #7 -  --->>> =======
(Q-2-3)  Что покажет console.log ?

|--------------------------------------------------
*/
const b7 = null || "there";
const c7 = {} && 0 && 2;
const d7 = false && 2 && 'here';
console.log(b7, c7, d7); // there 0 false



/**
|--------------------------------------------------
  ======= <<<---  Quiz #8 -  --->>> =======
(Q-3-1)  Что покажет console.log ?

|--------------------------------------------------
*/
'use strict';

// const func8 = () => {
//   a8 = 2;
// };
// console.log(window.a8); // Error



/**
|--------------------------------------------------
  ======= <<<---  Quiz #9 - --->>> =======
(Q-3-2)  Что покажет console.log ?

|--------------------------------------------------
*/
'use strict';

const func9 = () => {
  console.log(this);
};
func9(); // undefined




/**
|--------------------------------------------------
  ======= <<<---  Quiz #10 - --->>> =======
(Q-3-3)  Что покажет console.log ?

|--------------------------------------------------
*/
import module from 'some-module';
let result = null;
const func10 = () => {
  console.log(this); // undefined
  result = this;
};
func10();



/**
|--------------------------------------------------
  ======= <<<---  Quiz #11 - --->>> =======


|--------------------------------------------------
*/




/**
|--------------------------------------------------
  ======= <<<---  Quiz #12 - --->>> =======


|--------------------------------------------------
*/



/**
|--------------------------------------------------
  ======= <<<---  Quiz #13 - --->>> =======


|--------------------------------------------------
*/





/**
|--------------------------------------------------
  ======= <<<---  Quiz #14 - --->>> =======


|--------------------------------------------------
*/



/**
|--------------------------------------------------
  ======= <<<---  Quiz #15 - --->>> =======


|--------------------------------------------------
*/




/**
|--------------------------------------------------
  ======= <<<---  Quiz #16 - --->>> =======


|--------------------------------------------------
*/




/**
|--------------------------------------------------
  ======= <<<---  Quiz #17 - --->>> =======


|--------------------------------------------------
*/



/**
|--------------------------------------------------
  ======= <<<---  Quiz #18 - --->>> =======


|--------------------------------------------------
*/




/**
|--------------------------------------------------
  ======= <<<---  Quiz #19 - --->>> =======


|--------------------------------------------------
*/




/**
|--------------------------------------------------
  ======= <<<---  Quiz #20 - --->>> =======


|--------------------------------------------------
*/

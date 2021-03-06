// 'use strict';

/**
|--------------------------------------------------
  === <<<---  Quiz #1 --->>>  ===
Свойства __proto__ и prototype - это одно и то же?
Так
Нет *
|--------------------------------------------------
*/


/**
|--------------------------------------------------
  === <<<---  Quiz #2  --->>>  ===
Как сделать текст жирным при помощи CSS?
<bold>MyText</bold>
font-weight: bold *
<b>MyText</b>
|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #3 --->>>  ===  
Какой из транспортных протоколов TCP/IP стека гарантирует доставку пакетов?
SPX
ARP
UDP
TCP
IPX
|--------------------------------------------------
*/


/**
|--------------------------------------------------
  === <<<---  Quiz #4 --->>>  ===
Какой результат выполнения следующего JavaScript кода?
'21' === 21
true
false *
|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #5 --->>>  ===
Установите в соответствие выражению его значение
5 && 2 || 3 <------> 5
2 && (5 || 3) <------> 2
(2 && 3) || 5 <------> 3
|--------------------------------------------------
*/


/**
|--------------------------------------------------
  === <<<---  Quiz #6 --->>>  ===
Какая команда отвечает за изменения владельца файла в Unix системах?

change-file-owner
suid *
chown
chdir
chmod
|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #7 --->>>  ===
Как центрировать блок, содержащий заголово, по горизонтали?

<style>
  .container {
    width: 600px;
  }
</style>
...
<div class='container'>
  <div class='title'>
    <h1>Hello!</h1>
  </div>
</div>

.title{margin: 0 auto;}*
|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #8 --->>>  ===
Что будет выведено в консоли после выполнения данного фрагмента кода?

var x = 7;
console.log( ++x);

error
6
7
8 *
|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #9 --->>>  ===
Что общего между XSS и CSRF?

Это типы уязвимостей
это браузерные стандарты
Это сетевые протоколы
Это фреймворки
|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #10 --->>>  ===
Сколько параметров можно передать в функцию JS?
Сколько угодно *
|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #11 --->>>  ===
Что будет выведено в консоли после выполнения данного фрагмента кода?

var arr = [1, 2, 3, 4, 5]
var result = arr.filter( function(el) {
  return el % 2;
});
console.log(result);

[2, 4]
2
15
[1, 2, 3, 4, 5]
[1, 3, 5]
[2]
|--------------------------------------------------
*/




/**
|--------------------------------------------------
  === <<<---  Quiz #12 --->>>  ===
Что будет выведено в консоли после выполнения данного фрагмента кода?

var a = { name: 'Vasya' };
var b = { name: 'Vasya' };
console.log(a === b);

false *
true
error
|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #13 --->>>  ===
function f1(a, b) {
  console.log(a, b);
}

var f2 = f1.bind(null, 'foo');

f2('bar', 'baz');

undefined undefined
error
null foo
foo bar
foo baz
boo undefined
bar baz

|--------------------------------------------------
*/


/**
|--------------------------------------------------
  === <<<---  Quiz #14 --->>>  ===
if (true) {
  function f() {
    console.log('foo');
  }
} else {
  function f() {
    console.log('bar);
  }
}

f();

____
bar foo
bar
error
foo
foo bar
|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #15 --->>>  ===
Что из перечисленного является реляционными базами данных?
mysql
mongodb
freebsd
postgres
redis
oracle

|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #16  --->>>  ===
Что из нижеописанного является методами HTTP протокола?
PUT
GET
DELETE
REPLACE
UPDATE
POST
REDUCE
CREATE

|--------------------------------------------------
*/


/**
|--------------------------------------------------
  === <<<---  Quiz #17 --->>>  ===
Выберите варианты, где сравнение равно true

'foo' > 'bar'
{} === {}
'14' < '2'
'A' > 'B'
|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #18  --->>>  ===
Какой вариант задания цвета в CSS Не сработает?
color: #hhh; *
color: #aaa;
color: #aaaaaa;
color: #000;

|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #19 --->>>  ===
Правдиво ли выражение 0.1 + 0.2 - 0.2 == 0.1?

Так
Ні
|--------------------------------------------------
*/



/**
 |--------------------------------------------------
 === <<<---  Quiz #20 --->>>  ===
Какие элементы выберет следующий CSS селектор? '#div > .bbb'?

<div class='bbb' id='div' data-name='element-1'>
  <span class='bbb' data-name='element-2'>
    <div class='bbb' data-name='element-3'></div>
  </span>
</div>

element-1
element-2
element-3
|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #21 --->>>  ===

|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #22 --->>>  ===

|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #23 --->>>  ===

|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #24 --->>>  ===

|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #25 --->>>  ===

|--------------------------------------------------
*/




/**
|--------------------------------------------------
  === <<<---  Quiz #26 --->>>  ===

|--------------------------------------------------
*/




/**
|--------------------------------------------------
  === <<<---  Quiz #27 --->>>  ===

|--------------------------------------------------
*/




/**
|--------------------------------------------------
  === <<<---  Quiz #28 --->>>  ===

|--------------------------------------------------
*/




/**
|--------------------------------------------------
  === <<<---  Quiz #29 --->>>  ===

|--------------------------------------------------
*/




/**
|--------------------------------------------------
  === <<<---  Quiz #30 --->>>  ===

|--------------------------------------------------
*/





// === EXAMPLES === 

// === <<<--- What will show console.log?  --->>>  ===







// const prom1 = Promise.resolve('123');
// const prom2 = Promise.resolve('error');
// const prom3 = Promise.resolve('some');
// Promise.all([prom1, prom2, prom3])
// .then(data => console.log(data))
// .catch(error => console.log(error));
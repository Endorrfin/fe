/**
|--------------------------------------------------
TASK #01
Бинарный поиск - это алгоритм; на входе он получает отсортированный список элементов.
Если элемент, который вы ищете, присутствует в списке, то бинарный поиск возвращает ту позицию, в которой он был найден. 
В противном случае бинарный поиск возвращает null.

Рассмотрим пример того, как работает бинарный поиск. Сыграем в простую игру: я загадал число от 1 до 20.
Вы должны отгадать мое число, использовав как можно меньше попыток.
При каждой попытке я буду давать один из трех ответов: «мало», «много» или «угадал».
|--------------------------------------------------
*/

const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];
    console.log('mid :', mid);
    console.log('guess :', guess);

    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
};

const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

console.log(binarySearch(myList, 21)); // 1
console.log(binarySearch(myList, 54)); // null



/**
|--------------------------------------------------
TASK #02
Searches recursively number from the list
@param {Array} list
@param {number} item Search item
@param {number} low Lower limit of search in the list
@param {number} high Highest limit of search in the list
@return {(number | null)} Number if the value is found or NULL otherwise
|--------------------------------------------------
*/


const binarySearch2 = ( list, item, low = 0, high = list.length - 1 ) => {
  let arrLength = list.length;
  while ( low <= high ) {
      let mid = Math.floor((low + high) / 2);
      let guess = list[mid];

      if ( guess === item ) {
          return mid;
      } else if ( guess > item ) {
          high = mid - 1;
          list = list.slice( 0, mid );
          return binarySearch( list, item, low, high );
      } else {
          low = mid + 1;
          list = list.slice( low, arrLength );
          return binarySearch( list, item, low, high );
      }
  }

  return null;
};

/**
* Creates the array that contains numbers 1...N
* @param {number} n - number N
* @return {Array}
*/
const createArr = ( n ) => Array.from({length: n}, (v, k) => k + 1);

const myList = createArr( 100 );

console.log( binarySearch2( myList2, 3 ) ); // 2
console.log( binarySearch2( myList2, -1 ) ); // null
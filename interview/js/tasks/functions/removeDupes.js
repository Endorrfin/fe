/**
 * Напишіть функцію, яка приймає рядок і повертає новий, в якому всі симводи, що дублюються, будуть видалені.
 */

// ------- Solution I -------
function removeDupes(str) {
  return Array.from(new Set(str)).join('');
}

// console.log(removeDupes('abcd'));
// console.log(removeDupes('aabbccdd'));
// console.log(removeDupes('abcddbca'));
// console.log(removeDupes('abababcdcdcd'));
// console.log(removeDupes('dcbaabcdqr'));


// ------- Solution II -------
const array = [1, 4, 2, 4, 4, 3, 4];
const uniqueElements = [... new Set(array)];
// console.log('unique elements', uniqueElements);

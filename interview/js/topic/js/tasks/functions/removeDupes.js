/**
 * Напишіть функцію, яка приймає рядок і повертає новий, в якому всі симводи, що дублюються, будуть видалені.
 */

function removeDupes(str) {
  return Array.from(new Set(str)).join('');
}

// console.log(removeDupes('abcd'));
// console.log(removeDupes('aabbccdd'));
// console.log(removeDupes('abcddbca'));
// console.log(removeDupes('abababcdcdcd'));
// console.log(removeDupes('dcbaabcdqr'));

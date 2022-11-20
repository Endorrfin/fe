/**
 * Напишіть функцію, яка приймає массив із вкладеними масивами та разпакуйте в
 * рузультуючий плоский масив. Результатом буде новий одномірний масив
 */

function flatten(array) {
  const res = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const flat = flatten(array[i]);
      for (let j = 0; j < flat.length; j++) {
        res.push(flat[j]);
      }
    } else {
      res.push(array[i]);
    }
  }
  return res;
}

// console.log(flatten([[1], [[2, 3]], [[[4]]]]));
// console.log(flatten([[1], [[2]], [[[3]]], [[[[4]]]], [[[[[5]]]]], [[[[[[6, 7, 8, 9]]]]]], 0]));


// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:
// const array = [1, 3, 4, 6, 2, 5, 7];
// removeElement(array,4);
// console.log(array); // Результат: [1, 3, 6, 2, 5, 7]

function removeElement(array, item) {
  let index;
  while ((index = array.indexOf(item)) !== -1) {
    array.splice(index, 1);
  }
}

let array = [1, 3, 4, 6, 2, 5, 7, 4];
console.log(array);
removeElement(array,4);
console.log(array);

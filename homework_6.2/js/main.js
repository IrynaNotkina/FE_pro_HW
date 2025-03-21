
// Дано масив з елементами різних типів.
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function arithmeticMean(array) {
  let sum = 0;
  let amount = 0;
      
  for (i of array) {
    if (typeof i === 'number') {
        sum += i;
        amount++;
    }
}

return amount ? sum / amount : 0;
}

const someArray = [undefined, true, -3, 'text', 5, 5, null, 5, 0];
console.log(arithmeticMean(someArray));

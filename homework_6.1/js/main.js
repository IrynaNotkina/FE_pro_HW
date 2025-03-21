
// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.

function removeSymbols(string, symbols) {
  var result = '';
  for (var i = 0; i < string.length; i++) {
      if (!symbols.includes(string[i])) {
          result += string[i];
      }
  }
  return result;
}

var  userString= prompt("Enter a string:");
var userSymbols = prompt("Enter symbols to remove (without spaces):").split('');

console.log(`Entered string: ${userString}`);
console.log(`Entered symbols: ${userSymbols}`);
console.log(removeSymbols(userString, userSymbols));

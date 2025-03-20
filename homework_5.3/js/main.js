const integerN = prompt('Please enter integer:');
console.log(`Entered integer is ${integerN}`);
// let integer = 1;
if (isNaN(integerN)) {
  alert ("You entered invalid integer.");
  console.log(`User entered invalid integer.`);
} else if (!integerN) {
  alert("It's a pity that you didn't want to participate.");
  console.log(`User skipped entry`);
} else {
  
  for (let i = 1; i <= 100; i++) {
    let square = i ** 2;
    if (square <= integerN) {
      console.log(`The square of ${i} is ${square}`);
    } else {
      break;
    } 
  }
}

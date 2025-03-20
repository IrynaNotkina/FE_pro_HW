function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
  }
  return true;
}

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
    console.log(isPrime(integerN) ? `The number ${integerN} is prime.` : `The number ${integerN} is not a prime.`);
}

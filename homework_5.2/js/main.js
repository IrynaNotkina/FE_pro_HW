const exchangeRate = 26;

for (let dollars = 10; dollars <= 100; dollars += 10) {
  let cost = dollars * exchangeRate;
  console.log(`${dollars} USD = ${cost} UAH`);
}
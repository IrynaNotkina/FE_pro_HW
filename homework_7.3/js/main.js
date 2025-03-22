// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу) . Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше. Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації, то функція виводить в консоль останній введення користувача і завершує функцію.


function getNumber() {
  let number;
  let attempts = 0;
  const maxAttempts = 10;
  
  while (attempts < maxAttempts) {
      number = prompt("Enter a number greater than 100:");
      
      if (number === null) {
          console.log("Input canceled by the user.");
          return;
      }

      if (isNaN(number) || number.trim() === "") {
        console.log("Invalid input. Please enter a valid number.");
        continue;
      }
      
      number = Number(number);
      
      if (number > 100) {
          console.log("Last entered number:", number);
          return;
      }
      
      attempts++;
  }
  
  console.log("Maximum attempts reached. Last entered number:", number);
}

getNumber();

console.log(checkDigits());

function checkDigits() {
    let userInput = prompt('Enter a three-digit number:');

    if (!userInput || isNaN(userInput) || userInput.length !==3) {
        alert ("Please enter a valid three-digit number.");
        return checkDigits();
    }
    let userInputSep = userInput.split('');
    // console.log(userInputSep);

    if (userInputSep[0] === userInputSep[1] && userInputSep[1] === userInputSep[2]) {
        console.log(`All digits are the same: ${userInputSep[0]}`);
        let more = confirm(`All digits are the same: ${userInputSep[0]}. Check other three-digit number?`);
            if (more) {
                return checkDigits();
            };
    } else if (userInputSep[0] === userInputSep[1] || userInputSep[1] === userInputSep[2] || userInputSep[2] === userInputSep[0]) {
        console.log(`Some digits are duplicated`);
        let more = confirm(`Some digits are duplicated. Check other three-digit number?`);
            if (more) {
                return checkDigits();
            };
    } else {
        console.log(`There are no duplicate digits`);
        let more = confirm(`There are no duplicate digits. Check other three-digit number?`);
            if (more) {
                return checkDigits();
            };
    }
}


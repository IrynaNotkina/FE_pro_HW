function askBirthYear() {
    const birthYearStr = prompt('Enter your birth year, like YYYY:');
    if (birthYearStr === null) {
        alert("It's a pity that you didn't want to enter your birth year.");
        return;
    }
    const currentYear = 2025;
    const birthYear = Number(birthYearStr);

    if (isNaN(birthYear) || birthYearStr.length !== 4 || birthYear > currentYear || birthYear < currentYear - 100) {
        alert('You entered an invalid birth year. Try again.');
        return askBirthYear();
    }

    return birthYear;
}

const birthYear = askBirthYear();
if (birthYear === undefined) {
} else {
    const currentYear = 2025;
    const age = currentYear - birthYear;
    console.log(age);

    let message = `Your age: ${age}\n`;

    const city = prompt('Which city do you live in?');
    if (city === null) {
        alert("It's a pity that you didn't want to enter your city.");
    } else {
        console.log(city);

        const sport = prompt('What is your favorite sport?');
        if (sport === null) {
            alert("It's a pity that you didn't want to enter your favorite sport.");
        } else {
            console.log(sport);

            if (city === "Kyiv") {
                message += "You live in the capital of Ukraine.";
            } else if (city === "Washington") {
                message += "You live in the capital of the USA.";
            } else if (city === "London") {
                message += "You live in the capital of the United Kingdom.";
            } else {
                message += `You live in the city of ${city}.`;
            }

            const sportsChampions = {
                "hockey": "Wayne Gretzky",
                "basketball": "Michael Jordan",
                "american football": "Tom Brady"
            };

            if (sportsChampions[sport]) {
                message += `\nCool! Do you want to become ${sportsChampions[sport]}?`;
            } else {
                message += `\n${sport} is a great choice!`;
            }

            alert(message);
            console.log(message);
        }
    }
}
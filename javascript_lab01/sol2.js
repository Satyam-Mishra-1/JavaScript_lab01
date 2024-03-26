const readline = require('readline');
  const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}



rl.question("Enter a number: ", function(userInput) {
        const number = parseInt(userInput); 
        if (!isNaN(number)) {
            const result = checkEvenOrOdd(number);
            console.log("The number is", result + ".");
        } else {
            console.log("Invalid input. Please enter a valid number.");
        }
        rl.close();
    });


const readline = require('readline');
  const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cities = ["Nagpur", "Bhopal", "Delhi", "Udaipur", "Mumbai"];

rl.question("Enter a City ", function(userInput) {
    const index = cities.indexOf(userInput); 
    if (index !== -1) {
        console.log(`The city "${userInput}" exists in the array at index ${index}.`);
    } else {
        console.log("Not Found");
    }
    rl.close();
});
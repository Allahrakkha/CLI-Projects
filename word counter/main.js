import inquirer from "inquirer";
const sentence = await inquirer.prompt([
    {
        name: "words",
        type: "inpute",
        message: "please write any sentence."
    }
]);
const wordCounter = sentence.words.trim().split(' ');
console.log(`your sentence lenght is: ${wordCounter.length}`);

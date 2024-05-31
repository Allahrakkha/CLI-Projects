import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "write first number."
    },
    {
        name: "num2",
        type: "number",
        message: "write 2nd number."
    },
    {
        name: "operator",
        type: "list",
        message: "select your operator.",
        choices: ['add', 'sub', 'mult', 'div']
    },
]);
if (answer.operator === 'add') {
    console.log(`${answer.num1 + answer.num2}`);
}
else if (answer.operator === 'sub') {
    console.log(`${answer.num1 - answer.num2}`);
}
else if (answer.operator === 'mult') {
    console.log(`${answer.num1 * answer.num2}`);
}
else if (answer.operator === 'div') {
    console.log(`${answer.num1 / answer.num2}`);
}
else {
    console.log("please select valid operator");
}

import inquirer from "inquirer";
const todo = [];
let loop = true;
while (loop) {
    const input = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "What do you want to add"
        },
        {
            name: "confirmation",
            type: "confirm",
            message: "Do you want to add more?",
            // default:false
        }
    ]);
    todo.push(input.task);
    console.log(todo);
    loop = input.task;
}

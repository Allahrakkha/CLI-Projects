import inquirer from 'inquirer';

let todos: string[] = [];
let condition = true;

while (condition) {
    let q1 = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "What do you want to add?"
        },
        {
            name: "yesNo",
            type: "confirm",
            message: "Do you want to add more?",
            default: false
        }
    ]);

    // Add the task to the list
    todos.push(q1.task);

    // Check if the user wants to continue
    condition = q1.yesNo;

    // Print the current list of todos
    console.log(todos);
}

console.log("Final TODO list:", todos);

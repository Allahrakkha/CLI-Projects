import inquirer from "inquirer";
const todos = [];
const condition = true;
while (condition) {
    const res = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "what do you want to add?"
        },
        {
            name: "confirmation",
            type: "confirm",
            message: "Do you want to add more?"
        },
    ]);
    todos.push(res.task);
    console.log(todos);
}

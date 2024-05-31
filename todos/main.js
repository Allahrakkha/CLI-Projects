import inquirer from "inquirer";
let todos = [];
let condition = true;
while (true) {
    let q1 = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "what do you want to add?"
        },
        {
            name: "yesNo",
            type: "confirm",
            message: "do you want to add more?",
            default: "false"
        }
    ]);
    if (q1.yesNo === "y") {
        todos.push(q1.task);
        condition = q1.yesNo;
        console.log(todos);
    }
    else {
        console.log("hello");
    }
}

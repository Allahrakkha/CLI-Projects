import inquirer from "inquirer";
const percentage = await inquirer.prompt([
    {
        name: "marks1",
        type: "number",
        message: "insert your marks"
    }
]);
if (percentage.marks1 >= 90) {
    console.log('you got A grade.');
}
else if (percentage.marks1 >= 80) {
    console.log('you got B grade.');
}
else if (percentage.marks1 >= 70) {
    console.log('you got C grade.');
}
else if (percentage.marks1 >= 60) {
    console.log('you got D grade.');
}
else {
    console.log("You are fail.");
}

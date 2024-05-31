#! /usr/bin/env node
import inquirer from "inquirer"
const answer=await inquirer.prompt([
    {
        type:"number",
        name:"num1",
        message: "please enter your first number."
    },
    {
        type:"number",
        name:"num2",
        message: "please enter your second number."
    },
    {
        type:"list",
        name:"operator",
        message: "please enter your first number.",
        choices:['add','sub','div','mult']
    },
])
if (answer.operator==="add"){
    console.log(`your result is:`, answer.num1 + answer.num2)
}
else if (answer.operator==="sub"){
    console.log(`your result is:`, answer.num1 - answer.num2)
}
else if (answer.operator==="div"){
    console.log(`your result is:`, answer.num1 / answer.num2)
}
else if (answer.operator==="mult"){
    console.log(`your result is:`, answer.num1 * answer.num2)
}
else{
    console.log("please enter valid operator.")
}
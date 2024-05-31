import inquirer from "inquirer";

const randomNum = Math.floor(10000 + Math.random() * 100000)
let mybalance = 0;

let answer: any = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "enter student name",
        validate: function (val) {
            if (val.trim() !== "") {
                return true
            }
            return "please enter name."
        }
    },
    {
        name: "courses",
        type: "list",
        message: "enter select course",
        choices: ['MS Office', 'Typescript', 'Python']

    },
]);
const fee: { [key: string]: number } = {
    "MS Office": 20000,
    "Typescript": 30000,
    "Python": 25000,
}
console.log(`\nTution Fees: ${fee[answer.courses]}/- \n`)
console.log(`Your balance : ${mybalance}`)

const paymentMethod: any = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "select payment method",
        choices: ['bank', 'jazzzcash', 'easypaisa']
    },
    {
        name: "amount",
        type: "input",
        message: "please transfer amount",
        validate: function (val) {
            if (val.trim() !== "") {
                return true
            }
            return "please enter fee amount ."
        }
    },
]);
console.log(`\nyou have selected payment method: ${paymentMethod.payment}`)
const tuitionFee= fee[answer.courses]
const paymentAmount = parseFloat(paymentMethod.amount)
if(tuitionFee ===paymentAmount){
    console.log(`\ncongratulation! you have successfully enrolled`)
    const ans =await inquirer.prompt([
        {
            name:"answer",
            type:"list",
            message:"What would you like to do next?",
            choices:['Viewstatus','Exit']
        }
    ]);
    if (ans.answer === "Viewstatus"){
        console.log(`\n******* Status*******\n`)
        console.log(`students name:${answer.students}`)
        console.log(`students ID:${randomNum}`)
        console.log(`students course:${answer.courses}`)
        console.log(`students balance:${mybalance += paymentAmount}`)
    }
    else{
        console.log("\nLogging out from school management system... Thank you")
    }
}
else{
    console.log(`invalid amount`)
}
import inquirer from "inquirer";

const pin = 1234
let balance = Math.floor(Math.random()*100000)

const userPin = await inquirer.prompt([
    {
        name: "uPin",
        type: "number",
        message: "please enter pincode."
    }
]);


if (userPin.uPin === pin) {
    const transactionType = await inquirer.prompt([
        {
            name: "transaction",
            type: "list",
            message: "please select type.",
            choices: ['withdraw', 'fastcash', 'balance inquiry'],
        }
    ]);


    if (transactionType.transaction === "withdraw") {
        const userInput1 = await inquirer.prompt([
            {
                name: "uInput",
                type: "number",
                message: "please enter amount"
            }
        ])
        const userCash = userInput1.uInput
        if (balance>=userCash){
            console.log(`your remaining balance is ${balance - userCash}`)
        } else{
            console.log(`insufficiant balance`)
        }
        
    };
    if (transactionType.transaction === "fastcash") {
        const userInput2 = await inquirer.prompt([
            {
                name: "fCash",
                type: "list",
                message: "please select amount",
                choices: [1000, 5000, 10000]
            }
        ])
        const fixAmount = userInput2.fCash
        if (balance >= fixAmount){
            console.log(`your remaining balace is ${balance -fixAmount}`)
        }
        else{
            console.log(`insufficiant balance`)
        }        
    };
    if (transactionType.transaction === "balance inquiry") {
        console.log(`Your current balanceis ${balance}`)
    }

}else{
    console.log(`Please enter valid code.`)
}
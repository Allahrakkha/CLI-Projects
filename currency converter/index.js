import inqurer from "inquirer";
const amount = {
    USD: 1,
    PKR: 300,
    IND: 150,
    Euro: 90,
};
const userIput = await inqurer.prompt([
    {
        name: "from",
        type: "list",
        message: "select currency",
        choices: ['USD', 'PKR', 'IND', 'EURO']
    },
    {
        name: "to",
        type: "list",
        message: "select currency converted into",
        choices: ['USD', 'PKR', 'IND', 'EURO']
    },
    {
        name: "amountEntered",
        type: "number",
        message: "enter amount"
    },
]);
const fromAmount = amount[userIput.from];
const toAmount = amount[userIput.to];
const basedAmount = toAmount / fromAmount;
const userEamount = userIput.amountEntered;
const convertedAmount = basedAmount * userEamount;
// console.log(`${userIput.from} Currency rate ${fromAmount}`)
console.log(`${[userIput.to]} exchange rate ${fromAmount}`);
// console.log(`basedAmount ${basedAmount}`)
// console.log(`Enterded Amount ${userEamount}`)
console.log(`Converted Amount ${convertedAmount}`);

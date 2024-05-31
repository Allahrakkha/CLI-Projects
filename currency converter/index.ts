import inqurer from "inquirer";


const amount:any ={
    USD: 1, 
    PKR: 300,
    IND: 150,
    Euro: 90,
}

const userIput = await inqurer.prompt([
    {
        name:"from",
        type:"list",
        message:"select currency",
        choices:['USD','PKR','IND', 'EURO']
    },
    {
        name:"to",
        type:"list",
        message:"select currency converted into",
        choices:['USD','PKR','IND', 'EURO']
    },
    {
        name:"amountEntered",
        type:"number",
        message:"enter amount"
    },
]);
 
const fromAmount=amount[userIput.from]
const toAmount=amount[userIput.to]
const basedAmount= toAmount/fromAmount
const userEamount=userIput.amountEntered
const convertedAmount= basedAmount*userEamount;
console.log(`${[userIput.to]} exchange rate ${fromAmount}`)
console.log(`Converted Amount ${convertedAmount}`)


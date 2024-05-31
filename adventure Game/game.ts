import inquirer from "inquirer";
import chalk from "chalk";
class player{
name:string;
fuel:number=  100;
constructor(name:string){
this.name= name;
}
fuelDecrease (){
    let fuel = this.fuel - 25
    this.fuel = fuel
    }
fuelIncrease(){
    this.fuel = 100
}
}

class oponent{
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name=name;
    }
    fuelDecrease (){
        let fuel = this.fuel - 25
        this.fuel = fuel
        }
}
let player1 = await inquirer.prompt([
    {
        name:"name",
        type:"input",
        message:"please enter your name."
    }
])
// console.log(player1.name)

let oponent1 = await inquirer.prompt([
    {
        name:"select",
        type:'list',
        message:"please select your oponent...",
        choices:['skelton','zombies','dragon']
    }
])
// console.log(oponent1.select);

let p1 = new player (player1.name)
let o1 = new oponent (oponent1.select)

do{if(oponent1.select == 'skelton'){
    // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
}
    
let ask = await inquirer.prompt([
    {
        name:"option",
        type:'list',
        message:"please select your option...",
        choices:['attack','life line','run for save life']
    }
]);
if(ask.option == "attack"){
    console.log("Attack")
    let num = Math.floor(Math.random()*2)
    if(num > 0){
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fule is ${p1.fuel}`) )
        console.log(chalk.bold.green(`${o1.name} fule is ${o1.fuel}`) )
        if (p1.fuel <=0){
            console.log(chalk.red.bold.italic("you lost! best luck for next time..."))
            process.exit()
        }
    }
    if(num === 0){
        o1.fuelDecrease()
        console.log(chalk.green.bold(`${p1.name} fule is ${p1.fuel}`) )
        console.log(chalk.bold.red(`${o1.name} fule is ${o1.fuel}`) )
        if (o1.fuel <=0){
            console.log(chalk.green.bold.italic("You Win!..."))
            process.exit()
 
        }
    }
}
if(ask.option == "life line"){
    p1.fuelIncrease()
    console.log(chalk.green.bold.italic(`your life line is boost: ${p1.fuel}`))
}
if(ask.option == "run for save life"){
    console.log(chalk.red.bold.italic("you lost! best luck for next time..."))
    process.exit()
}
}
while(true)



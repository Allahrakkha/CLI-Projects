import inquirer from "inquirer";

class Student{
    name:string
    constructor(n:string){
        this.name=n
    }
}
class Person{
    students:Student[]=[]
    addStudent(obj:Student){
this.students.push (obj)
    }
}

const persons = new Person()
const programStart =async (persons:Person)=>{
do{console.log("WelCome !")
const ans = await inquirer.prompt({
name:"select",
type:"list",
message:"Ap kis se bat kare gai?",
choices:['student','yourself']
})
if (ans.select == "yourself"){
    console.log("i am talking my self")
}
if (ans.select == "student"){
    const ans =await inquirer.prompt({
        name:"studentName",
        type:"input",
        message:"ap ko kis students se bat kari hai?"
    });
    const student = persons.students.find(val => val.name == ans.studentName)
if(!student){
    const name= new Student (ans.studentName)
    persons.addStudent(name)
    console.log(`hello i am ${name.name}... student is not persent`)
    console.log(persons.students);    
}if (student){
    console.log(`hello i am ${student.name}..... student is present`)
    console.log(persons.students);  
}
}
}while(true)
};
programStart(persons)
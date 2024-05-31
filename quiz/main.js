import inquirer from "inquirer";
let score = 0;
const quiz = await inquirer.prompt([
    {
        name: "sName",
        type: "input",
        message: "What is your name?"
    },
    {
        name: "q1",
        type: "list",
        message: "What is typescript compiler?",
        choices: ['nodejs', 'nextjs', 'typescript']
    },
    {
        name: "q2",
        type: "list",
        message: "What is TS standsfor?",
        choices: ['nodejs', 'Type and Script', 'typescript']
    },
    {
        name: "q3",
        type: "list",
        message: "What is typescript intallation command?",
        choices: ['npm i -g typescipt', 'npm i g typescript', 'npm i g typescript@latest']
    },
    {
        name: "q4",
        type: "list",
        message: "What is short cut of opening terminal?",
        choices: ['ctrl+``', 'ctrl+f1', 'ctrl+f4']
    },
    {
        name: "q5",
        type: "list",
        message: "What is typescript file printing command?",
        choices: ['tsc filename.ts', 'node filename.js', 'tsc']
    },
]);
function response1() {
    if (quiz.q1 === "nodejs") {
        let res1 = score += 1;
        return res1;
    }
    else {
        return score += 0;
    }
}
response1();
function response2() {
    if (quiz.q2 === "typescript") {
        return score += 1;
    }
    else {
        return score += 0;
    }
}
response2();
function response3() {
    if (quiz.q3 === "npm i -g typescipt") {
        return score += 1;
    }
    else {
        return score += 0;
    }
}
response3();
function response4() {
    if (quiz.q4 === "ctrl+``") {
        return score += 1;
    }
    else {
        return score += 0;
    }
}
response4();
function response5() {
    if (quiz.q5 === "node filename.js") {
        return score += 1;
    }
    else {
        return score += 0;
    }
}
let answer = response5();
if (answer >= 3) {
    console.log(`\n******* RESULT******`);
    console.log(`\n\ncongratulation! you are passed in quiz...`);
    console.log(`\nyour score is ${answer}`);
}
else {
    console.log(`\n******* RESULT******`);
    console.log(`\nSorry are fail in quiz`);
    console.log(`\nyour score is: ${answer}`);
}

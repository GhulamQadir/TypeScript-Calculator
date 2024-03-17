#! /usr/bin/env node

import inquirer from "inquirer";


console.log('"Made by Ghulam Qadir"')
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNum" },
  { message: "Enter second number", type: "number", name: "secondNum" },
  {
    message: "Select operator to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition","Subtraction","Multiplication","Division"]
  },
]);
console.log(answer)


// CONDITIONS
if(answer.operator==="Addition"){
    console.log(`Result is: ${answer.firstNum + answer.secondNum}`)
}
else if(answer.operator==="Subtraction"){
  console.log(`Result is: ${answer.firstNum - answer.secondNum}`)
}
else if(answer.operator==="Multiplication"){
  console.log(`Result is: ${answer.firstNum * answer.secondNum}`)
}
else if(answer.operator==="Division"){
  console.log(`Result is: ${answer.firstNum / answer.secondNum}`)
}
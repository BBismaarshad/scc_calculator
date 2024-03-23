#!/usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { massage: "Enter your first number", type: "number", name: "firstNumber" },
    { massage: "Enter your second number", type: "number", name: "secondNumber" },
    {
      massage: "Select one of oprators to perform action",
      type: "list",
      name: "oprators", choices:["ADDITION","SUBTRACTION","MULTPLICATION","DIVISION"],
    },
  ]);
   // CONDITIONAL STATMENT
   if (answer.oprators ==="ADDITION"){
    console.log(answer.firstNumber + answer.secondNumber);
   } else if (answer.oprators ==="SUBTRACTION"){
    console.log(answer.firstNumber - answer.secondNumber);
   } else if (answer.oprators ==="MULTPLICATION"){
    console.log(answer.firstNumber * answer.secondNumber);
   } else if (answer.oprators ==="DIVISION"){
    console.log(answer.firstNumber / answer.secondNumber);
   } 
   else{"please select correct operat"}

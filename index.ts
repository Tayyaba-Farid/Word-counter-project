#! /usr/bin/env node

import inquirer from "inquirer";

let answer: { sentence: string } = await inquirer.prompt([
  {
    name: "sentence",
    message: "enter the sentence to find the word count: ",
    type: "input",
  },
]);

let wordCount = answer.sentence.trim().split(" ");
console.log(`The word count of your sentence is ${wordCount.length}`);

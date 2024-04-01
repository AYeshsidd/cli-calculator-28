#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter the first number",
        type: "number",
        name: "firstnumber" },
    { message: "Enter the second number",
        type: "number",
        name: "secondnumber" },
    { message: "select one of the operator to perform calculation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Multiplication", "division", "subtraction", "modulus", "exponent"] },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else if (answer.operator === "modulus") {
    console.log(answer.firstnumber % answer.secondnumber);
}
else if (answer.operator === "exponent") {
    console.log(answer.firstnumber ** answer.secondnumber);
}
else {
    "please select valid operator";
}
;
console.log(answer);

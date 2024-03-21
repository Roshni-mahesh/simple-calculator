"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    {
        message: "Enter first number",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter second number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Select operation",
        type: "list",
        name: "operator",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
        ],
    },
]);
if (answer.operator === "Addition") {
    console.log("Your value is", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log("Your value is", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log("Your value is", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log("Your value is", answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please Select Valid Operator");
}

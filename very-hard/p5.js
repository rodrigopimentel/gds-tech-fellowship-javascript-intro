// Rodrigo Pimentel
// GDS Tech Fellowship
// 2022/07/01

// Coding Challenge: JavaScript Introduction
// VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /), and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

const add = (operandOne, operandTwo) => operandOne + operandTwo;
const subtract = (operandOne, operandTwo) => operandOne - operandTwo;
const multiply = (operandOne, operandTwo) => operandOne * operandTwo;
const divide = (operandOne, operandTwo) => operandOne / operandTwo;

let userOperandOne = Number(window.prompt('Enter a number'));
let userOperator = String(window.prompt('Enter an operator (+, -, *, or /)'));
let userOperandTwo = Number(window.prompt('Enter another number'));

switch(userOperator) {
    case '+':
        console.log(add(userOperandOne, userOperandTwo));
        break;
    case '-':
        console.log(subtract(userOperandOne, userOperandTwo));
        break;
    case '*':
        console.log(multiply(userOperandOne, userOperandTwo));
        break;
    case '/':
        console.log(divide(userOperandOne, userOperandTwo));
        break;
}
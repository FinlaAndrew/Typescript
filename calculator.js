"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function calculate(operation, num1, num2) {
    var result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            throw new Error("Invalid operation: " + operation);
    }
    return result;
}
function promptAndCalculate() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Enter an operation (+, -, *, /): ", function (operation) {
        rl.question("Enter the first number: ", function (num1) {
            rl.question("Enter the second number: ", function (num2) {
                var result = calculate(operation, Number(num1), Number(num2));
                console.log("".concat(num1, " ").concat(operation, " ").concat(num2, " = ").concat(result));
                rl.close();
            });
        });
    });
}
promptAndCalculate();

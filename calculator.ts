import * as readline from 'readline';

function calculate(operation: string, num1: number, num2: number): number {
  let result: number;
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
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Enter an operation (+, -, *, /): ", (operation: string) => {
    rl.question("Enter the first number: ", (num1: string) => {
      rl.question("Enter the second number: ", (num2: string) => {
        const result = calculate(operation, Number(num1), Number(num2));
        console.log(`${num1} ${operation} ${num2} = ${result}`);
        rl.close();
      });
    });
  });
}

promptAndCalculate();

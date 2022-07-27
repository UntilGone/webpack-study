const sum = (a: number, b: number) => a + b;
const num1 = '5'; // num1 is string not a number
const num2 = 7;
// function sum should be error because num1 is not a number
console.log(`${num1} add ${num2} is`, sum(num1, num2));

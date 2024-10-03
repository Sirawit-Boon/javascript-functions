// Start coding here
const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;


let calculator = {
    add: add(10, 20),
    substract: substract(),
    multiply: multiply(),
    divide: divide(3000, 10),
};



const addResult = calculator.add;
console.log(addResult);

const divideResult = calculator.divide;
console.log(divideResult);

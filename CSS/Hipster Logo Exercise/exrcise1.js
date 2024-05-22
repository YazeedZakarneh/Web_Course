function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiple(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calculate(a, b, operation) {

    return operation(a, b);
}


console.log(add(5, 3)); // 8;
console.log(subtract(3, 5)); // -2;
console.log(multiple(3, 2)); // 6;
console.log(divide(10, 2)); // 5 ;

console.log(calculate(5, 3, add)); // 8;
console.log(calculate(3, 5, subtract)); // -2;
console.log(calculate(3, 2, multiple)); // 6;
console.log(calculate(10, 2, divide)); // 8;



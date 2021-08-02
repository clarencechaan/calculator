function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function mod(x, y) {
    return x % y;
}

function operate(operator, x, y) {
    if (operator === 'add') {
        return add(x, y);
    } else if (operator === 'subtract') {
        return subtract(x, y);
    } else if (operator === 'multiply') {
        return multiply(x, y);
    } else if (operator === 'divide') {
        return divide(x, y);
    } else if (operator === 'mod') {
        console.log("hello");
        return mod(x, y);
    } else {
        return y;
    }
}

const display = document.querySelector("#display");

function updateDisplay(x) {
    if (newNum || workingValue === 0) {
        display.textContent = x;
        workingValue = Number(display.textContent);
        newNum = false;
    } else if (x === '.' && display.textContent.includes('.')) {
        return;
    } else {
        display.textContent += x;
        workingValue = Number(display.textContent);
    }

}

function clearDisplay() {
    workingValue = 0;
    display.textContent = "0";
    operator = '';
}

let workingValue  = 0;
let operator, firstValue;
let newNum = true;

function storeOperator(op) {
    if (op === 'add') {
        operator = 'add';
    } else if (op === 'subtract') {
        operator = 'subtract';
    } else if (op === 'multiply') {
        operator = 'multiply';
    } else if (op === 'divide') {
        operator = 'divide';
    } else if (op === 'mod') {
        operator = 'mod';
    }
    newNum = true;
}

function storeFirstValue() {
    firstValue = workingValue;
    workingValue = 0;
}

function eval() {
    workingValue = operate(operator, firstValue, workingValue);
    operator = '';
    // firstValue = 0;
    newNum = true;
    display.textContent = `${workingValue}`;
}

function neg() {
    workingValue *= -1;
    display.textContent = workingValue;
}
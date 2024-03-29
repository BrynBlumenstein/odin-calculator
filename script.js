function operatorSelect(symbol) {
    if (operator == '') {
        operand1 = parseFloat(displayValue);
        operator = symbol;
        displayValue = '0';
        display.innerHTML = displayValue;
        toggleOperatorSelected();
    }
}

function equate() {
    if (operator != '') {
        operand2 = parseFloat(displayValue);
        displayValue = '' + operate(operand1, operator, operand2);
        while (displayValue.length > 9) displayValue = displayValue.slice(0, -1);
        display.innerHTML = displayValue;
        toggleOperatorSelected();
        operand1 = '0';
        operator = '';
        operand2 = '0';
    }
}

function toggleOperatorSelected() {
    switch (operator) {
        case ('+'):
            plus.classList.toggle('selected');
            break;
        case ('-'):
            minus.classList.toggle('selected');
            break;
        case ('*'):
            star.classList.toggle('selected');
            break;
        case ('/'):
            slash.classList.toggle('selected');
            break;
        default:
            // this case should never be reached
            break;
    }
}

function operate(operand1, operator, operand2) {
    switch (operator) {
        case ('+'):
            return add(operand1, operand2);
        case ('-'):
            return subtract(operand1, operand2);
        case ('*'):
            return multiply(operand1, operand2);
        case ('/'):
            return divide(operand1, operand2);
        default:
            // this case should never be reached
            return NaN;
    }
}

function add(operand1, operand2) {
    return operand1 + operand2;
}

function subtract(operand1, operand2) {
    return operand1 - operand2;
}

function multiply(operand1, operand2) {
    return operand1 * operand2;
}

function divide(operand1, operand2) {
    if (operand2 == 0) return NaN;
    return parseFloat((operand1 / operand2).toFixed(7));
}

function updateDisplay(value) {
    if (value == '') return clearDisplay();
    if (displayValue == 'NaN') return;
    if (value == '-') return changeSign();
    if (value == '%') return toPercent();

    if (displayValue == '0' && value == '0') return;
    if (value == '.' && displayValue.includes('.')) return;
    if (displayValue.length >= 9) return;

    if (displayValue == '-0' && value != '.') {
        displayValue = '-' + value;
    } else if (displayValue != '0' || value == '.') {
        displayValue += '' + value;
    } else {
        displayValue = value;
    }
    display.innerHTML = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    display.innerHTML = displayValue;
    operand1 = '0';
    operator = '';
    operand2 = '0';
    if (plus.classList.contains('selected')) plus.classList.remove('selected');
    if (minus.classList.contains('selected')) minus.classList.remove('selected');
    if (star.classList.contains('selected')) star.classList.remove('selected');
    if (slash.classList.contains('selected')) slash.classList.remove('selected');
}

function changeSign() {
    if (displayValue.charAt(0) != '-') {
        if (displayValue.length >= 9) {
            displayValue = '-' + displayValue.slice(0, -1);
        } else {
            displayValue = '-' + displayValue;
        }
    } else {
        displayValue = displayValue.slice(1);
    }
    display.innerHTML = displayValue;
}

function toPercent() {
    displayValue = '' + divide(parseFloat(displayValue), 100);
    if (displayValue.length > 9) displayValue = displayValue.slice(0,-1);
    display.innerHTML = displayValue;
}

let displayValue = '0';
let operand1 = '0';
let operator = '';
let operand2 = '0';

const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const decimal = document.querySelector('#decimal');
const sign = document.querySelector('#sign');
const percent = document.querySelector('#percent');
const plus = document.querySelector('#add');
const minus = document.querySelector('#subtract');
const star = document.querySelector('#multiply');
const slash = document.querySelector('#divide');
const equals = document.querySelector('#equals');

clear.addEventListener('click', () => updateDisplay(''));
zero.addEventListener('click', () => updateDisplay('0'));
one.addEventListener('click', () => updateDisplay('1'));
two.addEventListener('click', () => updateDisplay('2'));
three.addEventListener('click', () => updateDisplay('3'));
four.addEventListener('click', () => updateDisplay('4'));
five.addEventListener('click', () => updateDisplay('5'));
six.addEventListener('click', () => updateDisplay('6'));
seven.addEventListener('click', () => updateDisplay('7'));
eight.addEventListener('click', () => updateDisplay('8'));
nine.addEventListener('click', () => updateDisplay('9'));
decimal.addEventListener('click', () => updateDisplay('.'));
sign.addEventListener('click', () => updateDisplay('-'));
percent.addEventListener('click', () => updateDisplay('%'));
plus.addEventListener('click', () => operatorSelect('+'));
minus.addEventListener('click', () => operatorSelect('-'));
star.addEventListener('click', () => operatorSelect('*'));
slash.addEventListener('click', () => operatorSelect('/'));
equals.addEventListener('click', () => equate());
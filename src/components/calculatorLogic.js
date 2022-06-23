//Math function

import { getPanelId } from "@mui/base";

//Input: Integer, Integer
//Output: Integer
//Sums two values
function sum (value1, value2) {
    return value1 + value2;
}


//Input: Integer, Integer
//Output: Integer
//Subtracts two values
function minus (value1, value2) {
    return value1 - value2;
}


//Input: Integer, Integer
//Output: Integer
//Multiplies two values
function multiply (value1, value2) {
    return value1 * value2;
}


//Input: Integer, Integer
//Output: Integer
//Divides two values
function divide (value1, value2) {
    return value1 / value2;
}


//Input: Integer
//Output: Integer
//Factorial of a value
function factorial (value) {
    return factorialRec(value);
}


//Input: Integer
//Output: Integer
//Recursive function used to find the factorial
function factorialRec (value) {
    if(value === 0 || value === 1){
        return 1;
    }else{
        return value * factorialRec(value-1);
    }
}


//Input: Integer, Integer
//Output: Integer
//Solves an exponential equation, where value1 is the base value and value2 is the exponent
function exponent (value1, value2) {
    return value1 ** value2;
}


//Input: Integer, Integer
//Output: Integer
//Finds the modoulo of two values
function modulo (value1, value2) {
    return value1 % value2;
}


//Input: Integer
//Output: Integer
//Calculates the log2 for a value, with two decimals for brevity
function log2 (value) {
    return Math.log2(value).toFixed(2);
}


//Calculation functions

//Input: String
//Output: Integer
//The simpleCacluate is used in conjunction with the simpleKeyboard, and supports: +, -, *, /.
//Function takes a String, splits the input String into two values and a mathematical operator
//then calculates a answer based on these values
function simpleCalculate (input) {
    let value1 = '';
    let value2 = '';
    let operator = '';
    let firstFilled = false;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === '+') {
            operator = '+'
            firstFilled = true;
        } else if (input[i] === '-') {
            operator = '-'
            firstFilled = true;
        } else if (input[i] === '*') {
            operator = '*';
            firstFilled = true;
        } else if (input[i] === '/') {
            operator = '/';
            firstFilled = true;
        } else if (firstFilled && input[i] !== '=') {
            value2 += input[i];
        } else {
            value1 += input[i];
        }
    }
    
    const parsed1 = parseInt(value1);
    const parsed2 = parseInt(value2);

    if (operator === '+') {
        return sum(parsed1, parsed2);
    }
    if (operator === '-') {
        return minus(parsed1, parsed2);
    }
    if (operator === '*') {
        return multiply(parsed1, parsed2);
    }
    if (operator === '/') {
        return divide(parsed1, parsed2);
    }
}


//Input: String
//Output: Integer
//The advancedCacluate is used in conjunction with the advancedKeyboard, and supports: +, -, *, /, !, %, ^. log2.
//Function takes a String, splits the input String into two values and a mathematical operator
//then calculates a answer based on these values
function advancedCalculate (input) {
    let value1 = '';
    let value2 = '';
    let operator = '';
    let firstFilled = false;
    let containsDecimal = false;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === '+') {
            operator = '+'
            firstFilled = true;
        } else if (input[i] === '-') {
            operator = '-'
            firstFilled = true;
        } else if (input[i] === '*') {
            operator = '*';
            firstFilled = true;
        } else if (input[i] === '/') {
            operator = '/';
            firstFilled = true;
        } else if (input[i] === '!') {
            operator = '!'
            firstFilled = true;
        } else if (input[i] === '^') {
            operator = '^'
            firstFilled = true;
        }  else if (firstFilled && input[i] !== '=') {
            value2 += input[i];
        } else if (input[i] === '%') {
            operator = '%'
            firstFilled = true;
        } else if (input[i] === 'l') {
            operator = 'log2'
            i += 4;
            firstFilled = true;
        } else if (input[i] === '.') {
            value1 += input[i];
            containsDecimal = true;
        }
         else {
            value1 += input[i];
        }
    }

    let parsed1 = 0;
    let parsed2 = 0;
    
    if (containsDecimal) {
        parsed1 = parseFloat(value1);
        parsed2 = parseFloat(value2);
    } else {
        parsed1 = parseInt(value1);
        parsed2 = parseInt(value2);
    }

    if (operator === '+') {
        return sum(parsed1, parsed2);
    }
    if (operator === '-') {
        return minus(parsed1, parsed2);
    }
    if (operator === '*') {
        return multiply(parsed1, parsed2);
    }
    if (operator === '/') {
        return divide(parsed1, parsed2);
    }
    if (operator === '!') {
        return factorial(parsed1);
    }
    if (operator === '^') {
        return exponent(parsed1, parsed2);
    }
    if (operator === '%') {
        return modulo(parsed1, parsed2);
    }
    if (operator === 'log2') {
        return log2(parsed2);
    }
}

export {simpleCalculate, advancedCalculate};
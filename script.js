// TEST CASE
// 200 / 5 = 40 - 10 = 30.

// 0. Press "200"
// Expectation: Display shows 200
// Actual: works

// 1. Press "/"
// Expectation: Display still shows 200
// Actual: works

// 2. Press "5"
// Expectation: Display shows 5
// Actual: works

// 3. Press "="
// Expectation: Display shows 40
// Actual: works

// 4. Press "-"
// Expectation: Display still shows 40
// Actual: display shows 8



// 5. Press "10"
// Expectation: Display shows 10
// Actual: works

// 6. Press "="
// Expectation: Display shows 30
// Actual: display shows -2



const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator-keys');
const display = document.querySelector('.calculator-display');
const expressionDisplay = document.querySelector('.expression-display');
let firstOperand = null;
let operator = null;
let secondOperand = null;
let result = null;


keys.addEventListener('click', event => {
    const key = event.target;
    const keyValue = key.textContent;
    const { type } = key.dataset;

    if (type === 'number') {
        if (operator === null) {
          !firstOperand ? (firstOperand = keyValue) : (firstOperand += keyValue);
          display.textContent = firstOperand;
        } else {
          !secondOperand ? (secondOperand = keyValue) : (secondOperand += keyValue);
          display.textContent = secondOperand;
    }
}


if (type === 'operator') { 
    if (firstOperand && secondOperand)  {
        switch (operator)   {
            case '+':
                result = Number(firstOperand) + Number(secondOperand);
                display.textContent = result;
                break;
            case '-':
                result = Number(firstOperand) - Number(secondOperand);
                display.textContent = result;
                break;
            case '*':
                result = Number(firstOperand) * Number(secondOperand);
                display.textContent = result;    
                break;
            case '/':
                result = Number(firstOperand) / Number(secondOperand);
                display.textContent = result;
                break;
        }
        firstOperand = result;
        secondOperand = null;
        } 
        else if (!firstOperand && !secondOperand)    {
            alert('Enter a number before entering an operator.');
            operator = null;
        }
        operator = keyValue;
    }
});   
    

const equal = document.querySelector('.equal');
equal.addEventListener('click', event => {
    const key = event.target;
    const { type } = key.dataset;

    if (type === 'equal')   {
        switch (operator) {
            case '+':
                result = Number(firstOperand) + Number(secondOperand);
                display.textContent = result;
                break;
            case '-':
                result = Number(firstOperand) - Number(secondOperand);
                display.textContent = result;
                break;
            case '*':
                result = Number(firstOperand) * Number(secondOperand);
                display.textContent = result;    
                break;
            case '/':
                result = Number(firstOperand) / Number(secondOperand);
                display.textContent = result;
                break;
        }
    }
    firstOperand = result;
});
    

const clear = document.querySelector('.clear');
clear.addEventListener('click', event => {
    const key = event.target;
    const { type } = key.dataset;

    if (type === 'clear')   {
        display.textContent = '0';
    }
    firstOperand = null;
    secondOperand = null;
    operator = null;
    result = null;
});

    








// come back to this:
// TEST CASE
// Get alert to appear if ever operator is clicked before anything else.

// 0. Press "+"
// Expectation: Alert appears
// Actual: works

// 1. Without refreshing or doing anything else, press "-"
// Expectation: Alert appears again
// Actual: nothing happens











// PLAN:

// 0. Refactor to perform continuous functions.
// DONE!

// 1. How can you refactor "displays" section of CSS?

// 2. Get "&times;" working with the eval function somehow...

// 3. Add commas after zeros.

// 4. Include spaces before & after operators. 

// 5. Ensure the correct screenshot displays.

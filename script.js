let numbersNodeList = document.querySelectorAll(".number");
let numbers = Array.from(numbersNodeList);

let operatorsNodeList = document.querySelectorAll(".operator");
let operators = Array.from(operatorsNodeList);

let equalButton = document.querySelector("#equals");

let clearButton = document.querySelector("#clear");

let evaluated = document.querySelector("#evaluated");

let expression = document.querySelector("#expression");
expression.textContent = "";

let num1 = "";
let num2 = "";
let result;

let currOperator;
let operatorRead = false;

let equalsFlag = false;




for (let i = 0; i < numbers.length; i++) {
    
    numbers[i].addEventListener('click', () => {
        
        if (operatorRead === false) {
            num1 += numbers[i].textContent;
        }
        
        else if (operatorRead === true) {
            num2 += numbers[i].textContent;
        }
        
        expression.textContent = expression.textContent + numbers[i].textContent;


    });
}



for (let i = 0; i < operators.length; i++) {

    operators[i].addEventListener('click', () => {

        if (operatorRead === false || equalsFlag === true) {

            currOperator = operators[i].textContent;
            operatorRead = true;
            expression.textContent = num1 + " " + operators[i].textContent + " ";
            equalsFlag = false;

        }

        else if (operatorRead === true) {

            result = evaluate(num1, num2, currOperator);
            evaluated.textContent = "= " + result;
            num1 = result;
            num2 = "";
            currOperator = operators[i].textContent;
            expression.textContent = result + " " + operators[i].textContent + " ";

        }

    });
}



equalButton.addEventListener('click', () => {

    result = evaluate(num1, num2, currOperator);
    evaluated.textContent = "= " + result;
    num1 = result;
    num2 = "";
    equalsFlag = true;

});



clearButton.addEventListener('click', () => {
    
    evaluated.textContent = "";
    expression.textContent = "";
    equalsFlag = false;
    operatorRead = false;
    num1 = "";
    num2 = "";
    currOperator = "";

});



function evaluate(num1, num2, operator) {
    
    if (operator === "+") {
        return Number(num1) + Number(num2);
    }

    else if (operator === "-") {
        return Number(num1) - Number(num2);
    }

    else if (operator === "x") {
        return Number(num1) * Number(num2);
    }

    else if (operator === "/") {
        return Number(num1) / Number(num2);
    }
}

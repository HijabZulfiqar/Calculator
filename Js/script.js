
let screen = document.querySelector(".input-screen");
let btn = document.querySelectorAll(".btn");
const btnContainer = document.getElementById("#btn-container");


function operate(operator, num1, num2) {
    if (operator === "+") {
        return num1 + num2;
    }
    else if (operator === "-") {
        return num1-num2;
    }
    else if (operator === "*") {
        return num1 * num2;
    }
    else if (operator === "/") {
        return num1 / num2;
    }
   
}
let num1 = "";
let num2 = "";
let operator = "";
function addToDisplay(num) {
    document.querySelector(".input-screen").value += num;
}

function setOperator(operator) {
    let inputScreen = document.getElementById("input-screen");
   
    let currentVal = inputScreen.value;
    
    // If the current value on the input screen is not 0 and 
    // does not already contain an operator, then add the operator
    if (currentVal !== "0" && !currentVal.includes("+") 
        && !currentVal.includes("-") && !currentVal.includes("*") 
        && !currentVal.includes("/")) {
      inputScreen.value = currentVal + operator;
    } else if (currentVal.endsWith("+") || currentVal.endsWith("-") 
    || currentVal.endsWith("*") || currentVal.endsWith("/")) {
  inputScreen.value = currentVal.slice(0, -1) + operator;
}
  }



function add() {
    num1 = document.querySelector(".input-screen").value;
    operator = "+";
    setOperator(operator);
}
function subtract() {
    num1 = document.querySelector(".input-screen").value;
    operator = "-";
    setOperator(operator);


    
}
function multiply() {
    num1 = document.querySelector(".input-screen").value;
    operator = "*";
    setOperator(operator);
}
function divide() {
    num1 = document.querySelector(".input-screen").value;
    operator = "/";
    setOperator(operator);
}
function equals() {
    num2 = document.querySelector(".input-screen").value;

    num2=num2.slice(num2.indexOf(operator)+1,num2.length)
    console.log(num2)
    let result = operate(operator, parseInt(num1), parseInt(num2));
    
    document.querySelector(".input-screen").value = result;
    num1 = result;
   
    num2 = "";
    operator = "";
}
function clearDisplay() {
    document.querySelector(".input-screen").value = "";
    num1 = "";
    num2 = "";
    operator = "";
}

function reset() {
    num1 = "";
    num2 = "";
    operator = "";
    document.querySelector(".input-screen").value = "";
  }
    
      
  function deleteNumber() {
    let inputScreen = document.getElementById("input-screen");
    let currentVal = inputScreen.value;
    inputScreen.value = currentVal.slice(0, -1);
}

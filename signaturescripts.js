//variables for calculator
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const result = document.querySelector("#result");

const add =document.querySelector("#add");

add.onclick = function(){
    result.value = parseFloat(num1.value) + parseFloat(num2.value);
};

const subtract =document.querySelector("#subtract");

subtract.onclick = function(){
    result.value = parseFloat(num1.value) + parseFloat(num2.value);
};

const multiply =document.querySelector("#multiply");

multiply.onclick = function(){
    result.value = parseFloat(num1.value) + parseFloat(num2.value);
};
const divide =document.querySelector("#divide");

divide.onclick = function(){
    result.value = parseFloat(num1.value) + parseFloat(num2.value);
};

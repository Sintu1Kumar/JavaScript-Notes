// calculator

let num1 = Number(prompt("Enter the First Number"));
let num2 = Number(prompt("Enter the Second Number"));
let symbol = prompt("Enter the operation symbol : + - * / % **");

// Switch case
let result = 0;
switch(symbol){
    case '+' :  result = num1 + num2;
                document.getElementById('demo').innerHTML = (result);
                break;
    case '-' :  result = num1 - num2;
                document.getElementById('demo').innerHTML = (result);
                break;
    case '*' :  result = num1 * num2;
                document.getElementById('demo').innerHTML = (result);
                break;
    case '/' :  result = num1 / num2;
                document.getElementById('demo').innerHTML = (result);
                break;
    case '%' :  result = num1 % num2;
                document.getElementById('demo').innerHTML = (result);
                break;
    case '**' :  result = num1 ** num2;
                document.getElementById('demo').innerHTML = (result);
                break;
}
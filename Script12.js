// let text = document.getElementById('demo');
// console.log("Welcome to Script 12")

//* function are also first class citizen





function sum(a, b){
    printTheseValues(a, b);
    let sum = a+b;
    return sum;
}

function printTheseValues(a, b){
    console.log(a);
    console.log(b);
}

let num1 = 90;
let num2 = 100;
let sum1 = sum(num1, num2);
console.log(sum1);
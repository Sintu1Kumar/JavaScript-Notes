let text = document.getElementById('demo');
let text1 = document.getElementById('demo1');

// for(init; condition; inc/dec);

// Ques:- check the number is prime number;
// let num = Number(prompt("Enter the number"));
// let flag = false;

// for(i=2;i<num;i++){
//     if(num%i==0){
//         flag = true;
//     }
// }

// if(flag == true){
//     console.log(num +" is not a prime number")
// }
// else{
//     console.log(num +" is a prime number")
// }


//  Fibonacci series
// let num = Number(prompt("Enter the Number"));
// let a = 0;
// let b = 1;
// let result;
// console.log(a);
// console.log(b);
// for (i = 3; i < num; i++) {
//     result = a + b;
//     // console.log(result);
//     document.getElementById('demo').innerHTML += result + "<br/>";
//     a = b;
//     b = result;
// };


// Calculator :-
// by using do while loop:-
// let Choice;
// do{
// let num1 = Number(prompt("Enter First Number"));
// let symble = prompt("Enter the Symble:- +, -, *, /");
// let num2 = Number(prompt("Enter Second Number"));
// switch(symble){
//     case '+': alert(num1 + num2);
//             break;
//     case '-': alert(num1 - num2);
//             break;
//     case '*': alert(num1 * num2);
//             break;
//     case '/': alert(num1 / num2);
//             break;
//     default : alert("Invalid Choice")
// }
//     Choice = prompt("Enter 1 for continue")
// }
// while(Choice == '1'){
//     text.innerHTML = ("Okey this is it");
// }

// By using for loop:-
// for (let choice = '1'; choice == '1'; choice = prompt('Enter 1 to continue')) {
    let num1 = Number(prompt("Enter First Number"));
    let symble = prompt("Enter the Symble:- +, -, *, /");
    let num2 = Number(prompt("Enter Second Number"));
    switch (symble) {
        case '+': alert(num1 + num2);
            break;
        case '-': alert(num1 - num2);
            break;
        case '*': alert(num1 * num2);
            break;
        case '/': alert(num1 / num2);
            break;
        default: alert("Invalid Choice")
    };
// };

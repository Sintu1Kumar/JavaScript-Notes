console.log("i am Sintu Kumar");
let a = 12;
console.log(a);

let name = prompt("enter your name");
console.log(name);

let b = 90;
let c = 100;
let d = 10;

let result = a < b && a < c;
console.log("is a the less among three of the number : " + result);

let e = Number(prompt("Enter the number"));

console.log("Enter number is odd :", e % 2 != 0);

console.log(
  "Number is divisible by both(3 and 5) : ",
  e % 3 == 0 && e % 5 == 0
);

console.log(e % 2 == 0 ? "Number is Even" : "Number is odd");

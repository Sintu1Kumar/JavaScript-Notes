// Conditional statement

// if-else
// falsy values:- it is represent the boolian falsy value
// expression = evalute the statement then return the single value.
// statement = all line is called the statement.
let c = 5 + 2 + 9 + 7 + -6;

let a = 5 + 6 + 38 + 5 - 8;
let b = 8 + 5 + 85 + 5 + 9 / 5;
if (a < b) {
  console.log("This is my first statement : " + a);
} else {
  console.log("This is my second statement : " + b);
}

let d = Number(prompt("Enter the Number"));
if (d % 2 == 0) {
  console.log("Number is Even");
  document.getElementById("demo").innerHTML = "Number is Even";
} else {
  console.log("Number is Odd");
  document.getElementById("demo").innerHTML = "Number is odd";
}

let e = Number(prompt("Enter the Number"));
if (e % 3 == 0 && e % 4 == 0 && e % 5 == 0) {
  document.getElementById("demo").innerHTML =
    "Number is divisible by 3, 4 and 5";
} else {
  document.getElementById("demo").innerHTML =
    "Number is not divisible by 3, 4 and 5";
}

let f = Number(prompt("Enter trangle side 1"));
let g = Number(prompt("Enter trangle side 2"));
let h = Number(prompt("Enter trangle side 3"));

if (f == g && f == h) {
  document.getElementById("demo").innerHTML = "equilateral trangle";
} else if (f != g && f != h && g != h) {
  document.getElementById("demo").innerHTML = "scaler trangle";
} else {
  document.getElementById("demo").innerHTML = "isosceles trangle";
}

let i = Number(prompt("Enter trangle side 1"));
let j = Number(prompt("Enter trangle side 2"));
let k = Number(prompt("Enter trangle side 3"));

if (i + j >= k && i + k >= j && j + k >= i) {
  document.getElementById("demo").innerHTML = "Trangle is valid";
} else {
  document.getElementById("demo").innerHTML = "Trangle is not valid";
}

// Q1. check the trangle make or not.
let a = Number(prompt("Enter trangle side 1"));
let b = Number(prompt("Enter trangle side 2"));
let c = Number(prompt("Enter trangle side 3"));

if (a + b > c && a + c > b && b + c > a) {
    document.getElementById('demo').innerHTML = ("Trangle can be formed")
    if (a == b && a == c) {
        document.getElementById('demo1').innerHTML = ("equilateral trangle")
    }
    if (a != b && a != c && b != c) {
        document.getElementById('demo1').innerHTML = ("scaler trangle")
    }
    else {
        document.getElementById('demo1').innerHTML = ("isosceles trangle")
    }
}
else {
    document.getElementById('demo').innerHTML = ("Trangle can not be formed")
}

// console.log(Number(false));
// console.log(parseInt(false));


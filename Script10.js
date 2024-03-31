// Write a JS code to print a pattern using for loop 
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 
// 1 2 3 4 5 6 
// 1 2 3 4 5 6 7 
// 1 2 3 4 5 6 7 8

for(let i=1; i <=8; i++){
    let str = "";
    for(let j=1; j<=i; j++){
        str += j + " ";
    }
    console.log(str);
}

let num = 10;
let a = 0;
let b = 1;
let result;
console.log(a);
console.log(b);
for (i = 3; i <= num; i++) {
    result = a + b;
    console.log(result);
    a = b;
    b = result;
};





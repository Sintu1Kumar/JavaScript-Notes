let text = document.getElementById("demo");

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

let num = "";
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    num += arr[i][j] + "..";
  }
  num += "\n";
}
text.innerHTML = num;



// Q5. Write a JS code to print a 2D array
let arr4 = [
  [1, 2, 6],
  [3, 4, 8],
  [5, 6, 9],
];

let num1 = "[";
for (let i = 0; i < arr4.length; i++) {
  (i < 1) ? (num1 += "[ ") : (num1 += " [ ");
  for (let j = 0; j < arr4[i].length; j++) {
    num1 += arr4[i][j] + " ";
  }
  if (i != arr4.length - 1) {
    num1 += "]" + "\n";
  } else {
    num1 += "]]";
  }
}
text.innerHTML = (num1);
console.log(num1)

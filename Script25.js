for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 5000 * i);
}

let i = 0;
let id = setInterval(() => {
  i = i + 1;
  if (i === 5) {
    clearInterval(id);
  }
  console.log(i);
}, 2000);

let id1 = setTimeout(() => {
  console.log("hello world");
}, 10000);

let a = prompt("get value");
if (a == 10) {
  clearTimeout(id1);
}

console.log("script 25");

let b = 90;

let setID = setTimeout(() => {
  console.log(a + 10);
  return 10;
}, 5000);

let setID2 = setTimeout(() => {
  console.log(a + 10);
  return 10;
}, 5000);

console.log(setID);
console.log(setID2);

let id = setInterval(function () {
  console.log("Hello World");
}, 3000);

setTimeout(function () {
  console.log("Hello World setting out");
  clearInterval(id);
}, 9000);

setImmediate();
console.log("async functions ,event loop");
let a = 90;
let c = 23 + 45;
console.log("print this line");
let print = function () {
  console.log("Welcome to script 24");
};

// web => timer api =>connect
console.log("hello world");
// async => when it does not
// follow the exact order of execution

setTimeout(function () {
  console.log("iam running after 4 seconds");
}, 4000);
console.log("i am the second statement");

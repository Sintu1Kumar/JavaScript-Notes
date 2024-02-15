//promises
//promise => //pending
//fulfilled
//rejected

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let a = 5;
    if (a > 5) {
      reject("this function has failed");
    } else {
      resolve("this function has resolved");
    }
  }, 5000);
});
// console.log(promise)

promise
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });

console.log(promise, "+++++++++++");

// iife => immediately invoked function ecpression

let a =
  90 *
  89(function (a, b, c) {
    console.log("hello world");
    console.log(a + b);
    console.log(c);
  })(10, 20, "ram");

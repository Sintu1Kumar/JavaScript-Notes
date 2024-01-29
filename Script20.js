console.log("Welcome to Script-20");

// Question:-
let a = (...arr) => {
    let _b = (x, y) => (!y ? x : a(y, x % y));
    return [...arr].reduce((a, b) => _b(a, b));
  }
  console.log(`The Common factor = `,(a(36, 156)));


// constructor function => create and object of
function person() {
  this.name = "reena";
  this.age = 28;
  this.phone = "9876543210";
  this.getInfo = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.phone);
  };
}

let obj3 = new person();
let obj4 = new person();
obj4.phone = "543216789";
obj4.name = "sintu";

console.log(obj3);
console.log(obj4);

function person(name, age, phone) {
  this.name = name;
  this.age = age;
  this.phone = phone;
  this.getInfo = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.phone);
  };
}

let obj5 = new person("sintu", 25, "54321");
let obj6 = new person("mohan", 30, "987654");
console.log(obj5, obj6);

let obj = {
  name: "tina",
  age: 25,
  phone: "1234567890",
  getInfo: function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.phone);
  },
};

let obj2 = obj;
obj2.name = "reena";

console.log(obj);
console.log(obj2);

let str = ["sintu", "mohit", "sohan", "mohan"];
// sort str = length of string

let result = str.sort((a, b) => {
  if (a.length > b.length) {
    return 1;
  } else if (a.length === b.length) {
    return 0;
  } else {
    return -1;
  }
});
console.log(result);

// sort = alphabetical order
let result_a = str.sort();
console.log(result_a);

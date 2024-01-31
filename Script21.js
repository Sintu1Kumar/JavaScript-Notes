//* let, ver and const keyboard
// var => functional scope
// let and const => block scope

// class
class Person2{
  constructor(a, b, c) {
    this.name = a;
    this.phone = b;
    this.age = c;
    this.get1 = function () {
      console.log("inside constructor function");
    };
  }
  get2 = function () {
    console.log("outside constructor function");
  };
}

let obj = new Person2("nita", "234234", 34);
console.log(obj);
let obj5 = new Person2("tina", "234234", 54);
console.log(obj5);

let arr = [1, 2, 3, 4];
console.log(arr);

function Account(name, phone, age) {
  this.name = name;
  this.phone = phone;
  this.age = age;

  this.getInfo = function () {
    console.log("Account info of object");
    console.log(this.name + "===" + this.phone + "===" + this.age);
  };
  this.printInfo = function () {
    console.log("Account info of object");
    console.log(this.name + "===" + this.phone + "===" + this.age);
  };
}

function Person(name, phone, age) {
  this.name = name;
  this.phone = phone;
  this.age = age;

  this.getInfo = function () {
    console.log("info of object");
    console.log(this.name + "===" + this.phone + "===" + this.age);
  };
}

let obj1 = new Person("ritu", "3948729", 34);
Object.prototype.getInfo2 = () => {
  console.log("hi");
};
obj1.getInfo2();

let obj2 = new Account("tina", "978678", 98);
obj2.getInfo2();

obj1.getInfo();

let obj3 = new Person("naveen", "34829384", 45);
let obj4 = new Person("ravi", "234982934", 78);

console.log(obj1);
console.log(Person instanceof Object);

console.log(num);

// functional scope
// var => fnctional scope
// let or const  => block
function print() {
  // hoisting scope(block, functional)
  {
    var a = 90;
    console.log(a);
    let b = 80;
    console.log(b);
  }
  console.log(a);
  console.log(b);
  console.log(num);
  var num = 0;
  console.log(a);
  console.log(num);
  //block scope
  {
    console.log(num);
    var num = 10;
  }
  console.log(num);
}
print();

// var, let , const

console.log(num);
var num = 90;

console.log(num2); //temporal dead zone (variable is not visible)

let num2;
console.log(num2);

const num3 = 90;
console.log(num3);

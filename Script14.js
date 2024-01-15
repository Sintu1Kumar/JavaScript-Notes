console.log("Welcome to Script 14");
let text = document.getElementById('demo');

// function read(){
//     console.log("Hello World")
// };

// console.log(read)
// read();

// let print = function read(){
//         console.log("Hello World")
//     };

//* arrow function
// let print = ()=>{
//     console.log("Wello World");
//     console.log("Sintu Kumar")
// }

// print();
// console.log(print);

// if you get gingle instraction then not put the curly bracket;
// let getwish = name=> console.log("Happy Birthday " + name);
// getwish("Sintu");

// let add = (a=0, b)=>{
//     console.log(a+b);
// }
// add(0,12);

// let add = (a, b)=> console.log(a + b);
// add(12,25);

// let add = (a, b)=>{
//     console.log(a + b);
// }
// add(10, 23);

//* this keybard
// arrow function accesses the window object but the normal function accesses the associated object.
// let obj = {
//     name: "Sintu",
//     Phone: "123456",
//     obj1: {
//         name:"mohan",
//         Phone:"54321",
//         fun: function(){
//             console.log(this);
//             console.log(this.name);
//             console.log(this.Phone);
//         }
//     }
// }

// obj.obj1.fun();


let name = "Kumar";
let phone = "123456789";

let obj1 = { Name: "abc", Marks: 300 };
let obj2 = { Name: "xyz", Marks: 400 };
let obj3 = { Name: "pqr", Marks: 500 };

function getInfo(){
    console.log(this.Name+"  "+ this.Marks)
}

let gI1 = getInfo.bind(obj1)
gI1()

let gI2 = getInfo.bind(obj2)
gI2()

let gI3 = getInfo.bind(obj3)
gI3()

getInfo()

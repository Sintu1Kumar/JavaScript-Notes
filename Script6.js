// console.log("Arrays Topic");

// Array:- collection of data in a single unit is called as array.
// Array index start from with 0;

// let studentNames = ["Sintu", "Sohan", "Mohit", "Ali"];
// for loop
// for(let i=0; i<studentNames.length; i++){
//     console.log(studentNames[i]);
// }

// for of loop
// for(let ele of studentNames){
//     ele = ele + " Kumar" 
//     console.log(ele);
// }


console.log("Object Topic");
// Different:- array key is this fixed(0,1,2) but object key diffened by the user.

let obj = {Name:"Sintu Kumar", RollNumber:1, PhoneNumber:9540317425, Marks:[40, 50, 60, 70]};
// {Hindi:45, Math:65, Sanskrit:85, Science:80}

// for in loop
// for(let key in obj){
//     console.log(obj[key]);    
// }

// for of loop
// let Total = 0;
// for(let Marks of obj.Marks){
//     Total = Total + Marks;
// }
// console.log(obj.Name + " has got "+Total +" Marks")

// for loop
// let sum = 0;
// for(let i=0; i<obj.Marks.length; i++){
//     sum += obj.Marks[i];
// }
// console.log(obj.Name + " has got "+sum +" Marks")
// console.log(obj.Marks)

// for in loop
let sum = 0;
for (let val in obj.Marks){
    sum = sum + obj.Marks[val];
}
console.log(obj.Name + " has got "+sum +" Marks")

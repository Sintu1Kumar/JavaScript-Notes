console.log("Script 7");

// condition: given that the array going to be only with one level nesting

// let arr = [20, "sintu", 45, false, {}];
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i] == "number"){
//         sum += arr[i];
//     }
// }
// console.log(sum);


// Nesting
// let arr = [20, "sintu", 45, false, [50, "Kumar", 60, true], {Lname:"Kumar", Rollno:25}];
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i] == "number"){
//         sum += arr[i];
//     }
//     else if(typeof arr[i] == "object"){
//         for(let num in arr[i]){
//             if(typeof arr[num] == "number"){
//                 sum += arr[num];
//             }
//         }
//     }
// }
// console.log(sum);


// Function
function name(){
    console.log("Sintu Kumar")
}

for(let i=0; i<5; i++){
    name();
}


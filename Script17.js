console.log("welocme to script 17");
let text = document.getElementById("demo");



// Q=> suppose you have a string array 
//     find out the length 

let names =["rita", "sita", "ram","shyam", "laxman"]

// function print(ele){
//     console.log(ele+" " +ele.length)
// }

// names.forEach(function(ele){
//     console.log(ele+" " +ele.length)
// })
names.forEach((ele)=>{
    console.log(ele+" " +ele.length)
})

// let num = [1,2,3,4,5,6,7,8,9]

//* traversing
// function evenOdd(ele){
//     if(ele%2==0){
//         console.log(ele+ " is even")
//     }
//     else{
//         console.log(ele+ " is odd")
//     }
// }

// num.forEach(evenOdd)



// let arr = names.splice(1, 2,"abc","pqr","xyz");
// console.log(names)
// console.log(arr)



// end index => excluded index 
// start index => included index
// let arr= names.slice(1,4)
// console.log(arr)

// let arr2 = names.slice(-5,-2)
// console.log(arr2)


// console.log(names)

// let arr= [1,2,3,4,5,6,7,8,9]

// let res= arr.slice(-6, -2);
// res[2]=20
// console.log(res)

// console.log(arr)
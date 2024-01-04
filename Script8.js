let text = document.getElementById('demo');

// let arr1 = [1, 0, 2, 3, 4];
// let arr2 = [3, 5, 6, 7,8,13];

// Add the first and second arr.
// if(arr1.length<arr2.length){
//     for(let i=0; i<arr1.length; i++){
//         arr2[i] = arr2[i] + arr1[i];
//     }
//     console.log(arr2);
//     text.innerHTML = arr2;
// }
// else{
//     for(let i=0; i<arr2.length; i++){
//         arr1[i] = arr1[i] + arr2[i];
//     }
//     console.log(arr1)
//     text.innerHTML = arr1;
// }


// Q. sum of the number;
// let num = 984283;
// let  sum =0
// while(num!=0){
//     let digit = num%10;
//     sum=sum+digit;
//     num =Math.floor(num/10);
// }
// console.log(sum);


// Q. find the first Number;
// let num = 984283;
// while(num>10){  
//     num =Math.floor(num/10)
// }

// convert in array
// let str = String(num);
// str1 = str.split("")
// console.log(str1[0]);


// Q. Reverse the Number;
let num = 84219;
let reverse=0;
while(num!=0){
    let digit = num%10;
    reverse = reverse*10+digit;
    num =Math.floor(num/10)
}
console.log(reverse);

// let reverse = str1.reverse();
// reverse = reverse.join("")
// console.log(reverse);





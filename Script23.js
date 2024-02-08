let str= "         first is a place is    ";
console.log(typeof str)

console.log(str.length)
console.log(str.charAt(2))
console.log(str.startsWith("is",6))
console.log(str.endsWith("st"))
console.log(str.substring(3,6))
console.log(str.slice(4 ,8))
console.log(str.charCodeAt(3))
console.log(str.replace("is","this"))
console.log(str.replaceAll("is","this"))
let strarr = str.split(" ")
// regex => make 

console.log(strarr)
console.log(str.trim())
console.log(str.trimEnd())
console.log(str.trimStart())


console.log("helllo world")

let str1 = "this is my first string"
let str2 = 'this is my second string'

console.log(str1)
console.log(str2)


let name ="tina"
let age =89;

let wish1 = "happy birthday " + name +" on your "+age+"th birthday"
console.log(wish1)
//template string

let wish = `happy birthday ${name} on your ${age}th birthday`

console.log(wish)



let str3 =`this is my first 
this is my second line`;
console.log(str3)

 let str4= "this is first line \n kdhfdfjkshfjdj"
console.log(str4)
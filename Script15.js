//* abc (apply bind and call)

// a=> apply func
// b=> bind func
// c=> call func


let student1 ={
    name:"reena",
    roll:45,
    fees:234234,
    marks:344
}

let student2 ={
    name:"tina",
    roll:42,
    fees:234234,
    marks:341
    
}

let getInfo = function(a,b,c,d){
                    console.log(a,b,c)
                    console.log(this)
                    console.log(this.name+"--"+this.roll+"--"+this.fees+"--"+this.marks );
                }
getInfo() 

getInfo([1,2,3,4],"hindi", "english","maths")

getInfo.call(student1,[1,2,3,4],"hindi", "english","maths")
getInfo.apply(student2,[[1,2,34],"hindi1", "english1","maths1"])

let getInfoSt1 = getInfo.bind(student1)
let getInfoSt2 = getInfo.bind(student2)
getInfoSt1()
getInfoSt2()


function doSomething(fn){
    console.log("Hello World")
    console.log(fn)
    fn();
}
function eat(){
    console.log("lets eat something")
    return 10;
}
function read(){
    console.log("i read a lot of books")
}

doSomething(eat)
doSomething(read)
const prompt = require('prompt-sync')()

/*
function avg(x,y){
    return (x+y)/2
}
*/  
let avg = (a,b)=>{
    return (a+b)/2
}// advanced way of using function using arrow function rather than putting the command FUNCTION...

let a = prompt("Enter first value: ")
a=Number.parseInt(a)
let b = prompt("Enter the second value: ")
b=Number.parseInt(b)
console.log("Average of "+ a +" and "+b + " is ", avg(a,b) )
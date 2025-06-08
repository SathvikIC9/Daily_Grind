const prompt= require('prompt-sync')();

/*
let a = prompt("Enter a number: ")
a = Number.parseInt(a)
let i = 0
do{
console.log(i)
i++
}while (i < a)


*/   
/* 
do while loop runs where the condition is 
checked after the loop executes.... 
also it executes the value atleast once
before executing the loop.
*/

//Sample program

let a = prompt("Enter a number: ")
a = Number.parseInt(a)
let i = 10
do{
    console.log(i)
}while(i<a)
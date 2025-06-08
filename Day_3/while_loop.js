const prompt= require('prompt-sync')();

/*
let a = prompt("Enter a number: ")
a = Number.parseInt(a)
let i = 0

while (i < a){
    console.log(i)
    i++
}

*/
/* 
while loop runs where the condition is 
checked first then the loop executes...
meanwhile the loop doesnt execute the value 
as the condition fails in the start
*/



let a = prompt("Enter a number: ")
a = Number.parseInt(a)
let i = a-2
while(i<a){
    console.log(i)
    i++
}

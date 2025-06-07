// Write a programme to explain the usecase of ternary operator 
/* A ternary operator is a shorthand for a simple if-else statement. 
It is used to assign a value to a variable based on a condition.
*/
const prompt=require('prompt-sync')()
let age=prompt("Enter your age:")
age = Number.parseInt(age)
let a = age >= 18 ? console.log("You are eligible") : console.log("You are a minor")

//Write a Js Programme to find weather the given number is divisible by 2 and 3

const prompt= require('prompt-sync')()
let a = prompt("Enter a number You want to check: ")
a = Number.parseInt(a)
if(a%2 ==0 && a%3==0){
    console.log("The number is divisible by both 2 and 3")
}
else{
    console.log("Not divisible by both 2 and 3")
}


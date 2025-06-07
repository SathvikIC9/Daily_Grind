//Write a Js Programme to find weather the given number is divisible either by 2 or 3 


const prompt= require('prompt-sync')()
let a = prompt("Enter a number You want to check: ")
a = Number.parseInt(a)

if (a%2 ==0 && a%3!=0){
    console.log("Divisible only by 2 ")
}
else if (a%2 !=0 && a%3==0){
    console.log("Divisible only by 3 ")
}
else {
    console.log("Neither 2 nor 3 ")
}
//Create an array of numbers where user gives the input and print the array 
const prompt = require('prompt-sync')()
let n = prompt('Enter the number of elements: ')

let a = []
let i = 0
while(i < n){
    let num = prompt('Enter the number: ')
    let b = a.push(num)
    i++
}
console.log(a)


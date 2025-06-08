const prompt = require('prompt-sync')()

let mul = 1
let n = prompt("Enter a Number: ")
n = Number.parseInt(n)
for(let i = 1;i <=n;i++){
    mul *= i
}
console.log("The factorial of the number " + n + " is " + mul)
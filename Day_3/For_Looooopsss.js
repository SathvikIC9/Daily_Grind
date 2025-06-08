const prompt = require('prompt-sync')()
let n = prompt("Enter a number: ")
n = Number.parseInt(n)



// for (let i = 0;i<n+1;i++){
//     console.log(i+1)
// } this helps us to print the value of i outside the loop 



for (let i = 0;i<n+1;i++){
    console.log(i+1)
}
// console.log(i) can only be used when the for loop has var in it .. var allows the usage of i globally means the value of i can be printed outside the loop...but when you are using let then it cant be used....
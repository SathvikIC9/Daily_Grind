const prompt=require('prompt-sync')()

let sum = 0
let a = prompt("Enter the number: ")
a = Number.parseInt(a)
for (let i = 0;i<a;i++){
    sum +=(i+1)
}
console.log("The sum of first "+ a + " Numbers is "+ sum)
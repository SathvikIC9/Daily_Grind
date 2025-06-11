//Add the elements to array till the number 0 is added
const prompt = require('prompt-sync')()

let a = []
let num 
while (true){
    num = prompt("Enter a number: ")
    if (num == 0 ){
        break
    }
    else{
        a.push(num)
    }
}
console.log(a)
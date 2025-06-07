//Demonstrate the use of switch case in JS programme
const prompt=require('prompt-sync')()

let age = prompt("Enter Your Age: ")
age = Number.parseInt(age)

switch(age) {
    case 11 :
        console.log("You are 11 years old");
        break
    case 12:
        console.log("You are 12 years old");
        break
    case 13:
        console.log("You are 13 years old");
        break
    case 14:
        console.log("You are 14 years old");
        break
    case 15:
        console.log("You are 15 years old");
        break
    default:
        console.log("You are not Speacial")
}
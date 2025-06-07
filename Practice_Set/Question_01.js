//Use a logical operator to find weather the age of a person lies between 10 and 20 ..
const prompt = require('prompt-sync')()

let age = prompt("Enter Your age: ")
if (age<0){
    alert("Invalid age")
}
else if (age>=10 && age<=20){
    console.log("Marechi!...The desired one")
}
else{
    console.log("Sorry, you are not Marechi the desired one")
}
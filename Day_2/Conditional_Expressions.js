const prompt = require("prompt-sync")()

let a = prompt("Enter Your Age: ")
a = Number.parseInt(a)
if(a<0){
    alert("This is an Invalid age.")
}
else if(a <= 9 && a>0) {
    console.log("You dont need to learn anything now...Chill")
}
else if (a<18 && a>=10) {
    console.log("You are an Adult now...Good Luck")
}
else {
    console.log("You are eligible.")
}
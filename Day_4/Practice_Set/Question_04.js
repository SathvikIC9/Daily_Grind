// Extract the amount in this string
let a = "I have $100.00";
let amount = a.slice("I have ".length)
console.log(amount); // Outputs: $100.00
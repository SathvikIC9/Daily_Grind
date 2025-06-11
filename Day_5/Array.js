let a = [90,89,88,98]
console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
a[4]= 'harry'
console.log(a[4])
console.log('The length of the array is '+a.length)
console.log(typeof(a))

// Quick Quiz

let b = a.length
for (let i = 0; i < b; i++) {
    console.log(a[i])
}
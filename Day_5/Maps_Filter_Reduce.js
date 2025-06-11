// array map method
let a = [1,3,2,4,5]
a.map((value)=>{
    // console.log(value)
})

//array filetr method
let b = [34,45,76,89]
let c = b.filter((s)=>{
    return s<70
})
// console.log(c)
let h = c.map((value)=>{
    // console.log(value)
})

// Array reduce method

let d = [1,2,3,4,5]
let e = d.reduce((v1,v2)=>{
    return v1*v2
})
console.log(e)
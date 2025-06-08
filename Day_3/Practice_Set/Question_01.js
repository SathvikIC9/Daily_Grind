let obj ={
    'harry':90,
    'lorry':85,
    'lily':95
}
for (let i = 0; i<Object.keys(obj).length;i++){
    console.log("Marks of " + Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]])

}
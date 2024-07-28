console.log("IG we won't stop xD");

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(400,90,56,546,4568));


// Handling objects in functions
const user={
    userName:"Rohan",
    userId:"amylase_69"
}

function handleObject(getObject){
    const a=`The username is ${getObject.userName} and the userId is ${getObject.userId}.`
    return console.log(a);
}

handleObject(user)
handleObject({
    userName:"sayan",
    userId:"sayan_63"
})

const myArr=[100,200,300,400,500]

function newArray(getArray){
    return getArray[3]
}

console.log(newArray([12,546,132,564,156,64,651,234,798]))
console.log(newArray(myArr));






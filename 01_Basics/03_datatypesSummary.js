let id=Symbol('123')
let anotherId=Symbol('123')

console.log(id == anotherId);

let realName="Pete Mitchel"
let anotherName=realName
anotherName="goose henry"

console.log(anotherName);
console.log(realName);

let userOne = {
    email:"magma@amylase",
    upi:8795897
}

let userTwo=userOne
userTwo.email="magma@gmail.com"

console.log(userOne);
console.log(userTwo);

console.log(userOne.email);
console.log(userTwo.email);
console.log("Ah shit!!! here we go again");
console.log("Less go ojects");
const mySymbol= Symbol("key")

const myUser={
    name:"Rohan",
    age:20,
    [mySymbol]:"myKey",
    location:"Sonagachi",
    email:"rohanggogle.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Friday"]
}

// console.log(myUser);
// console.log(myUser["email"]);
// console.log(myUser.isLoggedIn);
// console.log(myUser[mySymbol]);

myUser.mySymbol="key1"
console.log(myUser);
myUser.age=69
console.log(myUser);
// Object.freeze(myUser)
myUser.email="sayan@google.com"
console.log(myUser.email);

myUser.greeting=function(){
    console.log("Hello user...how r u?");
}

console.log(myUser.greeting());

myUser.greeting2=function(){
    console.log(`Hello User,${this.name} and i guess ur age is ${this.age}!!!`);
}

console.log(myUser.greeting2());
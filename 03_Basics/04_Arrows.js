console.log("Ah yeah....back after a few hectic days");
console.log("Lets gooo!!!!!");

const user={
    userName:"Rohan",
    userId:"rohan1234",

    welcomeMessage: function(){
        console.log(`${this.userName},welcome to the website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// console.log(user.userName);
// user.userName = "Sayan"
// user.welcomeMessage()

// console.log(this);

const coffee =  () => {
    let username = "hitesh"
    console.log(this);
}

coffee()

// const addTwo= (num1,num2) =>{
//     return num1+num2
// } 

// console.log(addTwo(8,98));
// addTwo(78,45)

// const addTwo=(num1,num2) => (num1+num2)

// console.log(addTwo(5,6));

const addTwo=(num1,num2) => ({username:"Rohan"})


console.log(addTwo(5,6))









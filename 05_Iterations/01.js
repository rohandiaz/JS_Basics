console.log("Ah shit,,,,we r back again!!!");


for (let i = 1; i <= 5; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 1; i <=5; i++) {
    // console.log(`The value of outer loop is ${i}`);
    for (let j = 0; j <=10; j++) {
        // console.log(`The value of inner loop is ${j}`);
        // console.log(i+"/"+j+'='+(i/j));
        
    }
    
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
    
}

for (let i = 0; i < 20; i++) {
    const element = i;
    if (i>12) {
        console.log("Wont print the other values");
        break
    }
    console.log(`Value of i is ${i}`);
    
}



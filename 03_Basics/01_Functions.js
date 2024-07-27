console.log("Ahh shit..firse agay apan");

function myName(username="jeet"){
    if(username==undefined){
        console.log("Please enter a username");
        return
    }
    let name=`${username} is my name!!!`
    return name
}

name1=myName("Sanjhdiya")
console.log(name1);

function product(num1,num2){
    let prod=console.log("The product of the 2 nos is:",num1*num2);
    return prod
}

const result=product(6,7)




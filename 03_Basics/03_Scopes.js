// console.log("Aur kitna yaar...ab to rahem kha");
// console.log("ROhan");

let a=400

if(true){
    const a=30
    const b=40
    // console.log(a);
}
// console.log(a);

function one(){
    const username="rohan"
        function two(){
            const website="netflix"
            console.log(username);
        }
        // console.log(website);
        // two()
}

one()

console.log(addOne(10));
function addOne(num){
    return num+1
}

// console.log(addTwo(6)); it cant be called above the function
const addTwo=function(num){
    return num+2
}
console.log(addTwo(6));

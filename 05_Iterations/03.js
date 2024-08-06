console.log("No cant take it anymore");

const arr=[1, 2, 3, 4, 5, 6,"Rohan"]

for (const i of arr) {
    // console.log(i);
    
}

const greetings = "Hello world everyone!!!"
for (const greet of greetings) {
    // if(greet===" ") continue;
    // console.log(`Each char is ${greet}`)
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('AUS',"Australia")
map.set('IN', "India")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-',value);
    
}

const myObject={
    game1: 'NFS',
    game2: 'Spiderman',
    game3: 'GTA 6'
}

// for (const [key] of myObject) {
//     console.log(key);
// }
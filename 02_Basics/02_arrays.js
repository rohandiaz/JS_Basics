const footballers=["Messi","Ronaldo","Zidane"]
const cricketers=["kohli","dhoni","rohit"]

// console.log(footballers);
// console.log(cricketers);

// footballers.push(cricketers)
// console.log(footballers);

const players=footballers.concat(cricketers)
console.log(players);

const newPlayers=[...footballers,...cricketers]
console.log(newPlayers);

const array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
console.log(array);

const anotherArr=array.flat(Infinity)
console.log(anotherArr);

console.log(Array.isArray(footballers))
console.log(Array.from("Rohan"))

const score1=69
const score2=63
const score3=79

console.log(Array.of(score1,score2,score3));
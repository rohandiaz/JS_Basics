console.log("Lets go");

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNos=myNumbers
        .map((num)=> num+30)
        .map((num)=> num-10)
        .filter((num)=> num>=16)

console.log(newNos);


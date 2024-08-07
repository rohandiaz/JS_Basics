console.log("Last one of the lot");

const myNums = [1, 2, 3, 4]

let myTotal = myNums.reduce(function (acc,curVal){
    // console.log(`acc:${acc} and curVal:${curVal}`);
    // return acc+curVal
    
},0)

myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
    {
        itemName: "DSA course",
        price: 5090
    },
]

const priceToPAy=shoppingCart.reduce((acc,item)=>  acc + item.price,0)
console.log(priceToPAy);

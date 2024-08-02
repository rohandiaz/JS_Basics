console.log("Lets continue the grind");

// Immediately Invoked Function Expressions (IIFE)

(function hello(){
    console.log("Database is connected!!!");
    
})();

( (name)=>{
    console.log(`DB is connected,Hi ${name}`);
    
})('Rohan')



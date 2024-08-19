console.log("Hey its me again");

const sayName=function(e){
    console.log(e,Date.now());
    
}


    


// clearInterval(intervalId)

document.querySelector('#start').addEventListener('click',function(){
    intervalId=setInterval(sayName,1000,"Rohan")
    console.log("It has been started");
    
    
})

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(intervalId)
    console.log("Its been stopped");
    
})


console.log("Hey this is Rohan");

const sayRohan=function(){
    console.log("Its Rohan");
    
}

const changeText=function(){
    document.querySelector('h1').innerHTML="Its pure hardwork"
}

const changeHeader=setTimeout(changeText,2000)

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changeHeader)
    console.log("It has been stopped");
    
})
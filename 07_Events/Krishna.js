console.log("Hey this is Rohan here");

// document.getElementById('owl').onclick=function(){
//     alert("Owl is clicked")
// }

// document.getElementById('images').addEventListener('click',function(e){
//     console.log("Clicked inside the ul");
    
// }, false)

// document.getElementById('owl').addEventListener('click',function(e){
//     console.log("Owl clicked");
//     e.stopPropagation()
// }, false)

document.getElementById('google').addEventListener('click',function(e){
        e.preventDefault();
        e.stopPropagation()
        console.log("google clicked");
    }, false)


document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.tagName);
    if(e.target.tagName==='IMG'){
        console.log(e.target.id);
        let removeIt=e.target.parentNode
        removeIt.remove()
        
    }
})
   
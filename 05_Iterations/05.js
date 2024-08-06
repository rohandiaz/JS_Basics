console.log("We dont stop rn");

const languages = ["js", "rb", "py", "java", "cpp"]

languages.forEach(function (val){
    // console.log(val);
    
})

languages.forEach( (item)=>{
    // console.log(item);
    
})

function printMe(key) {
    // console.log(key);
}

languages.forEach(printMe)

languages.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item)=>{
    console.log(item.languageFileName);
    
})
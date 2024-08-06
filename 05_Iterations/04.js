console.log("Continuation bebs");


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple",
    python: "py"
}

for (const key in myObject) {
    // console.log(key);
    console.log(`${key} is the shortcut for ${myObject[key]}`);
    
}

const languages = ["js", "rb", "py", "java", "cpp"]

for (const key in languages) {
    console.log(languages[key]);
    
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('AUS',"Australia")
map.set('IN', "India")

for (const key in map) {
    console.log([key]);
    
}
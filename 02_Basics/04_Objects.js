console.log("Lesgoo...here we go again");

const XUser={}

XUser.name="Rohan"
XUser.id="56432abc"
XUser.isLoggedIn=true

// console.log(XUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rohan",
            lastname: "Das"
        }
    }
}

console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "e"}
const obj2 = {3: "a", 4: "d"}
const obj4 = {5: "a", 6: "c"}

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "rohan@gmail.com"
    },
    {
        id: 1,
        email: "sayn@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[2].email);

const course={
    courseName:"JS_Basics",
    coursePrice:"free",
    courseInstructor:"Hitesh"
}

const{courseInstructor:instruc}=course
// console.log(courseInstructor);
console.log(instruc);
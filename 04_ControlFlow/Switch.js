console.log("Ah here we go again");

// Now its time for switch statements!!!

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3
const month2="March"

switch (month) {
    case 1:
        console.log("Its Jan");
        break;
    case 2:
        console.log("Its Feb");
        break;
    case 3:
        console.log("Its March");
        break;
    case 5:
        console.log("Its June");
        break;

    default:
        console.log("Its not your month");
        break;
}

switch (month2) {
    case "jan":
        console.log("Its Jan");
        break;
    case "March":
        console.log("Its Feb");
        break;
    case 3:
        console.log("Its March");
        break;
    case 5:
        console.log("Its June");
        break;

    default:
        console.log("Its not your month");
        break;
}
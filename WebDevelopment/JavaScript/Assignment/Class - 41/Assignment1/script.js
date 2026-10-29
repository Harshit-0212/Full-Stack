// //part 1

// const student = {
//     name : "harshit dubey",
//     age : 20,
//     address:{
//         city : "bhopal",
//         state : "MP",
//         pincode : 462038 
//     },
//     course:{
//         title : "Computer Science",
//         duration : 4  
//     }
// }

// //Displaying the student's name, address city, state, and course title using dot notation.
// console.log(student.name);
// console.log(student.address.city);
// console.log(student.address.state);
// console.log(student.course.title);

// //Displaying the pincode and course duration using bracket notation.
// console.log(student["address"]["pincode"]);
// console.log(student["course"]["duration"]);

// const propName = "city";
// console.log(student.address[propName]);

// student.address.city = "Indore";
// student.address.state = "Madhya Pradesh";

// student.address.landmark = "Central Library";
// console.log(student.address);

//Part 2

const institute = {
    name : "RICR",
    campus:{
        location:{
            city: "bhopal",
            state: "Madhya Pradesh"
        }
    }
}

console.log(institute.campus.location.city);
console.log(institute["campus"]["location"]["state"]);

let prop = "city"
console.log(institute.campus.location[prop]);

institute.campus.location.city = "Bhopal (Gandhi Nagar)";
institute.campus.location.pincode = "462036";

console.log(institute.campus?.location?.city);
console.log(institute.campus?.contact?.phone);








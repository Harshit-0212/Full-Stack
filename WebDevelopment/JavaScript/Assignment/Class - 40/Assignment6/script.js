// //Part 1

// //Create a currentDate object using new Date() and display the current date and time.
// var currentDate = new Date();
// console.log(currentDate);

// //Create an admissionDate object using year, month index, and day arguments.
// var admissionDate = new Date(2026, 9, 15);
// console.log(admissionDate);

// //Create an examDate object using a date-time string and display its date and hour.
// var examDate = new Date("2026-10-25T10:30:00");
// console.log(examDate.getDate());
// console.log(examDate.getHours()); 

// //Create a Date object using the timestamp 0 and display it with toISOString().
// var Date2 = new Date(0);
// console.log(Date2.toISOString());

// //Using Date.now() to display the current timestamp in milliseconds.
// console.log(Date.now());

// //Create a copy of the admission date using new Date(admissionDate), modify the copied date, and demonstrate that the original date remains unchanged.
// var AdmissionDate = new Date(admissionDate);
// AdmissionDate.setDate(AdmissionDate.getDate() + 5);
// console.log(admissionDate);
// console.log(AdmissionDate);

// //Using getter methods such as getFullYear(), getMonth(), getDate(), getDay(), getHours(), and getTime() to display date information.
// console.log(admissionDate.getFullYear());
// console.log(admissionDate.getMonth());
// console.log(admissionDate.getDate());
// console.log(admissionDate.getDay());
// console.log(admissionDate.getHours());
// console.log(admissionDate.getTime());

// //Using at least one UTC getter, such as getUTCFullYear() or getUTCHours(), to demonstrate retrieving date information in UTC.
// console.log(admissionDate.getUTCFullYear());
// console.log(admissionDate.getUTCHours());

//Part 2
//Create a dueDate object representing a fixed assignment deadline.
var dueDate = new Date(2026, 9, 29, 19, 43, 0);

//Using setDate() to move the deadline forward by seven days.
dueDate.setDate(dueDate.getDate() + 7);

//Using setMonth() and setFullYear() to modify the deadline's month and year.
dueDate.setMonth(10);
dueDate.setFullYear(2027);

//Using setHours(), setMinutes(), and setSeconds() to update the deadline time.
dueDate.setHours(23);
dueDate.setMinutes(59);
dueDate.setSeconds(59);

//Create another date and move it backward by seven days using a getter and setter.
var pastDate = new Date();
pastDate.setDate(pastDate.getDate() - 7);

//Display the updated dates using toDateString(), toISOString(), and toLocaleDateString("en-IN").
console.log(dueDate.toDateString());
console.log(dueDate.toISOString());
console.log(dueDate.toLocaleDateString("en-IN"));

//Using Date.parse() to convert a standardized date string into a timestamp and display the result.
var timestamp = Date.parse("2026-10-29T19:43:00Z");
console.log(timestamp);

//Create one valid Date object and one invalid Date object using an unrecognized date string.
var validDate = new Date("2026-10-29");
var invalidDate = new Date("invalid-date-string");

//Using Number.isNaN(date.getTime()) to check date validity.
console.log(Number.isNaN(validDate.getTime()));
console.log(Number.isNaN(invalidDate.getTime()));

//Create an isValidDate() function that checks whether a value is a Date object with a valid timestamp.
function isValidDate(value) {
    return value instanceof Date && !Number.isNaN(value.getTime());
}
console.log(isValidDate(validDate));
console.log(isValidDate(invalidDate));
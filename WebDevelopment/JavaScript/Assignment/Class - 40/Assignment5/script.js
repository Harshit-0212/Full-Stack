//part 1

//Create a Date object using new Date() to display the current date and time.
var currentDate = new Date();
console.log(currentDate);

//Create a birthday Date object using a date string, such as "2005-08-15".
var birthdayDate = new Date("2005-08-15");
console.log(birthdayDate);

//Create an eventDate object using year, month, and day arguments to represent an institute event.
var eventDate = new Date(2026, 9, 30);
console.log(eventDate);

//Create a Date object using the timestamp 0 and display it with toISOString().
var epochDate = new Date(0);
console.log(epochDate.toISOString());

//Use getFullYear(), getMonth(), getDate(), and getDay() to display date information from one of the created objects.
console.log(eventDate.getFullYear());
console.log(eventDate.getMonth());
console.log(eventDate.getDate());
console.log(eventDate.getDay());

//Use toDateString() and toLocaleDateString("en-IN") to display a readable date.
console.log(eventDate.toDateString());
console.log(eventDate.toLocaleDateString("en-IN"));

//Part 2

//Create a deadline Date object representing a fixed assignment deadline.
var deadline = new Date(2026, 9, 29, 19, 43, 0);

//Display its year, month, day, hours, minutes, and seconds using the appropriate getter methods.
console.log(deadline.getFullYear());
console.log(deadline.getMonth());
console.log(deadline.getDate());
console.log(deadline.getHours());
console.log(deadline.getMinutes());
console.log(deadline.getSeconds());

//Use getDate() and getDay() to demonstrate the difference between the day of the month and the weekday index.
console.log(deadline.getDate());
console.log(deadline.getDay());

//Use setDate() to move the deadline forward by seven days.
deadline.setDate(deadline.getDate() + 7);
console.log(deadline.toDateString());

//Use setFullYear() to change the year and setMonth() to change the month.
deadline.setFullYear(2027);
deadline.setMonth(5);
console.log(deadline.toDateString());

//Use setHours() and setMinutes() to modify the deadline time.
deadline.setHours(23);
deadline.setMinutes(59);
console.log(deadline.toLocaleTimeString());

//Display the updated deadline using toDateString() and toLocaleDateString().
console.log(deadline.toDateString());
console.log(deadline.toLocaleDateString());

//Create another Date object and move its date backward by one day using setDate().
var pastDate = new Date(2026, 9, 29);
pastDate.setDate(pastDate.getDate() - 1);
console.log(pastDate.toDateString());

//Display a UTC-formatted date using toISOString().
console.log(deadline.toISOString());
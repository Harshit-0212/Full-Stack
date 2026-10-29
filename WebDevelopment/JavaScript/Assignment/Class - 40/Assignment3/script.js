//part 1
const marks = [65.2, 34.1, 78.0, 67, 23.87];

//Using Math.round(), Math.floor(), Math.ceil(), and Math.trunc() to demonstrate different ways of handling a decimal mark.
let sample = marks[0];
console.log(Math.round(sample));
console.log(Math.ceil(sample));
console.log(Math.floor(sample));
console.log(Math.trunc(sample));

//Using Math.min(...marks) to display the lowest mark and Math.max(...marks) to display the highest mark.
console.log(Math.min(...marks));
console.log(Math.max(...marks));

//Using Math.abs() to display the absolute value of a negative difference between two marks.
console.log(Math.abs(marks[0] - marks[2]));

//Using the addition, subtraction, multiplication, division, and remainder operators with suitable sample marks.
console.log(marks[0] + marks[1]);
console.log(marks[0] - marks[1]);
console.log(marks[0] * marks[1]);
console.log(marks[0] / 2);
console.log(marks[0] % 10);

//Using Math.sign() to identify the sign of a positive number, a negative number, and zero.
let a = 10, b = -98, c = 0
console.log(Math.sign(a));
console.log(Math.sign(b));
console.log(Math.sign(c));

//part 2
var radius = 7;
var sideA = 3;
var sideB = 4;

//Using Math.PI to display the value of pi and calculate the circle's circumference using basic multiplication.
console.log(Math.PI);
console.log(2 * Math.PI * radius);

//Using Math.pow() to calculate the square of the radius.
console.log(Math.pow(radius, 2));

//Using Math.sqrt() to calculate the square root of a positive number and demonstrate its result with a negative input.
console.log(Math.sqrt(49));
console.log(Math.sqrt(-9));

//Using Math.cbrt() to calculate the cube root of a number.
console.log(Math.cbrt(27));

//Using Math.hypot() to calculate the hypotenuse of a right triangle from its two perpendicular sides.
console.log(Math.hypot(sideA, sideB));

//Using the exponentiation operator ( ** ) to calculate a number raised to a power.
console.log(radius ** 3);

//Using Math.sign() to examine the sign of selected numeric values.
console.log(Math.sign(radius));





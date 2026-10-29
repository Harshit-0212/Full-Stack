//Assignment 1
var randomDecimal = Math.random();
var randomDecimal100 = Math.random() * 100;
var randomIntZeroToNine = Math.floor(Math.random() * 10);
var randomIntOneToTen = Math.floor(Math.random() * 10) + 1;

//Using Math.random() to generate and display a random decimal between 0 (inclusive) and 1 (exclusive) when the button is clicked.
console.log(randomDecimal);

//Generate and display a random decimal between 0 (inclusive) and 100 (exclusive).
console.log(randomDecimal100);

//Using Math.floor() and Math.random() to generate a random integer between 0 and 9 .
console.log(randomIntZeroToNine);

//Generate another random integer between 1 and 10 , including both limits.
console.log(randomIntOneToTen);


//Assignment 2
var generalIntRange = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
var exclusiveMaxRange = Math.floor(Math.random() * (15 - 5)) + 5;
var randomDecimalRange = Math.random() * (20 - 10) + 10;

//Generate a random integer between 5 and 15 , including both limits, using the general integer-range formula.
console.log(generalIntRange);

//Generate a random integer between 5 (inclusive) and 15 (exclusive) using the exclusive-maximum formula.
console.log(exclusiveMaxRange);

//Generate a random decimal between 10 (inclusive) and 20 (exclusive).
console.log(randomDecimalRange);
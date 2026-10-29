//Assignment 1
var score = 91;
var fee = 96000;
var attendance = 56;

//Using toString() to convert the student's score into a string and display its data type using typeof.
console.log(typeof(score.toString()));

//Using toLocaleString("en-IN") to format a large course fee according to Indian number-formatting conventions.
console.log(fee.toLocaleString("en-In"));

//Using toLocaleString() with the currency option and "INR" to display the fee as Indian currency.
console.log(fee.toLocaleString("en-IN",{
    style: "currency",
    currency: "INR"
}))

//Using toFixed(2) to display a percentage with exactly two decimal places.
console.log(attendance.toFixed(2));

//Using toPrecision() to format a numeric value using a specified number of significant digits.
console.log(fee.toPrecision());

//Using toExponential() to display a large numeric value in exponential notation.
console.log(fee.toExponential());



//Assignment 2
let intScore = 90;
let decimalScore = 88.5;
let numericString = "45";
let notANumber = NaN;
let infiniteValue = Infinity;

//Using Number.isInteger() to check whether selected values are integers.
console.log(Number.isInteger(decimalScore));
console.log(Number.isInteger(numericString));

//Using Number.isNaN() and Number.isFinite() to check the appropriate numeric conditions.
console.log(Number.isNaN(notANumber));

//Using Number.isSafeInteger() to check a regular integer and Number.MAX_SAFE_INTEGER.
console.log(Number.isSafeInteger(infiniteValue));

//Creating numeric text values such as "85.75", "120px", and "hello".
let percent = "85.75"
let size = "120px"
let greet = "hello"


//Using Number.parseInt() and Number.parseFloat() to parse these text values.
console.log(Number.parseInt(percent));
console.log(Number.parseFloat(percent));
console.log(Number.parseInt(size));
console.log(Number.parseFloat(percent));
console.log(Number.parseInt(greet));
console.log(Number.parseFloat(percent));

/*
  Explanations:
  - Why "85" as string does not pass Number.isInteger(): 
    Number.isInteger() strictly checks if the given value is actually of type 'number' and an integer. 
    Even though the string contains only digits like "85", its type is still 'string', so Number.isInteger("85") returns false.
  
  - Why parsing a numeric prefix does not guarantee that the whole input is valid: 
    Methods like Number.parseInt() and Number.parseFloat() just scan the string from left to right to extract valid leading numeric characters. 
    They completely ignore trailing non-numeric characters (like parsing "120px" which successfully returns 120), meaning any extra text at the end doesn't trigger a failure or return NaN.
*/










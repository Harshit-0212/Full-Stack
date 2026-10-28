//Assignment 1

var studentname = " rAHUL shARma "
console.log(studentname.toLowerCase().trim());
console.log(studentname.toUpperCase().trim());

var courseDescription = "JavaScript is scriptng language"

//Use charAt() and at() to display selected characters from the sentence
console.log(courseDescription.charAt(2));
console.log(courseDescription.at(4));

//Use slice() and substring() to extract different portions of the course description.
console.log(courseDescription.slice(1,5));
console.log(courseDescription.substring(0,10));

//Use indexOf() and lastIndexOf() to find the positions of a word or character.
console.log(courseDescription.indexOf("a"));
console.log(courseDescription.lastIndexOf("a"));

//Use includes() to check whether the description contains "JavaScript".
console.log(courseDescription.includes("JavaScript"));


//Assignment 2 
var courseMessage = "HTML is the standard markup language for Web pages. With HTML you can create your own Website."
//Use replace() to replace the first occurrence of "HTML" with "JavaScript".
console.log(courseMessage.replace("HTML","JavaScript"));

//Use replaceAll() to replace every occurrence of "HTML" with "JavaScript".
console.log(courseMessage.replaceAll("HTML","JavaScript"));

//Use toUpperCase() and toLowerCase() to display the message in different letter cases.
console.log(courseMessage.toUpperCase());
console.log(courseMessage.toLowerCase());

//Create two variables containing a greeting and a student group name, then combine them using concat().
var greeting = "Hello, Good Morning "
var student = "Dear Student"
console.log(greeting.concat(student));

//Use repeat() to generate a separator containing at least five asterisks.
var star = "*"
console.log(star.repeat(5));

//Create a comma-separated string of course names and use split(",") to convert it into an array.
const coursesString = "JavaScript,Python,Data Science,React,Node.js";
const coursesArray = coursesString.split(",");
console.log(coursesArray);

const sentence = "Learning JavaScript is fun and rewarding";
const wordsArray = sentence.split(" ");
console.log(wordsArray);

//Demonstrate trimStart() and trimEnd() on a string containing extra whitespace.
const sntnce = "  Hii , I am Harshit Dubey    "
console.log(sntnce.trimStart());
console.log(sntnce.trimEnd());
















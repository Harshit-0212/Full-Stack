// const arr = [12, "harshit", 2.42, "a"];

// console.log("With for each");

// arr.forEach((element) => {
//   console.log(element);
// });

// console.log("With Map");

// var x = arr.map((element) => {
//   if (typeof element === "number") {
//     console.log(element);
//   }
// });

// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var f = arr2.filter((element) => element % 2 == 0);

// console.log(f);

//some and index x
// array.some(function(element, index, array) {
//     return condition;
// });

// const numbers = [3, 7, 12, 5];

// const result = numbers.some((number) => {
//     return number > 10;
// });

// console.log(result);

//when no element matches

// const numbers = [2, 4, 6, 8];

// const result = numbers.some((number) => {
//     return number > 10;
// });

// console.log(result);

// const students = ["Harshit", "karan","Piyush"]
// console.log(students.includes("Harshit"));

const arr1 = [66, 32, 45, 21, 35, 77, 53, 21, 67];

let result = arr1.sort((a, b) => a - b);

console.log(result);

const numbers = [2, 5, 8, 11, 14];

const filterednumbers = numbers.filter((numbers) => numbers > 5);
const doubledNumbers = filterednumbers.map((numbers) => numbers * 2);

console.log(doubledNumbers);

const arraymethodchaining = numbers
  .filter((number) => number <= 5)
  .map((nummbers) => numbers * 2);

console.log(arraymethodchaining)

const res = numbers.filter((numbers) =>numbers <= 5).includes(4)

console.log(res);

const data = [2, 5, 8, 11, 14, 53, 12, 78, 53]

let sum = 0

sum = data.reduce((sum, item) => (sum = sum + item))

console.log(sum);

  

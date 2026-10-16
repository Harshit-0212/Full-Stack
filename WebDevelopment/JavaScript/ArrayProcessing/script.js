const arr = [12, "harshit", 2.42, "a"];

console.log("With for each");

arr.forEach((element) => {
  console.log(element);
});

console.log("With Map");

var x = arr.map((element) => {
  if (typeof element === "number") {
    console.log(element);
  }
});

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var f = arr2.filter((element) => element % 2 == 0);

console.log(f);


//some and index x
array.some(function(element, index, array) {
    return condition;
});

const numbers = [3, 7, 12, 5];

const result = numbers.some((number) => {
    return number > 10;
});

console.log(result);


//when no element matches

const numbers = [2, 4, 6, 8];

const result = numbers.some((number) => {
    return number > 10;
});

console.log(result);


// console.log(() => {
//     let a = 10
//     b = 23
//     console.log(a+b)
// });

// const a = () => {
//     console.log("This is an arrow function.");

// }

// console.log(a());

// const greet = (name) =>{
//     console.log("Hello " + name);

// }

// let result = greet("harshit")

//Callback

function add(a, b) {
  let x = a + 5;
  let y = b + 5;
  console.log(x + y);
}

function sum(m, n, jor) {
  let p = m * 2;
  let q = n * 2;
  jor(p, q);
}

sum(5, 6, add);

function diff(a, b) {
  let x = a - 5;
  let y = b - 5;
  console.log(x + y);
}

sum(5, 6, (a, b) => {
  let x = a + 5;
  let y = b + 5;
  console.log(x + y);
});

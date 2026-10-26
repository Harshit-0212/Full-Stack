const language = "JavaScript";

console.log(language.charAt(0));
console.log(language.charAt(4));
console.log(language.charAt(9));

console.log(language.at(0));
console.log(language.at(-1));
console.log(language.at(-2));

// console.log(text.slice(0, 4));
// console.log(text.slice(4, 10));
// console.log(text.slice(4));
// console.log(text.slice(-6));

// console.log(text.substring(0, 4));
// console.log(text.substring(4, 10));
// console.log(text.substring(4));

const price = 250;

console.log(price.toString());
console.log(typeof price.toString());
console.log(typeof price);

const value = 10;

console.log(value.toString(2));
console.log(value.toString(8));
console.log(value.toString(16));

const amount = 1234567.89;

console.log(amount.toLocaleString("en-US"));
console.log(amount.toLocaleString("de-DE"));
console.log(amount.toLocaleString("en-IN"));

const amount2 = 1234.5;

console.log(
  amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
  })
);
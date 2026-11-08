// const pattern = /student/;

// console.log(pattern.test("student123"));
// console.log(pattern.test("teacher123"));

const pattern = /hello/;

console.log(pattern.test("hello everyone"));
console.log(pattern.test("good morning"));

try {
    console.log("Program started");
    console.log("Program completed");
} catch (error) {
    console.log("An error occurred");
}

try {
    console.log("Program started");
    unknownFunction();
    console.log("Program completed");
} catch (error) {
    console.log("An error occurred");
}

try {
    unknownFunction();
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

try {
    console.log("Checking result");
} catch (error) {
    console.log("An error occurred");
} finally {
    console.log("Process finished");
}
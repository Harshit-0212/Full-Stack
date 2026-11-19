// function createCourse(courseName){
//     return function(){
//         console.log("Course: " + courseName);
//     }
// }

// const javascriptcourse = createCourse("JavaScript")
// const reactcourse = createCourse("React")

// javascriptcourse()
// reactcourse()


//Array 
//always make array with const



const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);

function calculateTotal(price, callback) {
    const total = price * 2;
    callback(total);
}

calculateTotal(100, function (result) {
    console.log("Total amount:", result);
});


// 1-3. Create a JavaScript courses array containing course objects with title, duration, fee, students array, and a nested instructor object
const courses = [
  {
    title: "MERN- Stack",
    duration: "6 Months",
    fee: 15000,
    students: ["Krishna Mewada", "Ishaan Nema"],
    instructor: {
      name: "Shumali Gupta",
      department: "Information Technology"
    }
  },
  {
    title: "Data Structures & Algorithms",
    duration: "4 Months",
    fee: 12000,
    students: ["Harshit Dubey", "Kahkasha Begum"],
    instructor: {
      name: "Amit Swami",
      department: "AI-DS"
    }
  },
  {
    title: "Machine Learning ",
    duration: "2 Months",
    fee: 18000,
    students: ["Karan Rathore", "Mahendra Parmar"],
    instructor: {
      name: "Harshit Dubey",
      department: "Computer Science & Engineering"
    }
  }
];

console.log(courses[0].title);
console.log(courses[0].instructor.name);
console.log(courses[0].students[0]);


/* 
  Difference between a JavaScript Object and JSON:
  JavaScript objects can hold functions and do not require keys to be enclosed in double quotes, 
  whereas JSON is strictly a text-based data interchange format where all keys and string values 
  must use double quotation marks and cannot contain functions.
*/
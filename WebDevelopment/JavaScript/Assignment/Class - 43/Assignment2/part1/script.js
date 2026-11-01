//Part 1
const studentJSON =
  '{"name": "Harshit Dubey", "age": 20, "course": "Computer Science & Engineering", "marks": [85, 92, 78]}';

const obj = JSON.parse(studentJSON);

console.log(obj);
console.log(obj.name);
console.log(obj.course);
console.log(obj.marks);

const courses = '["Programming" , "OOPS", "DSA", "Web Development" , "AI-ML"]';

const obj2 = JSON.parse(courses);
console.log(obj2[0]);
console.log(obj2[4]);

const number = "12";
const num = JSON.parse(number);
console.log(num);
console.log(typeof num);

obj.marks = [45, 34, 12];

const updateMarks = JSON.stringify(obj)
console.log(obj);
console.log(typeof(obj));

console.log(JSON.stringify(obj, null, 2))



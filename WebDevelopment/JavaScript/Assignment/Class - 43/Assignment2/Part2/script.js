const courseJSON =
  '{"title": "Web Development", "duration": "6 Months", "fee": 21000, "topics": ["HTML", "CSS", "JavaScript"]}';

const courseObj = JSON.parse(courseJSON);

console.log("Course Title:", courseObj.courseTitle);
console.log("Fee:", courseObj.fee);
console.log("Topics:", courseObj.topics);

courseObj.fee = 22000;
courseObj.topics.push("React.js");

const updatedCourseJSON = JSON.stringify(courseObj);

console.log(updatedCourseJSON);
console.log(JSON.stringify(courseObj, null, 2));

const originalCourseJSON = courseJSON;
console.log(originalCourseJSON);
console.log(courseObj.topics);

const invalidJSON = '{"courseTitle": "Data Structures", "fee": 12000,}';



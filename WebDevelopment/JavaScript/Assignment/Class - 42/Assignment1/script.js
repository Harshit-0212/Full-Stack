//Part 1
// const studentForm = document.getElementById("studentForm");
// studentForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const sn = document.getElementById("studentFullName").value.trim();
//   const em = document.getElementById("email").value.trim();
//   const cn = document.getElementById("courseName").value.trim();

//   console.log("Student Name : ",sn);
//   console.log("Email : ",em);
//   console.log("Course Name : ",cn);
// });

//Part 2
const enqForm = document.getElementById("enqForm");
enqForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(enqForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const number = formData.get("number");
  const cours = formData.get("cours");

  for (const [key, value] of formData.entries()) {
  console.log(`${key}: ${value}`);
}

});



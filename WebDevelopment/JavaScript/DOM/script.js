let txt = document.querySelector("h1").innerText;
console.log(txt + " Its youuur girl hemangiiii");

function submit() {
  console.log("Data Submitted");
  const nm = document.querySelector("#fname").value.trim();
  const email = document.querySelector("#email").value.trim();
  const ph = document.getElementById("phone").value;
  const dob = document.getElementById("DOB").value;
  const gender = document.getElementById("gender").value;
  console.log("Full Name: " + nm);
  console.log("Email: " + email);
  console.log("Phone: " + ph);
  console.log("DOB: " + dob);
  console.log("gender: " + gender);
}

function submit2() {
  const formData = [];

  document.querySelectorAll("input, select").forEach((item) => {
    formData.push(item.value.trim());
  });

  const fieldName = [];
  document.querySelectorAll("input, select").forEach((item) => {
    fieldName.push(item.name);
  });

  for (var i = 0; i < fieldName.length; i++) {
    console.log(fieldName[i] + " : " + formData[i]);
  }
}



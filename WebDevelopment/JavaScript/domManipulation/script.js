const headingtext = document.getElementById("heading")
const paraText = document.getElementById("studentmessage")
const btnLabel = document.getElementById("coursebutton")

console.log(headingtext.innerHTML);
console.log(paraText.innertext);
console.log(btnLabel.textContent);

headingtext.innerText = "Harshit Dubey"
headingtext.innerHTML = "Tanish"
headingtext.textContent = "Hemangi"

function UpdateMyName(){
  const myname = document.getElementById("myname").ariaValueMax.trim();
  paraText.innerText = "Welcome to your Learning Portal!!" + myname;
}

const pic = document.getElementById("somepicture")

pic.src = "./butterfly.jpg"
pic.alt = "butterfly"

function change(){
  const myNameInput = document.getElementById("myname");

  myNameInput.id = "myFullName";
  myNameInput.type = "password";
  myNameInput.name = "FullName";

  pic.setAttribute("src", "./strawberry.jpg")
  pic.setAttribute("alt", "strawberry")
}


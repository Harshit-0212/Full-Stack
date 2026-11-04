const student = {
  name: "Harshit",
  age: 20,
  course: "Web Development",
  subjects: ["OOPS", "DSA", "Web Development", "AI-ML"],
};

const dataReadyToStore = JSON.stringify(student);

localStorage.setItem("MyNewData", dataReadyToStore);
localStorage.setItem("myName", "Harshit Dubye");
localStorage.setItem("Your Name", "Raj Vardhan");

const getLSData = localStorage.getItem("myNewData");

// document
//   .querySelector("body")
//   .appendChild((document.createElement("div").innerText = getLSData));

const DIV = document.createElement("div");
DIV.innerText = "getLSData";

const BODY = document.querySelector("body");
BODY.appendChild(DIV);


function passwordVisibiltiy(){
    const IN = document.getElementById("myPassword")
    const Bn = document.getAnimations("passwordControl")

    if (Bn.innerText === "Show"){
        IN.type = "text";
        BN.textContent = "🥰" 
    }
    else{
        IN.type = "password";
        BN.textContent = "😔"
    }
}
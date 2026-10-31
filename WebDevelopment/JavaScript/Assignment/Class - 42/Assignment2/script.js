
const checkbtn = document.getElementById("checkAge");
checkbtn.addEventListener("click", () => {
    const ageValue = document.getElementById("age").value;
    const age = Number(ageValue);

    const ageStatus = (age >= 16 && age <= 60) ? "AgeValid" : "notValid";
    
   
    console.log(`Entered Age: ${age}, Status: ${ageStatus}`);
});



const quantityInput = document.getElementById("quantityInput");
quantityInput.addEventListener("input", () => {
  const isQuantityValid = quantityInput.checkValidity();
  
  
  console.log(`Current Quantity: ${quantityInput.value}, Is Valid (1-10): ${isQuantityValid}`);

  if (!isQuantityValid) {
    quantityInput.reportValidity();
  }
});


const usernameInput = document.getElementById("usernameInput");
usernameInput.addEventListener("input", () => {
  const username = usernameInput.value;
  const len = username.length;
  const isUsernameValid = len >= 3 && len <= 12;

  console.log(`Username: "${username}", Length: ${len}, Is Length Valid (3-12)? ${isUsernameValid}`);
});

//Part 2
// const scoreForm = document.getElementById("scoreForm");

// scoreForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const isFormValid = scoreForm.checkValidity();

//     console.log(isFormValid);
// });

// const regCodeInput = document.getElementById("regCodeInput");

// regCodeInput.addEventListener("input", () => {
//   const code = regCodeInput.value;
//   const len = code.length;

//   if (len < 4) {
//     regCodeInput.setCustomValidity("Registration code must contain at least 4 characters.");
//   } else {
//     regCodeInput.setCustomValidity("");
//   }

//   const isCodeValid = regCodeInput.checkValidity();
//   console.log(isCodeValid);
//   console.log(regCodeInput.validationMessage);
// });
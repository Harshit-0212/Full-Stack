function showAlert() {
  alert("click me button clicked using HTML events");
}

document.getElementById("clickButton").addEventListener("click", showAlert2);

function showAlert2() {
  alert("click me button clicked using JS events");
}

document.getElementById("box").addEventListener("click", () => {
  document.getElementById("box").innerText = " the box was clicked";
});

document.getElementById("box2").addEventListener("click", () => {
  document.getElementById("box2").innerText = "box  clicked";
});

document.getElementById("box3").addEventListener("mouseenter", () => {
    document.getElementById("box3").innerText = "Mouse enter"
})


document.getElementById("box3").addEventListener("mouseout", () => {
    document.getElementById("box3").innerText = "Mouse out"
})

document.getElementById("fullname").addEventListener("click", () => {
    console.log(getElementById("fullname").value.trim());
})

document.getElementById("fullname").addEventListener("keydown",(e) => {
    e.key === "Enter" && console.log(document.getElementById("fullname").value.trim());

})


const showAssBtn = document.getElementById("showAssignmentNotification")
const showAttBtn = document.getElementById("showAttendanceNotification")
const stopAssBtn = document.getElementById("stopAssignmentNotification")

const assPara = document.getElementById("AssignmentNotification")
const attPara = document.getElementById("AttendanceNotification")

function showAssignment(){
    assPara.textContent = "Your assignment deadline is appraoching"
}

showAssBtn.addEventListener("click",showAssignment)

showAssBtn.addEventListener("click", () => {
    attPara.textContent = "please check your attendance status !"
})

stopAssBtn.addEventListener("click", () => {
    showAssBtn.removeEventListener("click",showAssignment)

    assPara.textContent = "your assignment notification is stopped!"
})

const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", function () {
  console.log("Parent clicked");
});

child.addEventListener("click", function () {
  console.log("Child clicked");
});

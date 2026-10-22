function addTask() {
  const newTask = document.getElementById("taskInput").value.trim();

  const LI = document.createElement("li");
  LI.classList.add("p-3");

  const SPAN = document.createElement("span");
  SPAN.textContent = newTask;

  const BUTTON1 = document.createElement("button");
  BUTTON1.classList.add("btn", "btn-success", "btn-sm", "ms-3");
  BUTTON1.textContent = "Edit";


  const BUTTON2 = document.createElement("button");
  BUTTON2.classList.add("btn", "btn-danger", "btn-sm", "ms-3");
  BUTTON2.textContent = "Delete";
  BUTTON2.onclick = () => LI.remove();

  LI.appendChild(SPAN);
  LI.appendChild(BUTTON1);
  LI.appendChild(BUTTON2);

  document.getElementById("taskList").appendChild(LI);

  document.getElementById("taskInput").value = "";
}

function edit(){
    const editTask = document.getElementById("")
}
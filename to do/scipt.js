const textinput = document.getElementById("textinput");
const addtask = document.getElementById("addtask");
const tasklist = document.getElementById("tasklist");

function addTask() {
  const taskInputValue = textinput.value.trim();

  if (taskInputValue === "") {
    alert("Please enter a task");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = taskInputValue;
  listItem.style.listStyle = "number";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-btn");
  deleteButton.style.margin = "10px 10px";

  deleteButton.addEventListener("click", () => {
    tasklist.removeChild(listItem);
  });
  listItem.appendChild(deleteButton);

  tasklist.appendChild(listItem);

  textinput.value = "";
}

addtask.addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskDescription = document.getElementById("taskDescription");

  if (((taskInput.value === "") & (taskDescription.value === "")) | (taskInput.value === "")){
    alert("Введите название задачи!");
    return
  }

  const list = document.getElementById("taskList");

  const newTask = document.createElement("div");
  newTask.classList.add("task");

  const taskName = document.createElement("div");
  taskName.classList.add("taskName");
  taskName.innerHTML = taskInput.value;

  const taskDesc = document.createElement("div");
  taskDesc.classList.add("taskDesc");
  taskDesc.innerHTML = taskDescription.value;

  const taskTime = document.createElement("div");
  taskTime.classList.add("taskTime");
  taskTime.innerHTML = new Date().toLocaleTimeString();

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<img src="trash.svg" alt="trash">';
  deleteButton.onclick = function deleteTask(){
    list.removeChild(newTask);
  }

  newTask.appendChild(taskName);
  newTask.appendChild(taskDesc);
  newTask.appendChild(taskTime);
  newTask.appendChild(deleteButton);
  list.appendChild(newTask);

  taskInput.value = "";
  taskDescription.value = "";
}


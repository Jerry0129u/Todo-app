// Initialize an empty array to store tasks
let tasks = [];

// Function to add a task
function addTask() {
  const taskInput = document.getElementById("task-input").value;
  const whoInput = document.getElementById("who-input").value;
  const whenInput = document.getElementById("when-input").value;

  if (taskInput && whoInput && whenInput) {
    const task = {
      task: taskInput,
      who: whoInput,
      when: whenInput,
    };

    tasks.push(task);
    clearInputFields();
    updateTaskList();
  } else {
    alert("Please fill in all fields.");
  }
}

// Function to clear input fields
function clearInputFields() {
  document.getElementById("task-input").value = "";
  document.getElementById("who-input").value = "";
  document.getElementById("when-input").value = "";
}

// Function to update the task list and the counter
function updateTaskList() {
  const valueDiv = document.getElementById("value");
  valueDiv.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task-item";
    taskDiv.innerHTML = `
      <p><strong>Хийх зүйл:</strong> ${task.task}</p>
      <p><strong>Хэн хийх:</strong> ${task.who}</p>
      <p><strong>Хэзээ дуусгах:</strong> ${task.when}</p>
      <br>
      <button class="button" onclick="deleteTask(${index})">Устгах</button>
      <button class="button" onclick="editTask(${index})">Засах</button>
      <hr />
    `;
    valueDiv.appendChild(taskDiv);
  });

  const counterButton = document.querySelector(".button.is-rounded");
  counterButton.textContent = `${tasks.length}/25`;
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
}

// Function to edit a task
function editTask(index) {
  const task = tasks[index];
  document.getElementById("task-input").value = task.task;
  document.getElementById("who хийх-input").value = task.who;
  document.getElementById("when дуусгах-input").value = task.when;

  // Remove the task from the list
  deleteTask(index);
}

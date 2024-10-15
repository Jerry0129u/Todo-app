let tasks = [];
let points = {}; // Separate object to track points for each user
let currentEditIndex = null; // To track the task being edited

// Function to add or update a task
function addTask(event) {
  if (event) event.preventDefault(); // Prevent form submission

  const taskInput = document.getElementById("task-input").value.trim();
  const whoInput = document.getElementById("who-input").value.trim();
  const whenInput = document.getElementById("when-input").value.trim();

  if (taskInput && whoInput && whenInput) {
    const task = {
      task: taskInput,
      who: whoInput,
      when: whenInput,
      completed: false, // Track completion status
    };

    if (currentEditIndex !== null) {
      tasks[currentEditIndex] = task; // Update existing task
      currentEditIndex = null; // Reset after editing
    } else {
      if (tasks.length < 25) {
        tasks.push(task); // Add new task
      } else {
        alert("You can only add up to 25 tasks.");
        return;
      }
    }

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

// Function to update the task list
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
            <button class="button" onclick="completeTask(${index})">Дуусгах</button>
            <button class="button" onclick="deleteTask(${index})">Устгах</button>
            <button class="button" onclick="editTask(${index})">Засах</button>
            <hr />
        `;
    valueDiv.appendChild(taskDiv);
  });

  // Display points for each user
  displayPoints();

  const counterButton = document.querySelector(".button.is-rounded");
  counterButton.textContent = `${tasks.length}/25`;
}

// Function to display points
function displayPoints() {
  const pointsDiv = document.getElementById("points");
  pointsDiv.innerHTML = "<h3>Тасалж авсан оноо:</h3>";

  for (const user in points) {
    pointsDiv.innerHTML += `<p>${user}: ${points[user]} оноо</p>`;
  }
}

// Function to delete a task
function deleteTask(index) {
  if (confirm("Та энэ даалгаврыг устгах уу?")) {
    // Confirmation before delete
    tasks.splice(index, 1);
    updateTaskList();
  }
}

// Function to edit a task
function editTask(index) {
  const task = tasks[index];
  document.getElementById("task-input").value = task.task;
  document.getElementById("who-input").value = task.who;
  document.getElementById("when-input").value = task.when;

  currentEditIndex = index; // Set the current index being edited
}

// Function to complete a task
function completeTask(index) {
  if (!tasks[index].completed) {
    tasks[index].completed = true; // Mark the task as completed
    points[tasks[index].who] = (points[tasks[index].who] || 0) + 1; // Increment points
  } else {
    alert("Энэ даалгавар аль хэдийн дууссан."); // Alert if already completed
  }
  updateTaskList(); // Refresh the task list
}

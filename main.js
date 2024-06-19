let taskCount = 0;

function addTask() {
    const input = document.getElementById("input");
    const value = document.getElementById("value");

    // Create a new task item
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
  
    taskItem.textContent = input.value;

    // Append the task item to the value container
    value.appendChild(taskItem);

    // Update task count
    taskCount++;
    updateTaskCount();

    // Clear input
    input.value = " ";
}

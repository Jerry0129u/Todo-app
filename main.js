function addTask() {
    const input = document.getElementById("input");
    const value = document.getElementById("value");

    // Create a new task item
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    // Create task text content
    const taskText = document.createElement("span");
    taskText.textContent = input.value;
    taskItem.appendChild(taskText);



    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function() {
    if (confirm("Are you sure you want to delete your task?")) {
        const parentElement = deleteButton.parentElement;
        parentElement.remove();

    }
    });
    taskItem.appendChild(deleteButton);



    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-button");
    editButton.addEventListener("click", function() {
    const newText = prompt("You can edit old task value:", taskText.textContent);
    if (newText != null) {
        taskText.textContent = newText;

    }
    });
    taskItem.appendChild(editButton);


    // Append the task item to the value container
    value.appendChild(taskItem);

    // Clear input
    input.value = "  ";
}




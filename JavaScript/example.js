// Elements
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add Task Event
addBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Complete task on click
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Delete task on double click
    li.addEventListener("dblclick", function () {
        li.remove();
    });

    taskList.appendChild(li);

    taskInput.value = "";
});

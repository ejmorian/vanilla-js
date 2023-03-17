// To-Do List
// Create a web-based to-do list application where users can add, edit, and delete tasks. Tasks should be saved in local storage so that users can return to them later.

let taskList = [];

const clearTasks = () => {
  localStorage.removeItem("tasks");
  taskList.length = 0;

  displayTask();
};

const saveToLocal = (item) => {
  localStorage.setItem("tasks", JSON.stringify(item));
};

const displayTask = () => {
  "use strict";
  let list = document.createElement("ol");

  const displayBox = document.getElementById("display-task");

  let tasks = taskList.map((task) => {
    return `<li>${task}</li>`;
  });

  tasks.forEach((task) => {
    list.innerHTML += task;
  });

  displayBox.append(list);

  if (displayBox.contains(list)) {
    displayBox.removeChild(displayBox.firstChild);
  }

  console.log(list);
};

const addTask = () => {
  "use strict";

  let taskInput = document.getElementById("task-input");

  if (taskInput.value) {
    taskList.push(taskInput.value);
  }

  saveToLocal(taskList);

  taskInput.value = "";

  displayTask();
};

const loadLocal = () => {
  let saved = JSON.parse(localStorage.getItem("tasks"));
  if (saved !== null) {
    taskList = saved;
  }
  displayTask();
};

const init = () => {
  "use strict";
  loadLocal();

  const taskForm = document.getElementById("task-form");
  const addButton = document.getElementById("add-task");
  const clearButton = document.getElementById("clear-task");

  clearButton.addEventListener("click", clearTasks);
  addButton.addEventListener("click", addTask);

  taskForm.addEventListener("submit", (e) => e.preventDefault());
};

window.onload = init;

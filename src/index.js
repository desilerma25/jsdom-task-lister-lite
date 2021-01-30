document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");
  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newTask = document.querySelector("#new-task-description").value;
    taskList.innerHTML += `<li> ${newTask}
    <button data-action = "delete"> X </button>
    </li>`;
    taskList.addEventListener("click", function (event) {
      if (event.target.dataset.action === "delete") {
        event.target.parentElement.remove();
      }
    });
    taskForm.reset();
});
});

// type a task into input field (form)
//click submit button
//task provided should appear on the DOM after submit clicked
//prevent POST from happening after click submit
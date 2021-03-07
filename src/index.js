document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById('create-task-form')
  // console.log(newTaskForm)

  const newTaskDescription = document.getElementById('new-task-description')
  // console.log(newTaskDescription)

  const newTaskUl = document.getElementById('tasks')
  // console.log(newTaskUl)

  newTaskForm.addEventListener("submit", createNewTask)

});

const createNewTask = event => {
  event.preventDefault();

  const newTaskDescription = document.getElementById('new-task-description');
  console.log(newTaskDescription)

  const newTask = document.createElement('li')

  newTask.innerHTML = newTaskDescription.value
  console.log(newTask.innerHTML)

  appendNewTask(newTask);
  event.target.reset();

}

const appendNewTask = task => {
  document.getElementById('tasks').appendChild(task);
};

// const newTaskUl.addEventListener('click', (createNewTask) => {
//   if(createNewTask.target === 'BUTTON') {
//     newTask.deleteTask(createNewTask.target.dataset.description);
//     renderApp();
//   }
// });

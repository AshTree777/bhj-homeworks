const formTasks = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
taskInput.setAttribute('required', '');

taskInput.addEventListener('keydown', () => {
})

formTasks.addEventListener('submit', (event) => {
    event.preventDefault();

    const tasksList = document.querySelector('.tasks__list');

    const divTasks = document.createElement('div');
    divTasks.className = 'task';
    tasksList.appendChild(divTasks);

    const task = document.querySelector('.task');

    const divTasksTitle = document.createElement('div');
    divTasksTitle.className = 'task__title';
    divTasksTitle.textContent = taskInput.value;
    divTasks.appendChild(divTasksTitle);

    const taskRemove = document.createElement('a');
    taskRemove.href = "#";
    taskRemove.className = 'task__remove';
    taskRemove.innerHTML = '&times;';
    divTasks.appendChild(taskRemove);

    taskRemove.addEventListener('click', () => {
        divTasks.remove('div');
    })

    formTasks.reset();
})
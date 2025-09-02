const formTasks = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
taskInput.setAttribute('required', '');

formTasks.addEventListener('submit', (event) => {
    event.preventDefault();

    if (taskInput.value.trim().length !== 0) {

        const tasksList = document.querySelector('.tasks__list');
        tasksList.insertAdjacentHTML('afterbegin', `
            <div class="task">
                <div class="task__title">
                    ${taskInput.value}  
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`
        );

        const taskRemove = document.querySelector('.task__remove');
        const task = document.querySelector('.task');
        taskRemove.addEventListener('click', () => {
            task.remove('div');
        })

    } else {
        alert('Вы не заполнили это поле');
    }

    formTasks.reset();
})
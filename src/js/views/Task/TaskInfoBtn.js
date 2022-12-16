import { createElement } from "../../utils";

function btnView(task, callback) {
    const generateBtn = ({ id, title }) => createElement(`
    <!-- Task Data -->
    <button id="task-info" class="max-w-full flex-grow flex flex-col justify-center text-left p-2 pl-0" data-id="${id}" aria-label="Edit Task Details">
        <!-- Task Title -->
        <p class="max-w-[80%] text-[15px] text-ellipsis tracking-wide overflow-hidden">${title}</p>

        <!-- Task Indicators (Post MVP) -->
        <div class=""></div>
    </button>`);

    const btn = generateBtn(task);
    btn.addEventListener('click', callback);
    return btn;
}

/**
 * Creates & return TaskInfoBtn View
 * @param {Task} task 
 * @returns {Node}
 */
function TaskInfoBtn(task) {
    const taskInfoBtn = btnView(task, () => task.notifyObservers('TASK_ACCESSED'));

    const taskTitle = (() => {
        const title = taskInfoBtn.querySelector('#task-info > p');
        return {
            update: (task) => title.textContent = task.title,
        }
    })();
    
    task.addObserver('TASK_TITLE', taskTitle);

    return taskInfoBtn;
}

export default TaskInfoBtn;
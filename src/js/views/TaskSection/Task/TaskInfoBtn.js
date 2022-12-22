import { createElement } from "../../../utils";

/**
 * Generates a btnView & assigns a click listener
 * @param {Task} task 
 * @param {Function} callback 
 * @returns {Node}
 */
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
 * Generates a TaskInfoBtn & Observes for Task Title changes
 * @param {Task} task 
 * @param {Function} switchActiveTask 
 * @returns {Node}
 */
function TaskInfoBtn(task, switchActiveTask) {
    const taskInfoBtn = btnView(task, () => switchActiveTask(task));

    const taskTitle = {
        title: taskInfoBtn.querySelector('#task-info > p'),
        update: function (task) {
            this.title.textContent = task.title;
        },
    }
    
    task.addObserver('TASK_TITLE_CHANGED', taskTitle);

    return taskInfoBtn;
}

export default TaskInfoBtn;
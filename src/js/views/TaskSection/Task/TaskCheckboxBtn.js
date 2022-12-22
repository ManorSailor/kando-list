import { createElement } from "../../../utils";

/**
 * Generates a btnView & assigns a click listener
 * @param {Task} task 
 * @param {Function} callback 
 * @returns {Node}
 */
function btnView(task, callback) {
    const generateBtn = ({ id, active }) => createElement(`
    <!-- Task Checkbox -->
    <button id="task-checkbox" class="p-2" data-id="${id}" aria-label="Mark task as Complete">
        <input class="task-checkbox" type="checkbox" ${(!active) ? 'checked' : ''}>
        <div class="toggle mt-1">
            <div class="wrapper">
                <iconify-icon class="p-0 hover:text-white pointer-events-none" icon="octicon:check-circle-fill-16" width="18" aria-hidden="true"></iconify-icon>
            </div>
        </div>
    </button>`);

    const btn = generateBtn(task);
    btn.addEventListener('click', callback);
    return btn;
}

/**
 * Generates a TaskCheckboxBtn & Observes for Task Toggle event
 * @param {Task} task 
 * @param {Function} callback 
 * @returns {Node}
 */
function TaskCheckboxBtn(task, callback = () => task.toggleState()) {
    const taskCheckboxBtn = btnView(task, callback);

    const taskCheckbox = {
        checkbox: taskCheckboxBtn.querySelector('#task-checkbox > input'),
        update: function (task) {
            (!task.active) ? this.checkbox.setAttribute('checked', '') : this.checkbox.removeAttribute('checked')
        },
    };

    task.addObserver('TASK_TOGGLED', taskCheckbox);

    return taskCheckboxBtn;
}

export default TaskCheckboxBtn;
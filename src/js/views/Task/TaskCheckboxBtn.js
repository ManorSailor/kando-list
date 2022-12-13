import { createElement } from "../../utils";

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

function TaskCheckboxBtn(task, callback = () => task.toggleState()) {
    const taskCheckboxBtn = btnView(task, callback);

    const taskCheckbox = (() => {
        const taskCheckbox = taskCheckboxBtn.querySelector('#task-checkbox > input');
        return {
            update: () => (!task.active) ? taskCheckbox.setAttribute('checked', '') : taskCheckbox.removeAttribute('checked'),
        }
    })();

    task.addObserver('TASK_TOGGLE', taskCheckbox);

    return taskCheckboxBtn;
}

export default TaskCheckboxBtn;
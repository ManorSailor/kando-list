import { createElement } from "../../../utils";

const btnBody = createElement(`
<li class="">
    <button class="flex items-center opacity-[0.7]" aria-label="Mark task as complete">
        <iconify-icon class="p-2" icon="octicon:check-circle-16" width="21" aria-hidden="true"></iconify-icon>
    </button>
</li>
`);

/**
 * Creates a btn Node & assign click listener
 * @param {Function} callback 
 * @returns {Node}
 */
function btnView(callback) {
    const btnView = btnBody.cloneNode(true);
    btnView.addEventListener('click', callback);
    return btnView;
}

/**
 * Add or remove class on the node object
 * @param {Node} node 
 * @param {String} state 
 * @param {Task} task 
 */
function toggleBtnState(node, state, task) {
    if (!task.active) {
        node.classList.add(state);
    } else {
        node.classList.remove(state);
    }
}

/**
 * Create a Checkbox btn & attach observers
 * @param {Task} task 
 * @returns {Node}
 */
function TaskCheckboxBtn(task) {
    const taskCheckboxBtn = btnView(() => task.toggleState());

    const taskCheckbox = {
        node: taskCheckboxBtn.querySelector('li > button'),
        update: function (task) {
            toggleBtnState(this.node, 'task-active', task);
        },
    };

    task.addObserver('TASK_TOGGLED', taskCheckbox);

    toggleBtnState(taskCheckbox.node, 'task-active', task);
    return taskCheckboxBtn;
}

export default TaskCheckboxBtn;
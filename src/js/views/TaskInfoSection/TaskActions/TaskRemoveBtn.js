import { createElement } from "../../../utils";

const btnBody = createElement(`
<li class="">
    <button class="flex items-center opacity-[0.7]" aria-label="Remove task">
        <iconify-icon class="p-2" icon="octicon:x-circle-16" width="21" aria-hidden="true"></iconify-icon>
    </button>
</li>
`);

/**
 * Create a Remove Task btn & attach listeners
 * @param {Task} task
 * @param {Function} callback
 * @returns {Node}
 */
function TaskRemoveBtn(task, callback = () => { throw 'Callback missing!' }) {
    const taskRemoveBtn = btnBody.cloneNode(true);
    taskRemoveBtn.addEventListener('click', () => callback(task));
    return taskRemoveBtn;
}

export default TaskRemoveBtn;
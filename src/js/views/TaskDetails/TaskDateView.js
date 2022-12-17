import { createElement } from "../../utils";

const taskDateBody = createElement(`
<li class="">
    <button class="bg-card-bg inline-flex items-center gap-1 text-[0.8215rem] tracking-tight px-4 py-1 relative transition-transform rounded-2xl shadow-md hover:translate-y-[-2px]" aria-label="Due Date">
        <input class="absolute top-0 left-0 invisible" type="date" name="date">
        <iconify-icon class="text-task-date-icon p-0 hover:text-task-date-icon" icon="octicon:bell-24" width="18" aria-hidden="true"></iconify-icon>
        <p class="">Due Date</p>
    </button>
</li>
`);

/**
 * Create a Task Date btn & attach listeners
 * @param {Task} task
 * @returns {Node}
 */
function TaskDateView(task) {
    const taskDateView = taskDateBody.cloneNode(true);
    return taskDateView;
}

export default TaskDateView;
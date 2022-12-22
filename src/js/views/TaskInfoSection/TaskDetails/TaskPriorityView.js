import { createElement } from "../../../utils";

const taskPriorityBody = createElement(`
<li class="">
    <button class="bg-card-bg inline-flex items-center gap-1 text-[0.8215rem] tracking-tight px-4 py-1 transition-transform rounded-2xl shadow-md hover:translate-y-[-2px]" aria-label="Priority">
        <iconify-icon class="text-accent p-0" icon="octicon:hash-24" width="18" aria-hidden="true"></iconify-icon>
        <p class="">Priority</p>
    </button>
</li>
`);

/**
 * Create a Task Priority btn & attach listeners
 * @param {Task} task
 * @returns {Node}
 */
function TaskPriorityView(task) {
    const taskPriorityView = taskPriorityBody.cloneNode(true);
    return taskPriorityView;
}

export default TaskPriorityView;
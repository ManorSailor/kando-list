import { createElement } from "../../../utils";

const subTasksBody = createElement(`
<!-- Task Subtasks (Post MVP) -->
<ul class=""></ul>
`);

/**
 * Generate TaskSubTasksView node & attach listener to it
 * @param {Task} task
 * @returns {Node}
 */
function TaskSubTasksView(task) {
    const subTasksView = subTasksBody.cloneNode(true);
    return subTasksView;
}

export default TaskSubTasksView;
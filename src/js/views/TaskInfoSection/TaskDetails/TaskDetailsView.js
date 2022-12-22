import { createElement } from "../../../utils";
import TaskChangeListView from "./TaskChangeListView";
import TaskDateView from "./TaskDateView";
import TaskPriorityView from "./TaskPriorityView";

const taskDetailsBody = createElement(`<!-- Task Details --><ul class="flex items-center gap-4 flex-wrap"></ul>`);

/**
 * Creates & returns TaskDetailsView node
 * @param {Task} task 
 * @param {List} list 
 * @returns {Node}
 */
function TaskDetailsView(task, list) {
    const taskDetailsView = taskDetailsBody.cloneNode(true);

    const taskDateView = TaskDateView(task);
    const taskChangeListView = TaskChangeListView(list);
    const taskPriorityView = TaskPriorityView(task);

    taskDetailsView.append(taskDateView, taskChangeListView, taskPriorityView);

    return taskDetailsView;
}

export default TaskDetailsView;
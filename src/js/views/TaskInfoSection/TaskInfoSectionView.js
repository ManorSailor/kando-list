import { createElement, clearNode } from "../../utils";
import TaskInfoViews from "./TaskInfoViews";

const taskInfoBody = createElement(`<!-- Task Info --><section class="bg-main w-full min-w-[300px] max-w-xl flex-grow flex p-4 rounded-2xl shadow-md overflow-hidden"></section>`);

/**
 * Generate TaskInfoViews & render the task info in the passed Node
 * @param {Task} task 
 * @param {List} list 
 * @param {Node} TaskInfoSection 
 * @param {Function} removeTaskHandler 
 */
function renderInfo(task, list, TaskInfoSection, removeTaskHandler) {
    clearNode(TaskInfoSection);

    if (task) {
        const taskInfoViews = TaskInfoViews(task, list, removeTaskHandler);
        TaskInfoSection.appendChild(taskInfoViews);
    }
}

/**
 * Generates a TaskInfoSection on a per list basis
 * @param {List} list
 * @param {Function} removeTaskHandler 
 * @returns {Node}
 */
function TaskInfoSection(list, removeTaskHandler) {
    const TaskInfoSection = taskInfoBody.cloneNode(true);

    const taskObserver = {
        update: (data) => renderInfo(data.task, list, TaskInfoSection, removeTaskHandler),
    };

    list.addObserver('ACTIVE_TASK_CHANGED', taskObserver);

    renderInfo(list.activeTask, list, TaskInfoSection, removeTaskHandler);
    
    return TaskInfoSection;
}

export default TaskInfoSection;
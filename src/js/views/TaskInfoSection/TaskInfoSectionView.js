import { createElement, clearNode } from "../../utils";
import TaskInfoViews from "./TaskInfoViews";

const taskInfoBody = createElement(`<!-- Task Info --><section class="bg-main w-full min-w-[300px] max-w-xl flex-grow flex p-4 rounded-2xl shadow-md overflow-hidden"></section>`);

/**
 * Displays information about a task when it's clicked
 * @param {Task} task
 */
function onClickTask(task) {
    throw 'onClickTask is undefined!';
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
        update: (data) => {
            clearNode(TaskInfoSection);
            const taskInfoViews = TaskInfoViews(data.task ?? data, list, removeTaskHandler);
            TaskInfoSection.appendChild(taskInfoViews);
        }
    };

    onClickTask = (task) => list.notifyObservers('TASK_ACCESSED', task);

    list.addObserver('TASK_ADDED', taskObserver);
    list.addObserver('TASK_REMOVED', taskObserver);
    list.addObserver('TASK_ACCESSED', taskObserver);

    return TaskInfoSection;
}

export default TaskInfoSection;

export {
    onClickTask,
}

import { createElement, clearNode } from "../../utils";
import TaskInfoViews from "./TaskInfoViews";

const taskInfoBody = createElement(`<!-- Task Info --><section class="bg-main w-full min-w-[300px] max-w-xl flex-grow flex p-4 rounded-2xl shadow-md overflow-hidden"></section>`);

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
            const taskInfoViews = TaskInfoViews(data.task, list, removeTaskHandler);
            TaskInfoSection.appendChild(taskInfoViews);
        }
    };

    list.addObserver('TASK_REMOVED', taskObserver);
    list.addObserver('ACTIVE_TASK_CHANGED', taskObserver);

    return TaskInfoSection;
}

export default TaskInfoSection;
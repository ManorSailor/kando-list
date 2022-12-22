import { createElement } from "../../utils";
import TaskFormView from "./TaskForm/TaskFormView";
import TaskListView from "./TaskList/TaskListView";

const sectionBody = createElement(`<!-- Tasks --><section class="bg-main flex-grow flex flex-col w-full min-w-[300px] max-w-xl rounded-2xl shadow-md overflow-hidden"></section>`);

/**
 * Generate TaskSectionView composing TaskListView & TaskFormView
 * @param {List} list 
 * @param {Function} formHandler 
 * @param {Function} switchActiveTask 
 * @returns {Node}
 */
function TaskSectionView(list, formHandler, switchActiveTask) {
    const taskSection = sectionBody.cloneNode(true);

    const taskListView = TaskListView(list, switchActiveTask);
    const taskFormView = TaskFormView(formHandler);

    taskSection.append(taskListView, taskFormView);
    
    return taskSection;
}

export default TaskSectionView;
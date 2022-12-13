import TaskListView from "../TaskList/TaskListView";
import TaskFormView from "../TaskForm/TaskFormView";
import { createElement } from "../../utils";

const sectionBody = createElement(`<!-- Tasks --><section class="bg-main flex-grow flex flex-col w-full min-w-[300px] max-w-xl rounded-2xl shadow-md overflow-hidden"></section>`);

/**
 * 
 * @param {List} list 
 * @param {Function} formHandler 
 * @returns {Node}
 */
function TaskSectionView(list, formHandler) {
    const taskSection = sectionBody.cloneNode(true);

    const taskListView = TaskListView(list);
    const taskFormView = TaskFormView(formHandler);

    taskSection.append(taskListView, taskFormView);
    
    return taskSection;
}

export default TaskSectionView;
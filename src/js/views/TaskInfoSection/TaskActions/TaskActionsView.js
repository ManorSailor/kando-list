import { createElement } from "../../../utils";
import TaskCheckboxBtn from "./TaskCheckboxBtn";
import TaskRemoveBtn from "./TaskRemoveBtn";

const taskActionsBody = createElement(`<!-- Task Actions --><ul class="flex self-end"></ul>`);

/**
 * Creates & returns TaskActionsView
 * @param {Task} task 
 * @param {Function} removeTaskHandler 
 * @returns {Node}
 */
function TaskActionsView(task, removeTaskHandler) {
    const taskActionsView = taskActionsBody.cloneNode(true);

    const taskCheckboxBtn = TaskCheckboxBtn(task);
    const taskRemoveBtn = TaskRemoveBtn(task, removeTaskHandler);

    taskActionsView.append(taskCheckboxBtn, taskRemoveBtn);

    return taskActionsView;
}

export default TaskActionsView;
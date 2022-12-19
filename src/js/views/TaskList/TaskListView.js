import { createElement } from "../../utils";
import TaskView from "../Task/TaskView";

const taskListBody = createElement(`<!-- Tasks List --><div id="task-list" class="flex-grow p-4 overflow-x-hidden overflow-y-auto rounded-xl pretty-scrollbar"></div>`);

/**
 * Handles populating TaskListView with TaskViews
 * @param {Task} tasks 
 * @param {Node} taskList 
 * @param {Function} switchActiveTask 
 */
function renderTasks(tasks, taskList, switchActiveTask) {
    tasks.forEach(task => {
        const taskView = TaskView(task, switchActiveTask);
        taskList.insertBefore(taskView, taskList.firstChild);
    });
}

/**
 * Creates TaskListView & handles updates as List object changes
 * @param {List} list 
 * @param {Function} switchActiveTask 
 * @returns {Node}
 */
function TaskListView(list, switchActiveTask) {
    const taskListView = taskListBody.cloneNode(true);

    const addTaskView = {
        update: (data) => renderTasks([data.task], taskListView, switchActiveTask),
    };

    const removeTaskView = {
        update: (data) => {
            const task = data.task;
            const taskNode = [...taskListView.children].find(taskNode => taskNode.getAttribute('data-id') === task.id.toString());
            taskNode.remove();
        },
    };

    list.addObserver('TASK_ADDED', addTaskView);
    list.addObserver('TASK_REMOVED', removeTaskView);

    renderTasks(list.tasks, taskListView, switchActiveTask);
    return taskListView;
}

export default TaskListView;
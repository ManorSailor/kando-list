import { createElement } from "../../../utils";
import TaskView from "../Task/TaskView";

const taskListBody = createElement(`<!-- Tasks List --><div id="task-list" class="flex-grow p-4 overflow-x-hidden overflow-y-auto rounded-xl pretty-scrollbar"></div>`);

/**
 * Convert tasks into Task objects & render them in the provided node
 * @param {Node} taskList 
 * @param {Function} switchActiveTask 
 * @param {...Task} tasks 
 */
function renderTasks(taskList, switchActiveTask, ...tasks) {
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

    const addTaskObserver = {
        update: (data) => renderTasks(taskListView, switchActiveTask, data.task),
    };

    const removeTaskObserver = {
        update: (data) => {
            const task = data.task;
            const taskNode = [...taskListView.children].find(taskNode => taskNode.getAttribute('data-id') === task.id.toString());
            taskNode.remove();
        },
    };

    list.addObserver('TASK_ADDED', addTaskObserver);
    list.addObserver('TASK_REMOVED', removeTaskObserver);

    renderTasks(taskListView, switchActiveTask, ...list.tasks);
    return taskListView;
}

export default TaskListView;
import { createElement } from "../../../utils";

const titleBody = ({ title }) => createElement(`<!-- Task Title --><textarea class="bg-transparent w-full h-10 font-semibold text-2xl px-2 py-1 hover:bg-black focus-within:bg-black transition-colors duration-200 outline-none rounded-lg resize-none caret-accent pretty-scrollbar overflow-auto" spellcheck="false" name="title" maxlength="250" aria-label="Task Title">${title}</textarea>`);

/**
 * Generate TaskTitleView node & attach listener to it
 * @param {Task} task
 * @returns {Node}
 */
function TaskTitleView(task) {
    const taskInfoTitle = titleBody(task);
    taskInfoTitle.addEventListener('change', (e) => task.updateTask(e.target.value));
    return taskInfoTitle;
}

export default TaskTitleView;
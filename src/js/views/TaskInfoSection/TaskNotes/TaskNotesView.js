import { createElement } from "../../../utils";

const taskNotesBody = createElement(`
<!-- Task Notes -->
<div class="flex flex-col gap-2 justify-start">
    <p class="text-gray-400 text-xs font-semibold tracking-widest ml-2 select-none">NOTES</p>
    <input id="task-notes" class="bg-transparent px-2 py-1 hover:bg-black focus-within:bg-black transition-colors duration-200 outline-none rounded-lg caret-accent" type="text" placeholder="Insert your notes here">
</div>
`);

/**
 * Generate TaskNotesView node & attach listener to it
 * @param {Task} task
 * @returns {Node}
 */
function TaskNotesView(task) {
    const taskInfoTitle = taskNotesBody.cloneNode(true);
    return taskInfoTitle;
}

export default TaskNotesView;
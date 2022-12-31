import { createElement } from "../../../utils";

const taskNotesBody = ({ notes }) => createElement(`
<!-- Task Notes -->
<div class="flex flex-col gap-2 justify-start">
    <p class="text-gray-400 text-xs font-semibold tracking-widest ml-2 select-none">NOTES</p>
    <input id="task-notes" class="bg-transparent px-2 py-1 hover:bg-black focus-within:bg-black transition-colors duration-200 outline-none rounded-lg caret-accent" type="text" placeholder="Insert your notes here" value="${(notes) ? notes : ''}">
</div>
`);

/**
 * Generate TaskNotesView node & attach listener to it
 * @param {Task} task
 * @returns {Node}
 */
function TaskNotesView(task) {
    const taskInfoTitle = taskNotesBody(task);

    const notesInput = taskInfoTitle.querySelector('input');

    notesInput.addEventListener('change', (e) => {
        const notes = e.target.value;
        task.notes = notes;
    });

    const notesObserver = {
        update: (data) => notesInput.textContent = data.notes,
    }

    task.addObserver('TASK_NOTES_CHANGED', notesObserver);

    return taskInfoTitle;
}

export default TaskNotesView;
import { createElement } from "../../utils";

const changeListBody = ({ name }) => createElement(`
<li class="">
    <button class="bg-card-bg inline-flex items-center gap-1 text-[0.8215rem] tracking-tight px-4 py-1 transition-transform rounded-2xl shadow-md hover:translate-y-[-2px]" aria-label="Move Task">
        <iconify-icon class="text-task-list-icon p-0 hover:text-task-list-icon" icon="octicon:project-roadmap-24" width="18" aria-hidden="true"></iconify-icon>
        <p class="">${name}</p>
    </button>
</li>
`);

/**
 * Create a Task Change List btn & attach listeners
 * @param {List} list
 * @returns {Node}
 */
function TaskChangeListView(list) {
    const changeListView = changeListBody(list);
    return changeListView;
}

export default TaskChangeListView;
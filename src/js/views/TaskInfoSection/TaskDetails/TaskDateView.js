import { createElement, dateConverter } from "../../../utils";

const taskDateBody = ({ date }) => createElement(`
<li class="">
    <button class="bg-card-bg inline-flex items-center gap-1 text-[0.8215rem] tracking-tight px-4 py-1 relative transition-transform rounded-2xl shadow-md hover:translate-y-[-2px]" aria-label="Due Date">
        <input class="absolute top-0 left-0 invisible" type="date" name="date" min="" value="${(date) ? dateConverter(date) : ''}">
        <iconify-icon class="text-task-date-icon p-0 hover:text-task-date-icon" icon="octicon:bell-24" width="18" aria-hidden="true"></iconify-icon>
        <p class="">${(date) ? date : 'Due Date'}</p>
    </button>
</li>
`);

/**
 * Create a Task Date btn & attach listeners
 * @param {DetailedTask} task
 * @returns {Node}
 */
function TaskDateView(task) {
    const taskDateView = taskDateBody(task);

    const datePicker = taskDateView.querySelector('input');

    // Show the datePicker when clicked, input is hidden for aesthetics reason
    taskDateView.addEventListener('click', () => datePicker.showPicker());

    datePicker.addEventListener('change', (e) => {
        const date = e.target.value;
        task.date = date;
    });

    const dateObserver = {
        date: taskDateView.querySelector('p'),
        update: function (data) {
            this.date.textContent = (data.date) ? data.date : 'Due Date';
        },
    };

    task.addObserver('TASK_DATE_CHANGED', dateObserver);

    return taskDateView;
}

export default TaskDateView;
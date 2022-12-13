import { createElement } from "../../utils";

const formBody = createElement(`
<!-- New Task -->
<form id="task-form" action="#" class="bg-card-bg max-h-[70px] flex-grow flex items-center gap-4 p-4 rounded-b-xl task-form">
    <input class="bg-card-bg-alt flex-grow p-2 px-4 border-accent transition-colors duration-300 rounded-3xl" type="text" name="title" placeholder="What do you want to do?">
    <button class="bg-card-bg-alt flex items-center p-2 rounded-full" aria-label="Add Task">
        <iconify-icon class="text-txt-clr-alt" icon="octicon:arrow-up-16" width="20" aria-hidden="true"></iconify-icon>
    </button>
</form>
`);

/**
 * Data Parser for parsing data from forms
 * @param {Event} e 
 * @returns {Object}
 */
function dataParser(e) {
    e.preventDefault();
    const formFields = [...e.target];

    return formFields.reduce((obj, field) => {
        const fieldName = field.getAttribute('name');
        obj[fieldName] = field.value;
        return obj;
    }, {});
}

/**
 * Generate FormView & returns it
 * @param  {Function} callback
 * @returns {Node}
 */
function TaskFormView(callback = () => { throw 'Missing Callback!' }) {
    const formView = formBody.cloneNode(true);
    
    formView.addEventListener('submit', (e) => {
        const data = dataParser(e);
        callback(data);
    });

    return formView;
}

export default TaskFormView;
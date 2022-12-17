import { createElement } from "../../utils";
import TaskActionsView from "../TaskActions/TaskActionsView";
import TaskInfoTitle from "../TaskInfoTitle/TaskInfoTitleView";
import TaskDetailsView from "../TaskDetails/TaskDetailsView";
import TaskNotesView from "../TaskNotes/TaskNotesView";
import TaskSubTasksView from "../TaskSubTasks/TaskSubTasksView";
import TaskAttachmentsView from "../TaskAttachments/TaskAttachmentsView";

const infoBody = ({ id }) => createElement(`<article class="flex-grow flex flex-col gap-4 rounded-2xl overflow-hidden" data-id="${id}"></article>`);

/**
 * Generates TaskInfoViews and returns it
 * @param {Task} task
 * @param {List} list
 * @param {Function} removeTaskHandler 
 * @returns {Node}
 */
function TaskInfoViews(task, list, removeTaskHandler) {
    const infoViews = infoBody(task);

    const taskActionsView         = TaskActionsView(task, removeTaskHandler);
    const taskInfoTitleView       = TaskInfoTitle(task);
    const taskDetailsView         = TaskDetailsView(task, list);
    const taskNotesView           = TaskNotesView(task);
    const taskSubTasksView        = TaskSubTasksView(task);
    const taskAttachmentsView     = TaskAttachmentsView(task);

    infoViews.append(
        taskActionsView, 
        taskInfoTitleView, 
        taskDetailsView, 
        taskNotesView, 
        taskSubTasksView, 
        taskAttachmentsView
    );

    return infoViews;
}

export default TaskInfoViews;
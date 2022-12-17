import { createElement } from "../../utils";

const attachmentsBody = createElement(`
<!-- Task Attachments (Post MVP) -->
<div class=""></div>
`);

/**
 * Generate TaskAttachmentsView node & attach listener to it
 * @param {Task} task
 * @returns {Node}
 */
function TaskAttachmentsView(task) {
    const attachmentsView = attachmentsBody.cloneNode(true);
    return attachmentsView;
}

export default TaskAttachmentsView;
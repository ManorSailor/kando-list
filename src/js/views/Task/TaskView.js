import TaskCheckboxBtn from "./TaskCheckboxBtn";
import TaskInfoBtn from "./TaskInfoBtn";
import { createElement } from "../../utils";

const taskBody = ({ id }) => createElement(`<article class="flex items-center w-full hover:bg-gray-600/50 transition-colors rounded-lg overflow-hidden animate-[fade-in_250ms_cubic-bezier(0.4,_0,_0.2,_1)]" data-id="${id}"></article>`);

function TaskView(task, callback) {
    const taskView = taskBody(task);

    const taskCheckboxBtn = TaskCheckboxBtn(task);
    const taskInfoBtn = TaskInfoBtn(task, () => console.log('Will work'));

    taskView.append(taskCheckboxBtn, taskInfoBtn);

    return taskView;
}

export default TaskView;
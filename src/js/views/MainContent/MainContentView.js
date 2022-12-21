import TaskSectionView from "../TaskSection/TaskSectionView";
import TaskInfoSection from "../TaskInfoSection/TaskInfoSectionView";
import { clearNode } from "../../utils";

const main = document.getElementById('content');

/**
 * 
 * @param {List} list 
 * @param {Function} addTaskHandler 
 * @param {Function} removeTaskHandler 
 * @param {Function} switchActiveTask 
 */
function renderViews(list, addTaskHandler, removeTaskHandler, switchActiveTask) {
    clearNode(main);

    if (list) {
        const taskSectionView = TaskSectionView(list, addTaskHandler, switchActiveTask);
        const taskInfoSection = TaskInfoSection(list, removeTaskHandler);
        
        main.append(taskSectionView, taskInfoSection);
    }
}

/**
 * 
 * @param {Kando} kando 
 * @param {Function} addTaskHandler 
 * @param {Function} removeTaskHandler 
 * @param {Function} addListHandler 
 * @param {Function} switchActiveTask 
 */
function MainContentView(kando, addTaskHandler, removeTaskHandler, switchActiveTask) {
    const listObserver = {
        update: (data) => renderViews(data.list, addTaskHandler, removeTaskHandler, switchActiveTask),
    };

    kando.addObserver('ACTIVE_LIST_CHANGED', listObserver);

    renderViews(kando.activeList, addTaskHandler, removeTaskHandler, switchActiveTask);
}

export default MainContentView;
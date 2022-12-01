import LocalDBManager from "../db/LocalDB";
import dataObserver from "./DataObserver";
import Kando from "../models/Kando/Kando";
import List from "../models/List/List";
import Task from "../models/Task/Task";

function init() {
    const localdb = new LocalDBManager('kando');
    
    const appData = localdb.fetch();

    if (appData.lists) populateModels(appData);

    // Initialize data observer. Bind context of save method to localdb
    dataObserver.init(localdb.save.bind(localdb), Kando);
}

/**
 * Handles populating the models with objects of proper type on each page load
 * @param {Object} data 
 */
function populateModels(appData) {
    const lists = appData.lists;

    lists.forEach(listObj => {
        const list = new List(listObj);

        listObj.tasks.forEach(taskObj => {
            const task = new Task(taskObj);
            list.addTask(task);
        });

        Kando.addList(list);
    });
}

const dataController = { init };

export default dataController;
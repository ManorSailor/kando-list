import LocalDBManager from "../db/LocalDB";
import dataObserver from "./DataObserver";
import Kando from "../models/Kando/Kando";
import List from "../models/List/List";
import Task from "../models/Task/Task";

function init() {
    const localdb = new LocalDBManager('kando');
    
    const appData = localdb.fetch();

    if (appData.lists?.length) {
        reloadAppState(appData);
    } else {
        const defaultList = new List({ name: 'Personal' });
        Kando.addList(defaultList);
        localdb.save(Kando);
    }

    // Initialize data observer. Bind context of save method to localdb
    dataObserver.init(localdb.save.bind(localdb), Kando);
}

/**
 * Reload app state in memory by converting objects into proper types
 * @param {Object} data 
 */
function reloadAppState(appData) {
    const lists = appData.lists;

    lists.forEach(listObj => {
        const list = new List(listObj);

        listObj.tasks.forEach(taskObj => {
            const task = new Task(taskObj);
            list.addTask(task);
        });

        Kando.addList(list);
    });

    // Set the activeList to firstList on page Load
    Kando.activeList = Kando.firstList;
}

const dataController = { init };

export default dataController;
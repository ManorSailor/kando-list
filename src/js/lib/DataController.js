import LocalDBManager from "../db/LocalDB";
import dataObserver from "./DataObserver";

/**
 * DataController initializer
 * @param {Kando} kando 
 * @param {Constructor} List 
 * @param {Constructor} Task 
 */
function init(kando, List, Task) {
    const localdb = new LocalDBManager('kando');
    
    const appData = localdb.fetch();

    if (appData.lists?.length) {
        reloadAppState(kando, List, Task, appData);
    } else {
        initDefaultState(kando, localdb);
    }

    // Initialize data observer. Bind context of save method to localdb
    dataObserver.init(localdb.save.bind(localdb), kando);
}

/**
 * Initialize default app state through a pre-defined list
 * @param {Kando} kando 
 * @param {LocalDBManager} localdb 
 */
function initDefaultState(kando, localdb) {
    const defaultList = new List({ name: 'Personal' });
    kando.addList(defaultList);
    localdb.save(kando);
}

/**
 * Reload app state in memory by converting objects into proper types
 * @param {Kando} kando 
 * @param {Constructor} List 
 * @param {Constructor} Task 
 * @param {Object} appData 
 */
function reloadAppState(kando, List, Task, appData) {
    const lists = appData.lists;

    lists.forEach(listObj => {
        const list = new List(listObj);

        listObj.tasks.forEach(taskObj => {
            const task = new Task(taskObj);
            list.addTask(task);
        });

        kando.addList(list);
    });

    // Set the activeList to firstList on page Load
    kando.activeList = kando.firstList;
}

const dataController = { init };

export default dataController;
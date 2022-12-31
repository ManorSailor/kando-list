function removeListBtn(callback) {
    const removeListBtn = document.getElementById('remove-list-btn');
    removeListBtn.addEventListener('click', callback);
}

function markAllTasksBtn(callback) {
    const markAllTasksBtn = document.getElementById('mark-all-btn');
    markAllTasksBtn.addEventListener('click', callback);
}

function editListName(kando) {
    const listName = document.getElementById('nav-list-name');
    const observer = new MutationObserver(onListNameChange);

    function renderListName(name) {
        listName.textContent = name;
    }
    
    const listNameObserver = {
        update: (data) => {
            if (data.list) {
                renderListName(data.list.name);
            }
        },
    };

    function extractNewName(mutationList) {
        return mutationList[0].target.textContent;
    }

    function onListNameChange(mutationList) {
        const newName = extractNewName(mutationList);
        // Notify list model
        kando.activeList.updateName(newName);
    }

    // Observe the listName & all of its child nodes for text changes
    observer.observe(listName, { characterDataOldValue: true, subtree: true });

    // Observe the kando model for active list changes
    kando.addObserver('ACTIVE_LIST_CHANGED', listNameObserver);
    
    // Render initial state
    renderListName(kando.activeList.name);
}

/**
 * Handle Navbar button actions
 * @param {Kando} kando 
 * @param {Function} removeListHandler 
 * @param {Function} markAllTasks 
 */
function navActionsInit(kando, removeListHandler, markAllTasks) {
    removeListBtn(() => removeListHandler(kando.activeList));
    markAllTasksBtn(() => markAllTasks(kando.activeList?.tasks));
    editListName(kando);
}

export default navActionsInit;
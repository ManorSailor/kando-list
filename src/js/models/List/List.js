/**
 * TODO: Convert to Factory Functions
 * TODO: Make List factory inherit from MemoryDb factory or class
 * TODO: Get rid of duplicate code
 * 
 */
class List {
    static #internalID = 0;

    constructor(name) {
        this.id = List.#generateId();
        this.name = name;
        this.tasks = [];
    }

    static #generateId() {
        return List.#internalID++;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task) {
        this.tasks = this.tasks.filter(item => item.id !== task.id);
    }

    find(val, key='id') {
        return this.tasks.find(item => item[key] === val);
    }
}

export default List;
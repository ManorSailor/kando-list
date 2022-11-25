/**
 * 
 */
class Task {
    static #internalID = 0;

    constructor(desc) {
        this.id = Task.#generateId();
        this.desc = desc;
        this.active = true;
    }

    static #generateId() {
        return Task.#internalID++;
    }

    toggleTask() {
        return this.active = !this.active;
    }
}

export default Task;
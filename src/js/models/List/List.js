import Memory from "../../db/Memory";
import Observable from "../../lib/Observable";
import { makeIdGen } from "../../utils";

const idGen = makeIdGen();

/**
 * List Class (Base)
 * @param {*} param0 
 * @returns {List}
 */
class List extends Observable {
    #tasks;

    constructor({ name }) {
        super();
        this.id = idGen();
        this.name = name;
        this.#tasks = new Memory();
    }

    get tasks() {
        return this.#tasks.fetch();
    }

    addTask(task) {
        this.#tasks.add(task);
        super.notifyObservers(this);
    }

    removeTask(task) {
        this.#tasks.remove(task);
        super.notifyObservers(this);
    }

    find(task, byKey='id') {
        return this.#tasks.find(task, byKey);
    }

    toJSON() {
        const obj = { ...this, tasks: this.tasks };
        return obj;
    }
}

export default List;
import Memory from "../../db/Memory";
import globalObservers from "../../lib/GlobalObservers";
import Observable from "../../lib/Observable";
import { makeIdGen, isEmptyValue } from "../../utils";

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
        this.addObserver(globalObservers.eventType, ...globalObservers.observers);
    }

    get tasks() {
        return this.#tasks.fetch();
    }

    updateName(name) {
        if (!isEmptyValue(name)) {
            this.name = name;
            this.notifyObservers('LIST_NAME_CHANGED', this);
        }
    }

    notifyObservers(eventType, data) {
        super.notifyObservers(eventType, data);
        super.notifyObservers(globalObservers.eventType, data);
    }

    addTask(task, eventType = 'TASK_ADD') {
        this.#tasks.add(task);
        this.notifyObservers(eventType, { list: this, task });
    }

    removeTask(task, eventType = 'TASK_REMOVE') {
        this.#tasks.remove(task);
        this.notifyObservers(eventType, { list: this, task });
    }

    find(task, byKey = 'id') {
        return this.#tasks.find(task, byKey);
    }

    toJSON() {
        const obj = { ...this, tasks: this.tasks };
        return obj;
    }
}

export default List;
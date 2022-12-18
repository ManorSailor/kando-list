import globalObservers from "../../lib/GlobalObservers";
import Observable from "../../lib/Observable";
import { isEmptyValue, makeIdGen } from "../../utils";

const idGen = makeIdGen();

/**
 * Task Class (Base)
 * @param {*} param0 
 * @returns {Task}
 */
class Task extends Observable {
    constructor({ title, active = true }) {
        super();
        this.id = idGen();
        this.title = title;
        this.active = active;
        this.addObserver(globalObservers.eventType, ...globalObservers.observers);
    }

    notifyObservers(eventType) {
        super.notifyObservers(eventType, this);
        super.notifyObservers(globalObservers.eventType, this);
    }

    updateTask(title, eventType = 'TASK_TITLE_CHANGED') {
        if (!isEmptyValue(title)) {
            this.title = title;
            this.notifyObservers(eventType, this);
        }
    }

    toggleState(eventType = 'TASK_TOGGLED') {
        this.active = !this.active;
        this.notifyObservers(eventType, this);
    }
}

export default Task;
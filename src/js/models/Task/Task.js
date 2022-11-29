import Observable from "../../lib/Observable";
import { makeIdGen } from "../../utils";

const idGen = makeIdGen();

/**
 * Task Class (Base)
 * @param {*} param0 
 * @returns {Task}
 */
class Task extends Observable {
    constructor({ desc, active = true }) {
        super();
        this.id = idGen();
        this.desc = desc;
        this.active = active;
    }

    updateTask(desc) {
        this.desc = desc;
        super.notifyObservers(this);
    }

    toggleState() {
        this.active = !this.active;
        super.notifyObservers(this);
    }
}

export default Task;
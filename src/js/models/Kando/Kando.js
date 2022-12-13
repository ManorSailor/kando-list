import Memory from "../../db/Memory";
import globalObservers from "../../lib/GlobalObservers";
import Observable from "../../lib/Observable";

// Responsible for handling app data
class Kando extends Observable {
    #lists;

    constructor() {
        super();
        this.#lists = new Memory();
        this.addObserver(globalObservers.eventType, ...globalObservers.observers);
    }

    get lists() {
        return this.#lists.fetch();
    }

    notifyObservers(eventType, data) {
        super.notifyObservers(eventType, data);
        super.notifyObservers(globalObservers.eventType, data);
    }

    addList(list, eventType = 'LIST_ADD') {
        this.#lists.add(list);
        this.notifyObservers(eventType, { kando: this, list });
    }

    removeList(list, eventType = 'LIST_REMOVE') {
        this.#lists.remove(list);
        this.notifyObservers(eventType, { kando: this, list });
    }

    find(list, byKey='id') {
        return this.#lists.find(list, byKey);
    }

    toJSON() {
        const obj = { ...this, lists: this.lists };
        return obj;
    }
}

export default new Kando();
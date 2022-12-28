import Memory from "../../db/Memory";
import globalObservers from "../../lib/GlobalObservers";
import Observable from "../../lib/Observable";

// Responsible for handling app data
class Kando extends Observable {
    #lists;
    #activeList;

    constructor() {
        super();
        this.#lists = new Memory();
        this.addObserver(globalObservers.eventType, ...globalObservers.observers);
    }

    get lists() {
        return this.#lists.fetch();
    }

    get firstList() {
        return this.lists[0];
    }

    get activeList() {
        return this.#activeList;
    }

    set activeList(list) {
        const lastList = this.activeList;
        this.#activeList = list;
        this.notifyObservers('ACTIVE_LIST_CHANGED', { kando: this, list, lastList })
    }

    notifyObservers(eventType, data) {
        super.notifyObservers(eventType, data);
        super.notifyObservers(globalObservers.eventType, data);
    }

    addList(list, eventType = 'LIST_ADDED') {
        this.#lists.add(list);
        this.activeList = list;
        this.notifyObservers(eventType, { kando: this, list });
    }

    removeList(list, eventType = 'LIST_REMOVED') {
        this.#lists.remove(list);
        this.activeList = this.firstList;
        this.notifyObservers(eventType, { kando: this, list });
    }

    find(list, byKey='id') {
        return this.#lists.find(list, byKey);
    }

    toJSON() {
        const obj = { ...this, lists: this.lists, activeList: this.activeList };
        return obj;
    }
}

export default Kando;
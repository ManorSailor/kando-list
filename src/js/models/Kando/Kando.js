import Memory from "../../db/Memory";
import Observable from "../../lib/Observable";

// Responsible for handling app data
class Kando extends Observable {
    #lists;

    constructor() {
        super();
        this.#lists = new Memory();
    }

    get lists() {
        return this.#lists.fetch();
    }

    addList(list) {
        this.#lists.add(list);
        super.notifyObservers(this);
    }

    removeList(list) {
        this.#lists.remove(list);
        super.notifyObservers(this);
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
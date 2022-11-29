import Memory from "../db/Memory";

class Observable {
    #observers;

    constructor() {
        this.#observers = new Memory();
    }

    addObserver(observer) {
        if (!observer.update) throw 'Observer is missing update method';
        this.#observers.add(observer);
    }

    removeObserver(observer) {
        this.#observers.remove(observer);
    }

    notifyObservers(data) {
        this.#observers.fetch().forEach(obj => obj.update(data));
    }
}

export default Observable;
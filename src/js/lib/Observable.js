import Memory from "../db/Memory";

class Observable {
    #observers;

    constructor() {
        this.#observers = {};
    }

    #hasEvent(eventType) {
        if (!eventType) throw 'Event is missing';
        return Boolean(this.#observers[eventType]);
    }

    addObserver(eventType, ...observers) {
        if (!this.#hasEvent(eventType)) {
            this.#observers[eventType] = new Memory();
        }
        this.#observers[eventType].add(...observers);
    }

    removeObserver(eventType, observer) {
        if (this.#hasEvent(eventType)) {
            this.#observers[eventType].remove(observer);
        }
    }

    notifyObservers(eventType, data) {
        if (this.#hasEvent(eventType)) {
            const observers = this.#observers[eventType].fetch();
            observers.forEach(observer => observer.update(data));
        }
    }
}

export default Observable;
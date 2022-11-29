import Memory from "../db/Memory";

class Observable extends Memory {
    constructor() {
        super();
    }

    addObserver(observer) {
        if (!observer.update) throw 'Observer is missing update method';
        super.add(observer);
    }

    removeObserver(observer) {
        super.remove(observer);
    }

    notifyObservers(data) {
        super.fetch().forEach(obj => obj.update(data));
    }
}

export default Observable;
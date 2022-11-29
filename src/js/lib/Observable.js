import Memory from "../db/Memory";

/**
 * Observable base factory
 * @returns {Object}
 */
function Observable() {
    const observers = Memory();

    const addObserver = (observer) => {
        if (!observer.update) throw 'Observer is missing update method';
        observers.add(observer);
    }
    
    const removeObserver = (observer) => observers.remove(observer);

    const notifyObservers = (data) => {
        observers.fetch.forEach(observer => observer.update(data))
    }

    return { addObserver, removeObserver, notifyObservers };
}

export default Observable;
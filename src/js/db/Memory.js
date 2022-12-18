/**
 * Memory Base Class
 */
class Memory {
    #db;

    constructor() {
        this.#db = [];
    }

    fetch() {
        return this.#db;
    }

    add(item) {
        this.#db.push(item);
    }

    remove(item) {
        this.#db = this.#db.filter(element => element !== item);
    }

    find(val, key='id') {
        return this.#db.find(item => item[key] === val);
    }
}

export default Memory;
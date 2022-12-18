/**
 * Memory Base Class
 */
class Memory {
    constructor() {
        this.db = [];
    }

    fetch() {
        return this.db;
    }

    add(...items) {
        this.db.push(...items);
    }

    remove(item) {
        this.db = this.db.filter(element => element !== item);
    }

    find(val, key='id') {
        return this.db.find(item => item[key] === val);
    }
}

export default Memory;
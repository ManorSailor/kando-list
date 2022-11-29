/**
 * LocalDB low level api
 */
class LocalDB {
    constructor(name) {
        this.name = name;
        this.db = localStorage;
    }

    getObject() {
        const objString = this.db.getItem(this.name) || '[]';
        return JSON.parse(objString);
    }

    setObject(obj) {
        const objString = JSON.stringify(obj);
        this.db.setItem(this.name, objString);
    }
}

/**
 * LocalDB Wrapper. Dependency Inversion
 */
class LocalDBManager {
    #db;

    constructor(name) {
        this.#db = new LocalDB(name);
    }

    fetch() {
        return this.#db.getObject();
    }

    save(data) {
        this.#db.setObject(data);
    }
}

export default LocalDBManager;
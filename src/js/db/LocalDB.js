/**
 * 
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
 * 
 */
function LocalDBManager(name) {
    const db = new LocalDB(name);

    const fetch = () => db.getObject();
    const save = (data) => db.setObject(data);

    return { fetch, save };
}

export default LocalDBManager;
// Responsible for handling app data
class Kando {
    constructor() {
        this.lists = [];
    }

    getLists() {
        return this.lists;
    }

    addList(list) {
        this.lists.push(list);
    }

    removeList(list) {
        this.lists = this.lists.filter(item => item.id === list.id);
    }

    find(val, key='id') {
        return this.lists.find(item => item[key] === val);
    }
}

export default Kando;
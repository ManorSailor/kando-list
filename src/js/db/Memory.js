/**
 * Memory Factory, handles creating objs with common methods
 */
function Memory() {
    let db = [];

    const fetch = () => db;
    const add = (item) => db.push(item);
    const remove = (item) => db = db.filter(element => element === item);
    const find = (val, key = 'id') => db.find(item => item[key] === val);

    return { fetch, add, remove, find };
}

export default Memory;
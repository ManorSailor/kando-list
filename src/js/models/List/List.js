import Memory from "../../db/Memory";

/**
 * TODO: makeIdGen is violating DRY
 * 
 */
function makeIdGen(initialVal = 0) {
    return () => initialVal++;
}
const idGen = makeIdGen();

function List({ name }) {
    // Dependencies
    const memory = Memory();

    // Public Properties
    return {
        id: idGen(),
        name,
        getTasks:   memory.fetch,
        addTask:    memory.add,
        removeTask: memory.remove,
        find:       memory.find,
    }
}

export default List;
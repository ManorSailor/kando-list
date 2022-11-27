import Memory from "../../db/Memory";
import { makeIdGen } from "../../utils";

const idGen = makeIdGen();

/**
 * List Factory. 
 * @param {*} param0 
 * @returns {Object}
 */
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
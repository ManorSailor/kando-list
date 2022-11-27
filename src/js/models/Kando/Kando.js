import Memory from "../../db/Memory";

// Responsible for handling app data
const Kando = (() => {
    const memory = Memory();

    return {
        getLists:   memory.fetch,
        addList:    memory.add,
        removeList: memory.remove,
        find:       memory.find,
    };
})();

export default Kando;
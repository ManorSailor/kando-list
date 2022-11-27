import { makeIdGen } from "../../utils";

const idGen = makeIdGen();

/**
 * Task Factory (Base)
 * @param {*} param0 
 * @returns {Task}
 */
function Task({ desc, active = true }) {
    // Task instance methods
    const updateTask  = (data) => desc = data;
    const toggleState = () => active = !active;

    // Public Props
    return { 
        id: idGen(),
        // Need a getter bcz these are primitives & we need updated value on each call
        get desc() { return desc },
        get active() { return active },
        toggleState,
        updateTask,
     }
}

export default Task;
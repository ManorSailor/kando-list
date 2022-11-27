/**
 * 
 */
function makeIdGen(initialVal = 0) {
    return () => initialVal++;
}
const idGen = makeIdGen();

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
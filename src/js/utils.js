/**
 * Higher order func which returns an ID generator func
 * @param {Number} initialVal 
 * @returns {Function}
 */
function makeIdGen(initialVal = 0) {
    return () => initialVal++;
}

/**
 * Convert HTML string literal into DOM Node or DocumentFragment
 * @param {String} htmlStr
 * @param {Boolean} firstElementChild
 * @returns {Node|DocumentFragment}
 */
function createElement(htmlStr, firstElementChild = true) {
    const range = document.createRange();
    const docFrag = range.createContextualFragment(htmlStr);
    return (firstElementChild) ? docFrag.firstElementChild : docFrag;
}

/**
 * Handles removing child nodes from the passed node
 * @param {Node} node 
 */
function clearNode(node) {
    while (node.firstElementChild) {
        node.firstElementChild.remove();
    }
}

export {
    makeIdGen,
    createElement,
    clearNode,
}
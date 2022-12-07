/**
 * Higher order func which returns an ID generator func
 * @param {Number} initialVal 
 * @returns {Function}
 */
function makeIdGen(initialVal = 0) {
    return () => initialVal++;
}

/**
 * Convert HTML string literal into DOM Node(s), returns a DocumentFragment
 * @param {String} htmlStr
 * @param {Boolean} firstElementChild
 * @returns {DocumentFragment}
 */
function createElement(htmlStr, firstElementChild = true) {
    const range = document.createRange();
    const docFrag = range.createContextualFragment(htmlStr);
    return (firstElementChild) ? docFrag.firstElementChild : docFrag;
}

export {
    makeIdGen,
    createElement,
}
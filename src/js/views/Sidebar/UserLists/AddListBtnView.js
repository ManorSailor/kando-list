import { createElement } from "../../../utils";

const addListBody = createElement(`
<!-- New List -->
<button class="w-full flex items-center text-left p-2 hover:bg-gray-600/50 transition-colors duration-200 rounded-lg" aria-label="New List">
    <h3 class="flex-grow text-lg font-semibold">My Lists</h3>
    <iconify-icon class="hover:text-white p-0" icon="octicon:plus-16" width="18" aria-hidden="true"></iconify-icon>
</button>
`);

/**
 * Generates an AddListBtnView
 * @param {Function} addListHandler
 * @returns {Node}
 */
function AddListBtnView(addListHandler) {
    const addListView = addListBody.cloneNode(true);
    addListView.addEventListener('click', () => addListHandler('New List'));
    return addListView;
}

export default AddListBtnView;
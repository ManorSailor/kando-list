import { createElement } from "../../../utils";
import AddListBtnView from "./AddListBtnView";
import UserListsView from "./UserListsView";

const listWrapperBody = createElement(`
<!-- Lists Wrapper -->
<div class="flex-grow flex flex-col overflow-y-auto"></div>
`);

/**
 * Generates a UserListComponent
 * @param {Kando} kando
 * @param {Function} addListHandler
 * @returns {Node}
 */
function UserListComponent(kando, addListHandler) {
    const listWrapperView = listWrapperBody.cloneNode(true);

    const addListBtnView = AddListBtnView(addListHandler);
    const userListView   = UserListsView(kando);

    listWrapperView.append(addListBtnView, userListView);

    return listWrapperView;
}

export default UserListComponent;
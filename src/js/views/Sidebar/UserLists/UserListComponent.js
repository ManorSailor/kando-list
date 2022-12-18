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
 * @param {Function} switchActiveList
 * @returns {Node}
 */
function UserListComponent(kando, addListHandler, switchActiveList) {
    const listWrapperView = listWrapperBody.cloneNode(true);

    const addListBtnView = AddListBtnView(addListHandler);
    const userListView   = UserListsView(kando, switchActiveList);

    listWrapperView.append(addListBtnView, userListView);

    return listWrapperView;
}

export default UserListComponent;
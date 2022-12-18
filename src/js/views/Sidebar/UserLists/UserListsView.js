import { createElement } from "../../../utils";
import ListView from "./ListView";

const userListBody = createElement(`
<!-- User Lists -->
<ul class="flex-grow overflow-y-auto pretty-scrollbar"></ul>
`);

/**
 * Convert List into ListView & populate the provided node
 * @param {Node} userList 
 * @param {Function} switchActiveList
 * @param {...List} lists 
 */
function renderLists(userList, switchActiveList, ...lists) {
    lists.forEach(list => {
        const listView = ListView(list, switchActiveList);
        userList.append(listView);
    });
}

/**
 * Generates UserListsView
 * @param {Kando} kando 
 * @param {Function} switchActiveList 
 * @returns {Node}
 */
function UserListsView(kando, switchActiveList) {
    const userListView = userListBody.cloneNode(true);

    const addListObserver = {
        node: userListView,
        update: function (data) {
            renderLists(this.node, switchActiveList, data.list);
        },
    };

    const removeListObserver = {
        node: userListView,
        update: function (data) {
            const list = data.list;
            const listNode = [...this.node.children].find(listNode => listNode.getAttribute('data-id') === list.id.toString());
            listNode.remove();
        },
    };

    kando.addObserver('LIST_ADDED', addListObserver);
    kando.addObserver('LIST_REMOVED', removeListObserver);

    renderLists(userListView, switchActiveList, ...kando.lists);
    return userListView;
}

export default UserListsView;
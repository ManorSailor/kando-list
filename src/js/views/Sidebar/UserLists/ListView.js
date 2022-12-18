import { createElement } from "../../../utils";

/**
 * 
 * @param {List} list 
 * @param {Function} callback 
 * @returns {Node}
 */
function listView(list, callback) {
    const listBody = ({ id, name }) => createElement(`
        <li class="flex font-thin hover:bg-gray-600/50 transition-colors duration-200 rounded-lg" data-id="${id}">
            <button class="flex-grow max-w-full text-left text-ellipsis p-2 overflow-hidden">${name}</button>
        </li>
    `);
    
    const listView = listBody(list);
    listView.addEventListener('click', callback);
    return listView;
}

/**
 * Generate ListView & attach listeners
 * @param {List} list 
 * @param {Function} listAccessHandler
 * @returns {Node}
 */
function ListView(list, listAccessHandler = () => console.log('You forgot about me!')) {
    const ListView = listView(list, () => listAccessHandler(list));

    const nameObserver = {
        node: ListView.querySelector('li > button'),
        update: function (list) {
            this.node.textContent = list.name;
        },
    };

    list.addObserver('LIST_NAME_CHANGED', nameObserver);

    return ListView;
}

export default ListView;
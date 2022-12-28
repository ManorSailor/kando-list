import './css/styles.css';
import 'iconify-icon';
import dataController from "./js/lib/DataController";
import Kando from './js/models/Kando/Kando';
import List from './js/models/List/List';
import Task from './js/models/Task/Task';
import UserListComponent from './js/views/Sidebar/UserLists/UserListComponent';
import MainContentView from './js/views/MainContent/MainContentView';

// Initialize a new Kando Instance
const kando = new Kando();

dataController.init(kando, List, Task);

MainContentView(kando, addTaskHandler, removeTaskHandler, switchActiveTask);

const contentWrapper = document.getElementById('content-wrapper');
const sidebar = document.getElementById('sidebar');
const sidebarBtn = document.getElementById('sidebar-btn');

sidebarBtn.addEventListener('click', toggleSidebar);

function toggleSidebar() {
    const state = () => sidebar.getAttribute('aria-expanded') === 'true';
    const setState = (newState) => sidebar.setAttribute('aria-expanded', newState);

    // Toggle sidebar state
    (state()) ? setState(false) : setState(true);

    // When navbar is closing hide the overflow on the body
    if (!state()) {
        document.body.style.overflow = 'hidden';
        sidebar.addEventListener('transitionend', () => {
            document.body.style.overflow = 'visible';
        }, { once: true });
    }

    // Shift the content when sidebar is open
    contentWrapper.classList.toggle('sidebar-is-open');
}

const UserLists = UserListComponent(kando, addListHandler, switchActiveList);
sidebar.append(UserLists);

/* =================== Callbacks =================== */

function addTaskHandler(data) {
    const task = new Task(data);
    kando.activeList.addTask(task);
}

function removeTaskHandler(task) {
    kando.activeList.removeTask(task);
}

function addListHandler(name) {
    const list = new List({ name });
    kando.addList(list);
}

function switchActiveList(list) {
    kando.activeList = list;
}

function switchActiveTask(task) {
    kando.activeList.activeTask = task;
}

window.kando = kando;
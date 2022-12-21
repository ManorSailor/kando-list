import './css/styles.css';
import 'iconify-icon';
import dataController from "./js/lib/DataController";
import Kando from './js/models/Kando/Kando';
import List from './js/models/List/List';
import Task from './js/models/Task/Task';
import UserListComponent from './js/views/Sidebar/UserLists/UserListComponent';
import MainContentView from './js/views/MainContent/MainContentView';

dataController.init();

MainContentView(Kando, addTaskHandler, removeTaskHandler, switchActiveTask);

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

const UserLists = UserListComponent(Kando, addListHandler, switchActiveList);
sidebar.append(UserLists);

/* =================== Callbacks =================== */

function addTaskHandler(data) {
    const task = new Task(data);
    Kando.activeList.addTask(task);
}

function removeTaskHandler(task) {
    Kando.activeList.removeTask(task);
}

function addListHandler(name) {
    const list = new List({ name });
    Kando.addList(list);
}

function switchActiveList(list) {
    Kando.activeList = list;
}

function switchActiveTask(task) {
    Kando.activeList.activeTask = task;
}

window.kando = Kando;
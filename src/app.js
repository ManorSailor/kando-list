import './css/styles.css';
import 'iconify-icon';
import dataController from "./js/lib/DataController";

dataController.init();

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

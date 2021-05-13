import { fLocalStorage, taskArray, projectArray } from './js/_local-storage.js';
import { fSidebar } from './js/_sidebar.js';
import { displayInbox, displayToday, displayProject } from './js/_displays.js';
import { fTasks } from './js/_tasks.js';
import { fEventListeners } from './js/_event-listeners.js';
import style from './style.css'

const clearInputs = () => {
    const listAddTaskInput = document.getElementById('list-add-task-input');
    const sidebarProjectsAddProjectInput = document.getElementById('sidebar-projects-add-project-input');

    listAddTaskInput.value = '';
    sidebarProjectsAddProjectInput.value = '';
};

const listTitle = document.getElementById('list-title');

if (!listTitle.textContent) {
    displayInbox();
    fSidebar.displayProjects();
}

export {
    clearInputs as clearInputs,
};

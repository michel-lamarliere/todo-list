import { fLocalStorage, taskArray, projectArray } from '../js/_local-storage.js';
import { displayInbox, displayToday, displayOverdue, displayUpcoming, displayProject } from '../js/_displays.js';
import { fTasks } from '../js/_tasks.js';
import { fSidebar } from '../js/_sidebar.js';
import { clearInputs } from '../index.js';

const fEventListeners = (() => {
    // EVENT LISTENERS Id
    const overlay = document.getElementById('overlay'); 
    const navbarHamburger = document.getElementById('navbar-hamburger');
    const sidebarProjectsList = document.getElementById('sidebar-projects-list');

    const sidebar = document.getElementById('sidebar');
    const sidebarProjectsAdd = document.getElementById('sidebar-projects-add');
    const sidebarProjectsAddProjectAdd = document.getElementById('list-projects-add-project-add');
    const sidebarProjectsAddProjectCancel = document.getElementById('list-projects-add-project-cancel');
    const sidebarProjectsAddProject = document.getElementById('sidebar-projects-add-project');
    const sidebarProjectsAddProjectInput = document.getElementById('sidebar-projects-add-project-input');

    const inbox = document.getElementById('inbox');
    const today = document.getElementById('today');
    const overdue = document.getElementById('overdue');
    const upcoming = document.getElementById('upcoming');

    const listList = document.getElementById('list-list');
    const listTitle = document.getElementById('list-title');

    const listAdd = document.getElementById('list-add');
    const listAddTask = document.getElementById('list-add-task');
    const listAddTaskInput = document.getElementById('list-add-task-input');
    const listAddTaskInputAdd = document.getElementById('list-add-task-input-add');
    const listAddTaskInputCancel = document.getElementById('list-add-task-input-cancel');

    // OVERLAY
    overlay.addEventListener('click', () => {
        fSidebar.resetProject();
        fTasks.resetTask();
        clearInputs();
    });

    // NAVBAR HAMBURGER
    navbarHamburger.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-closed');
    });

    // ENTER KEY EVENT LISTENER
    document.addEventListener('keydown', (event) => {
        if (event.key == 'Enter' && document.getElementById('list-add-task').classList.contains('list-add-task-active')) {
            document.getElementById('list-add-task-input-add').click();
            overlay.classList.remove('overlay-active');
            fTasks.resetTask();
        } else if (event.key == 'Enter' && document.getElementById('sidebar-projects-add-project').classList.contains('sidebar-projects-add-project-active')) {
            document.getElementById('list-projects-add-project-add').click();
            overlay.classList.remove('overlay-active');
            fTasks.resetTask();
        }
    });

    // INBOX
    inbox.addEventListener('click', () => {
        if (listTitle.textContent !== 'Inbox') {
            displayInbox();
        }
    });
    // TODAY
    today.addEventListener('click', () => {
        if (listTitle.textContent !== 'Today') {
            displayToday();
        }
    });
    // OVERDUE
    overdue.addEventListener('click', () => {
        if (listTitle.textContent !== 'Overdue') {
            displayOverdue();
        }
    });

    // UPCOMING
    upcoming.addEventListener('click', () => {
        if (listTitle.textContent !== 'Upcoming') {
            displayUpcoming();
        }
    });

    // SIDEBAR PROJECT ADD
    sidebarProjectsAdd.addEventListener('click', () => {
        overlay.classList.add('overlay-active');
        sidebarProjectsAdd.classList.add('sidebar-projects-add-inactive');
        sidebarProjectsAddProject.classList.add('sidebar-projects-add-project-active');
        sidebarProjectsAddProjectInput.focus();
    });

    // SIDEBAR PROJECT CANCEL BUTTON
    sidebarProjectsAddProjectCancel.addEventListener('click', () => {
        sidebarProjectsAdd.classList.remove('sidebar-projects-add-inactive');
        sidebarProjectsAddProject.classList.remove('sidebar-projects-add-project-active');
    });

    // SIDEBAR PROJECT ADD BUTTON
    sidebarProjectsAddProjectAdd.addEventListener('click', () => {
        if (sidebarProjectsAddProjectInput.value !== '') {
            projectArray.push(sidebarProjectsAddProjectInput.value);
            fSidebar.clearProjects();
            fLocalStorage.saveLocalStorage();
            fLocalStorage.getLocalStorage();
            fSidebar.displayProjects();
            fTasks.displayTasks();
            displayProject(sidebarProjectsAddProjectInput.value);
            clearInputs();
        } else {
            sidebarProjectsAddProjectInput.placeholder = 'Please enter something';
        }
    });

    // SIDEBAR PROJECTS
    sidebarProjectsList.addEventListener('click', (event) => {
        const target = event.target;
        const number = event.target.dataset.number;

        // PROJECTS DOTS
        if (target == document.querySelectorAll('.sidebar-projects-list-project-dots')[number]) {
            document.querySelectorAll('.sidebar-projects-list-project-dropdown')[number].classList.add('sidebar-projects-list-project-dropdown-active');
            overlay.classList.add('overlay-active');
        } else if (target == document.querySelectorAll('.sidebar-projects-list-project-delete')[number]) {
            // PROJECTS DELETE BUTTON
            for (let i = 0; i < taskArray.length; i++) {
                if (taskArray[i].project == document.querySelectorAll('.sidebar-projects-list-project-title')[number].textContent) {
                    taskArray.splice(i, 1);
                }
            }
            if (document.querySelectorAll('.sidebar-projects-list-project-title')[number].textContent == listTitle.textContent) {
                displayInbox();
            }
            projectArray.splice(number, 1);
            fLocalStorage.saveLocalStorage();
            fSidebar.displayProjects();
            fTasks.displayTasks();
        } else if (target == document.querySelectorAll('.sidebar-projects-list-project')[number] || target == document.querySelectorAll('.sidebar-projects-list-project-title')[number] || target == document.querySelectorAll('.sidebar-projects-dot')[number]) {
            if (listTitle.textContent !== projectArray[number]) {
                displayProject(projectArray[number]);
            }
        }
    });

    // TASKS
    // DISPLAY INPUT BUTTON
    listAdd.addEventListener('click', () => {
        listAdd.classList.toggle('list-add-inactive');
        listAddTask.classList.toggle('list-add-task-active');
        overlay.classList.add('overlay-active');
        listAddTaskInput.focus();
    });

    // CANCEL TASK BUTTON
    listAddTaskInputCancel.addEventListener('click', () => {
        listAdd.classList.toggle('list-add-inactive');
        listAddTask.classList.toggle('list-add-task-active');
        overlay.classList.remove('overlay-active');
    });

    // ADD TASK
    listAddTaskInputAdd.addEventListener('click', () => {
        if (listAddTaskInput.value !== '') {
            const title = listAddTaskInput.value;
            let newTask;
            let i = 0;

            if (listTitle.textContent == 'Today') {
                const date = new Date().toLocaleString().slice(0, 10);
                newTask = fTasks.addTask(title, null, date, false, i += 1);
            } else if (listTitle.textContent !== 'Today' && listTitle.textContent !== 'Inbox') {
                newTask = fTasks.addTask(title, listTitle.textContent, null, false, i += 1);
            } else {
                newTask = fTasks.addTask(title, null, null, false, i += 1);
            }

            taskArray.push(newTask);
            fLocalStorage.saveLocalStorage();
            fTasks.clearTasks();
            clearInputs();
            fTasks.displayTasks();
        } else {
            listAddTaskInput.placeholder = 'Please enter something';
        }
    });

    listList.addEventListener('click', (event) => {
        const target = event.target;
        const number = event.target.dataset.number;

        // TASK DONE DOT
        if (number) {
            for (let i = 0; i < taskArray.length; i++) {
                for (let y = 0; y < document.querySelectorAll('.list-list-task').length; y++) {
                    // TASK DOT
                    if (target == document.querySelectorAll('.done-dot')[y]
                    && document.querySelectorAll('.list-list-task-text-title')[y].textContent == taskArray[i].title
                    && number == taskArray[i].index) {
                        if (taskArray[i].done == true) {
                            taskArray[i].done = false;
                        } else {
                            taskArray[i].done = true;
                        }
                        fLocalStorage.saveLocalStorage();
                        fTasks.displayTasks();
                    } else if (target == document.querySelectorAll('.list-list-date')[y]
                    // TASK DATE
                    && document.querySelectorAll('.list-list-task-text-title')[y].textContent == taskArray[i].title
                    && number == taskArray[i].index) {
                        overlay.classList.add('overlay-active');
                        document.querySelectorAll('.list-list-task-dropdown')[y].classList.add('list-list-task-dropdown-active');
                        document.querySelectorAll('.list-list-task-dropdown-date')[y].classList.add('list-list-task-dropdown-date-inactive');
                        document.querySelectorAll('.list-list-task-dropdown-date-input')[y].classList.add('list-list-task-dropdown-date-input-active');
                    } else if (target == document.querySelectorAll('.list-list-task-dots')[y]) {
                    // TASK DOTS
                        document.querySelectorAll('.list-list-task-dropdown')[y].classList.add('list-list-task-dropdown-active');
                        overlay.classList.add('overlay-active');
                    } else if (target == document.querySelectorAll('.list-list-task-dropdown-project')[y]) {
                    // TASK DROPDOWN PROJECT
                        document.querySelectorAll('.list-list-task-dropdown-project')[y].classList.add('list-list-task-dropdown-project-inactive');
                        document.querySelectorAll('.list-list-task-dropdown-project-input')[y].classList.add('list-list-task-dropdown-project-input-active');
                    } else if (target == document.querySelectorAll('.list-list-task-dropdown-project-input-button')[y]) {
                    // TASKS DROPDOWN PROJECT SUBMIT
                        for (let x = 0; x < taskArray.length; x++) {
                            if (taskArray[x].title == document.querySelectorAll('.list-list-task-text-title')[y].textContent) {
                                if (document.querySelectorAll('.list-list-task-dropdown-project-input-input')[y].value == 'No Project') {
                                    taskArray[x].project = null;
                                } else {
                                    taskArray[x].project = document.querySelectorAll('.list-list-task-dropdown-project-input-input')[y].value;
                                }
                            }
                        }
                        fLocalStorage.saveLocalStorage();
                        fTasks.displayTasks();
                    } else if (target == document.querySelectorAll('.list-list-task-dropdown-date')[y]) {
                    // TASK DROPDOWN DATE INPUT
                        document.querySelectorAll('.list-list-task-dropdown-date')[y].classList.add('list-list-task-dropdown-date-inactive');
                        document.querySelectorAll('.list-list-task-dropdown-date-input')[y].classList.add('list-list-task-dropdown-date-input-active');
                    } else if (target == document.querySelectorAll('.list-list-task-dropdown-date-input-button')[y]) {
                    // TASK DROPDOWN DATE INPUT SUBMIT
                        for (let x = 0; x < taskArray.length; x++) {
                            if (taskArray[x].title == document.querySelectorAll('.list-list-task-text-title')[y].textContent && taskArray[x].index == number) {
                                const newDate0 = document.querySelectorAll('.list-list-task-dropdown-date-input-date')[y].value;
                                const newDate1 = newDate0.slice(0, 4);
                                const newDate2 = newDate0.slice(5, 7);
                                const newDate3 = newDate0.slice(8, 10);
                                const newDate = `${newDate3}/${newDate2}/${newDate1}`;
                                taskArray[x].date = newDate;
                            }
                        }
                        fLocalStorage.saveLocalStorage();
                        fTasks.displayTasks();
                    } else if (target == document.querySelectorAll('.list-list-task-dropdown-delete')[y]) {
                        // TASK DROPDOWN DELETE BUTTON
                        if (listTitle.textContent == 'Today') {
                            if (taskArray[i].title == document.querySelectorAll('.list-list-task-text-title')[y].textContent && taskArray[i].date == document.querySelectorAll('.list-list-task-dropdown-date-input-date')[y].value) {
                                taskArray.splice(i, 1);
                                fLocalStorage.saveLocalStorage();
                                fTasks.displayTasks();
                            }
                        } else {
                            taskArray.splice(event.target.dataset.number, 1);
                            fLocalStorage.saveLocalStorage();
                            fTasks.displayTasks();
                        }
                    }
                }
            }
        }
    });
})();

export {
    fEventListeners as fEventListeners,
};

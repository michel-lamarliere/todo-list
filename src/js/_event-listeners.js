import { fLocalStorage, taskArray, projectArray } from '../js/_local-storage.js';
import { displayInbox, displayProject } from '../js/_displays.js';
import { fTasks } from '../js/_tasks.js';
import { fSidebar } from '../js/_sidebar.js';

const fEventListeners = (() => {
    const sidebarProjectsList = document.getElementById('sidebar-projects-list');
    const sidebarProjectsTitle = document.getElementById('sidebar-projects-title');

    const listList = document.getElementById('list-list');
    const listTitle = document.getElementById('list-title');

    sidebarProjectsList.addEventListener('click', event => {
        let target = event.target;
        let number = event.target.dataset.number;

        // PROJECTS DOTS
        if (target == document.querySelectorAll('.sidebar-projects-list-project-dots')[number]) {
            document.querySelectorAll('.sidebar-projects-list-project-dropdown')[number].classList.add('sidebar-projects-list-project-dropdown-active');
            overlay.classList.add('overlay-active');
        }

        // PROJECTS DELETE BUTTON
        else if (target == document.querySelectorAll('.sidebar-projects-list-project-dropdown-delete')[number]) {
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
            fSidebar.clearProjects();
            fSidebar.displayProjects();
            fTasks.displayTasks();            
        }

        else if (target == document.querySelectorAll('.sidebar-projects-list-project-title')[number]) {
            if (listTitle.textContent != projectArray[number]) {
                displayProject(projectArray[number]);
            }
        }
    });

    // TASKS
    listList.addEventListener('click', event => {
        let target = event.target;
        let number = event.target.dataset.number;
        
        // TASK DOTS
        if (target == document.querySelectorAll('.list-list-task-dots')[number]) {
            document.querySelectorAll('.list-list-task-dropdown')[number].classList.add('list-list-task-dropdown-active');
            overlay.classList.add('overlay-active');
        }

        // TASK DROPDOWN
        else if (target == document.querySelectorAll('.list-list-task-dropdown-project')[number]) {
            document.querySelectorAll('.list-list-task-dropdown-project')[number].classList.add('list-list-task-dropdown-project-inactive');
            document.querySelectorAll('.list-list-task-dropdown-project-input')[number].classList.add('list-list-task-dropdown-project-input-active');
        }

        // TASKS DROPDOWN PROJECT SUBMIT
        else if (target == document.querySelectorAll('.list-list-task-dropdown-project-input-button')[number]) {
            for (let i = 0; i < taskArray.length; i++) {
                if (taskArray[i].title == document.querySelectorAll('.list-list-task-text-title')[number].textContent ) {
                    taskArray[i].project = document.querySelectorAll('.list-list-task-dropdown-project-input-input')[number].value;
                }
            }        
            fLocalStorage.saveLocalStorage();
            fTasks.displayTasks();
        }

        // TASK DROPDOWN DATE INPUT
        else if (target == document.querySelectorAll('.list-list-task-dropdown-date')[number]) {
            document.querySelectorAll('.list-list-task-dropdown-date')[number].classList.add('list-list-task-dropdown-date-inactive');
            document.querySelectorAll('.list-list-task-dropdown-date-input')[event.target.dataset.number].classList.add('list-list-task-dropdown-date-input-active');
        }

        // TASK DROPDOWN DATE INPUT SUBMIT
        else if (target == document.querySelectorAll('.list-list-task-dropdown-date-input-button')[number]) {
            for (let i = 0; i < taskArray.length; i++) {
                if (taskArray[i].title == document.querySelectorAll('.list-list-task-text-title')[number].textContent) {
                    taskArray[i].date = document.querySelectorAll('.list-list-task-dropdown-date-input-date')[number].value;
                }
            }
            fLocalStorage.saveLocalStorage();
            fTasks.displayTasks();
        }

        // TASK DROPDOWN DELETE BUTTON
        else if (target == document.querySelectorAll('.list-list-task-dropdown-delete')[number]) {
            if (listTitle.textContent == 'Today') {
                for (let i = 0; i < taskArray.length; i++) {
                    if (taskArray[i].title == document.querySelectorAll('.list-list-task-text-title')[number].textContent && taskArray[i].date == document.querySelectorAll('.list-list-task-dropdown-date-input-date')[number].value) {
                        taskArray.splice(i, 1);
                        fLocalStorage.saveLocalStorage();
                        fTasks.displayTasks();
                        fTasks.setAttributesTasks();
                    }
                }
            } else {
                taskArray.splice(event.target.dataset.number, 1);
                fLocalStorage.saveLocalStorage();
                fTasks.displayTasks();
                fTasks.setAttributesTasks();
            }
        }
    });

})();

export {
    fEventListeners as fEventListeners,
} 
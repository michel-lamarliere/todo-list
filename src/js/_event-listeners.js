import { fLocalStorage, taskArray, projectArray } from '../js/_local-storage.js';
import { displayInbox, displayProject } from '../js/_displays.js';
import { fTasks } from '../js/_tasks.js';
import { fSidebar } from '../js/_sidebar.js';
import { clearInputs } from '../index.js';

const fEventListeners = (() => {

    // EVENT LISTENERS Id
    const overlay = document.getElementById('overlay'); 
    const sidebarProjectsList = document.getElementById('sidebar-projects-list');
    const sidebarProjectsTitle = document.getElementById('sidebar-projects-title');

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
        if (listAddTaskInput.value !== "") {
            let title = listAddTaskInput.value;
            let newTask;
            let i = 0;

            if (listTitle.textContent == 'Today') {
                let date = new Date().toISOString().slice(0, 10);
                newTask = fTasks.addTask(title, null, date, false, i++);
            } 

            else if (listTitle.textContent !== 'Today' && listTitle.textContent !== 'Inbox') {
                newTask = fTasks.addTask(title, listTitle.textContent, null, false, i++)
            }

            else {
                newTask = fTasks.addTask(title, null, null, false, i++);
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

    // ENTER KEY EVENT LISTENER
    document.addEventListener('keydown', event => {
        if (event.key === 'Enter' && document.getElementById('list-add-task').classList.contains('list-add-task-active')) {
            document.getElementById('list-add-task-input-add').click();
            overlay.classList.remove('overlay-active');
            fTasks.resetTask();
        } else if (event.key === 'Enter' && document.getElementById('sidebar-projects-add-project').classList.contains('sidebar-projects-add-project-active')) {
            document.getElementById('list-projects-add-project-add').click();
            overlay.classList.remove('overlay-active');
            fTasks.resetTask();
        }
    });

    // SIDEBAR 
    sidebarProjectsList.addEventListener('click', event => {
        let target = event.target;
        let number = event.target.dataset.number;

        // PROJECTS DOTS
        if (target == document.querySelectorAll('.sidebar-projects-list-project-dots')[number]) {
            document.querySelectorAll('.sidebar-projects-list-project-dropdown')[number].classList.add('sidebar-projects-list-project-dropdown-active');
            overlay.classList.add('overlay-active');
        }

        // PROJECTS DELETE BUTTON
        else if (target == document.querySelectorAll('.sidebar-projects-list-project-delete')[number]) {
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
        }

        else if (target == document.querySelectorAll('.sidebar-projects-list-project')[number] || target == document.querySelectorAll('.sidebar-projects-list-project-title')[number] || target == document.querySelectorAll('.sidebar-projects-dot')[number]) {
            if (listTitle.textContent != projectArray[number]) {
                displayProject(projectArray[number]);
            }
        }
    });

    // TASKS
    listList.addEventListener('click', event => {
        let target = event.target;
        let number = event.target.dataset.number;
        
        // TASK DONE DOT 
        if (number) {
            for (let i = 0; i < taskArray.length; i++) {
                for (let y = 0; y < document.querySelectorAll('.list-list-task').length; y++) {
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
                    }
                    // TASK DOTS
                    else if (target == document.querySelectorAll('.list-list-task-dots')[y]) {
                        document.querySelectorAll('.list-list-task-dropdown')[y].classList.add('list-list-task-dropdown-active');
                        overlay.classList.add('overlay-active');
                    }
                    // TASK DROPDOWN PROJECT
                    else if (target == document.querySelectorAll('.list-list-task-dropdown-project')[y]) {
                        document.querySelectorAll('.list-list-task-dropdown-project')[y].classList.add('list-list-task-dropdown-project-inactive');
                        document.querySelectorAll('.list-list-task-dropdown-project-input')[y].classList.add('list-list-task-dropdown-project-input-active');
                    }
                    // TASKS DROPDOWN PROJECT SUBMIT
                    else if (target == document.querySelectorAll('.list-list-task-dropdown-project-input-button')[y]) {
                        for (let i = 0; i < taskArray.length; i++) {
                            if (taskArray[i].title == document.querySelectorAll('.list-list-task-text-title')[y].textContent) {
                                if (document.querySelectorAll('.list-list-task-dropdown-project-input-input')[y].value == 'No Project') {
                                    taskArray[i].project = null;
                                } else {
                                    taskArray[i].project = document.querySelectorAll('.list-list-task-dropdown-project-input-input')[y].value;
                                }
                            }
                        }        
                        fLocalStorage.saveLocalStorage();
                        fTasks.displayTasks();
                    }
                    // TASK DROPDOWN DATE INPUT
                    else if (target == document.querySelectorAll('.list-list-task-dropdown-date')[y]) {
                        document.querySelectorAll('.list-list-task-dropdown-date')[y].classList.add('list-list-task-dropdown-date-inactive');
                        document.querySelectorAll('.list-list-task-dropdown-date-input')[y].classList.add('list-list-task-dropdown-date-input-active');
                    }
                    // TASK DROPDOWN DATE INPUT SUBMIT
                    else if (target == document.querySelectorAll('.list-list-task-dropdown-date-input-button')[y]) {
                        for (let i = 0; i < taskArray.length; i++) {
                            if (taskArray[i].title == document.querySelectorAll('.list-list-task-text-title')[y].textContent && taskArray[i].index == number) {
                                taskArray[i].date = document.querySelectorAll('.list-list-task-dropdown-date-input-date')[y].value;
                            }
                        }
                        fLocalStorage.saveLocalStorage();
                        fTasks.displayTasks();
                    }

                    // TASK DROPDOWN DELETE BUTTON
                    else if (target == document.querySelectorAll('.list-list-task-dropdown-delete')[y]) {
                        if (listTitle.textContent == 'Today') {
                            for (let i = 0; i < taskArray.length; i++) {
                                if (taskArray[i].title == document.querySelectorAll('.list-list-task-text-title')[y].textContent && taskArray[i].date == document.querySelectorAll('.list-list-task-dropdown-date-input-date')[y].value) {
                                    taskArray.splice(i, 1);
                                    fLocalStorage.saveLocalStorage();
                                    fTasks.displayTasks();
                                }
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
} 
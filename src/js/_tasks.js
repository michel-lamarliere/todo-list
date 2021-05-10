import { clearInputs } from '../index.js';
import { fLocalStorage, taskArray, projectArray } from '../js/_local-storage.js';
import { fSidebar } from '../js/_sidebar.js';

const listList = document.getElementById('list-list');
const listTitle = document.getElementById('list-title');

const fTasks = (() => {

    // TASKS INPUT AND BUTTONS
    const listAdd = document.getElementById('list-add');
    const listAddTask = document.getElementById('list-add-task');
    const listAddTaskInput = document.getElementById('list-add-task-input');
    const listAddTaskInputAdd = document.getElementById('list-add-task-input-add');
    const listAddTaskInputCancel = document.getElementById('list-add-task-input-cancel');

    // ADD CONSTRUCTOR
    const addTask = (title, project, date, done) => {
        return { title, project, date, done }
    }

    const displayTasks = () => {
        // INBOX
        clearTasks();
        if (listTitle.textContent === 'Inbox') {
            for (let i = 0; i < taskArray.length; i++) {
                if (taskArray[i].project === null) {
                    createTasks(taskArray[i].title, taskArray[i].project, taskArray[i].date, taskArray[i].done);
                }
            }
            fTasks.setAttributesTasks();  
        // OVERDUE 
        } else if (listTitle.textContent === 'Overdue') {
            for (let i = 0; i < taskArray.length; i++) {
                if (taskArray[i].date !== null && taskArray[i].date.valueOf() < new Date().toISOString().slice(0, 10)) {
                    createTasks(taskArray[i].title, taskArray[i].project, taskArray[i].date, taskArray[i].done);
                }
            }
            fTasks.setAttributesTasks();  
        // TODAY
        } else if (listTitle.textContent === 'Today') {
            for (let i = 0; i < taskArray.length; i++) {
                if (taskArray[i].date == new Date().toISOString().slice(0, 10)) {
                    createTasks(taskArray[i].title, taskArray[i].project, taskArray[i].date, taskArray[i].done);
                }
            }
            fTasks.setAttributesTasks();
        // PROJECTS
        } else {
            for (let i = 0; i < taskArray.length; i++) {
                if (taskArray[i].project == listTitle.textContent) {
                    createTasks(taskArray[i].title, taskArray[i].project, taskArray[i].date, taskArray[i].done);
                }
            }
            fTasks.setAttributesTasks();
        }

        for (let i = 0; i < taskArray.length; i++) {
            for (let y = 0; y < document.querySelectorAll('.list-list-task-text-title').length; y++) {
                if (taskArray[i].title == document.querySelectorAll('.list-list-task-text-title')[y].textContent && taskArray[i].done == true) {
                    document.querySelectorAll('.list-list-task-text-title')[y].classList.add('list-list-task-text-title-done');
                }
                if (taskArray[i].title == document.querySelectorAll('.list-list-task-text-title')[y].textContent && taskArray[i].date !== null && new Date().toISOString().slice(0, 10) > taskArray[i].date.valueOf()) {
                    document.querySelectorAll('.list-list-task-text-title')[y].classList.add('list-list-task-text-title-overdue');
                }
            }
        }
    }

    const createTasks = (title, project, date, done) => {
        // TASK CONTAINER
        let listListTask = document.createElement('div');
        listListTask.classList.add('list-list-task');
        listList.appendChild(listListTask);
        
        // TASK TITLE CONTAINER
       
        let listListDay = document.createElement('div');
        listListDay.classList.add('list-list-task-text');
        listListTask.appendChild(listListDay);

        // DATE 
        let listListTaskDate = document.createElement('div');
        listListTaskDate.textContent = date;
        listListTaskDate.classList.add('list-list-date');
        listListTask.appendChild(listListTaskDate);

        // DOT
        let doneDot = document.createElement('div');
        doneDot.classList.add('main-dot');
        doneDot.classList.add('done-dot');
        listListDay.appendChild(doneDot);

        // TASK TITLE
        let li = document.createElement('li');
        li.classList.add('list-list-task-text-title');
        if (project !== null && listTitle.textContent == 'Today' || project !== null && listTitle.textContent == 'Overdue') {
            li.textContent = title + ' (' + project + ')';
        } else {
            li.textContent = title;
        }
        listListDay.appendChild(li);

            // DOTS CONTAINER
        let listListTaskDots = document.createElement('div');
        listListTaskDots.classList.add('list-list-task-dots');
        listListTask.appendChild(listListTaskDots);

            // DROPDOWN 
        let listListTaskDropdown = document.createElement('ul');
        listListTaskDropdown.classList.add('list-list-task-dropdown');
        listListTask.appendChild(listListTaskDropdown);

                // DROPDOWN PROJECT
        let listListTaskDropdownProject = document.createElement('li');
        listListTaskDropdownProject.classList.add('list-list-task-dropdown-project');
        listListTaskDropdownProject.classList.add('list-list-task-dropdown-bar');
        listListTaskDropdownProject.textContent = 'Project';
        listListTaskDropdown.appendChild(listListTaskDropdownProject);
        
            // DROPDOWN PROJECT INPUT CONTAINER
        let listListTaskDropdownProjectInput = document.createElement('li');
        listListTaskDropdownProjectInput.classList.add('list-list-task-dropdown-project-input');
        listListTaskDropdown.appendChild(listListTaskDropdownProjectInput);

                // DROPDOWN PROJECT INPUT
        let listListTaskDropdownProjectInputInput = document.createElement('select');
        listListTaskDropdownProjectInputInput.classList.add('list-list-task-dropdown-project-input-input');
        listListTaskDropdownProjectInput.appendChild(listListTaskDropdownProjectInputInput);

        let listListTaskDropdownProjectInputInputOptionNull = document.createElement('option');
        listListTaskDropdownProjectInputInputOptionNull.textContent = 'No Project';
        listListTaskDropdownProjectInputInputOptionNull.value = 'No Project';
        listListTaskDropdownProjectInputInput.appendChild(listListTaskDropdownProjectInputInputOptionNull);
        for (let i = 0; i < projectArray.length; i++) {
            let listListTaskDropdownProjectInputInputOption = document.createElement('option');
            listListTaskDropdownProjectInputInputOption.textContent = projectArray[i];
            listListTaskDropdownProjectInputInputOption.value = projectArray[i];
            listListTaskDropdownProjectInputInput.appendChild(listListTaskDropdownProjectInputInputOption);
        }
        
            // DROPDOWN PROJECT BUTTON
        let listListTaskDropdownProjectInputButton = document.createElement('button');
        listListTaskDropdownProjectInputButton.classList.add('list-list-task-dropdown-project-input-button');
        listListTaskDropdownProjectInputButton.classList.add('list-list-task-dropdown-bar-button');
        listListTaskDropdownProjectInputButton.textContent = 'OK';
        listListTaskDropdownProjectInput.appendChild(listListTaskDropdownProjectInputButton);

                // DROPDOWN LI DATE
        let listListTaskDropdownDate = document.createElement('li');
        listListTaskDropdownDate.classList.add('list-list-task-dropdown-date');
        listListTaskDropdownDate.classList.add('list-list-task-dropdown-bar');
        listListTaskDropdownDate.textContent = 'Date';
        listListTaskDropdown.appendChild(listListTaskDropdownDate);

                // DROPDOWN LI DATE INPUT
        let listListTaskDropdownDateInput = document.createElement('li');
        listListTaskDropdownDateInput.classList.add('list-list-task-dropdown-date-input');

                    // INPUT TYPE DATE 
        let listListTaskDropdownDateInputDate = document.createElement('input');
        listListTaskDropdownDateInputDate.type = 'date';
        listListTaskDropdownDateInputDate.value = date;
        listListTaskDropdownDateInputDate.classList.add('list-list-task-dropdown-date-input-date');
        listListTaskDropdownDateInput.appendChild(listListTaskDropdownDateInputDate);

                    // INPUT BUTTON
        let listListTaskDropdownDateInputButton = document.createElement('button');
        listListTaskDropdownDateInputButton.classList.add('list-list-task-dropdown-date-input-button');
        listListTaskDropdownDateInputButton.classList.add('list-list-task-dropdown-bar-button');
        listListTaskDropdownDateInputButton.textContent = 'OK';
        listListTaskDropdownDateInput.appendChild(listListTaskDropdownDateInputButton);
        listListTaskDropdown.appendChild(listListTaskDropdownDateInput);

                // DROPDOWN LI DELETE
        let listListTaskDropdownDelete = document.createElement('li');
        listListTaskDropdownDelete.classList.add('list-list-task-dropdown-delete');
        listListTaskDropdownDelete.classList.add('list-list-task-dropdown-bar');
        listListTaskDropdownDelete.textContent = 'Delete';
        listListTaskDropdown.appendChild(listListTaskDropdownDelete);

            // TASK LIGN SEPARATOR
        let listListLign = document.createElement('span');
        listListLign.classList.add('list-list-lign');
        listList.appendChild(listListLign);
    }

        // SETS DATASET NUMBER ON TASKS
    const setAttributesTasks = () => {
        let allListListTask = document.querySelectorAll('.list-list-task');
        let allListListLign = document.querySelectorAll('.list-list-lign');
        let allDots = document.querySelectorAll('.list-list-task-dots');
        let allDoneDots = document.querySelectorAll('.done-dot');
        let allTaskTextTitle = document.querySelectorAll('.list-list-task-text-title')
        let allTaskDropdown = document.querySelectorAll('.list-list-task-dropdown');
        let allDeleteButton = document.querySelectorAll('.list-list-task-dropdown-delete');
        let allDropdownProject = document.querySelectorAll('.list-list-task-dropdown-project');
        let allDropdownDate = document.querySelectorAll('.list-list-task-dropdown-date');
        let allDropdownDateInput = document.querySelectorAll('.list-list-task-dropdown-date-input');
        let allDropdownDateInputButton = document.querySelectorAll('.list-list-task-dropdown-date-input-button');
        let allDropdownDateInputDate = document.querySelectorAll('.list-list-task-dropdown-date-input-date');
        let listListTaskDropdownProjectInputInput = document.querySelectorAll('.list-list-task-dropdown-project-input-input')
        let listListTaskDropdownProjectInputButton = document.querySelectorAll('.list-list-task-dropdown-project-input-button');
        
        for (let i = 0; i < allListListTask.length; i++) {
            if (allListListTask[0]) {
                allListListTask[i].dataset.number = i;
                allListListLign[i].dataset.number = i;
                allDots[i].dataset.number = i;
                allDoneDots[i].dataset.number = i;
                allTaskTextTitle[i].dataset.number = i;
                allTaskDropdown[i].dataset.number = i;
                allDropdownProject[i].dataset.number = i;
                allDeleteButton[i].dataset.number = i;
                allDropdownDate[i].dataset.number = i;
                allDropdownDateInput[i].dataset.number = i;
                allDropdownDateInputButton[i].dataset.number = i;
                listListTaskDropdownProjectInputInput[i].dataset.number = i;
                listListTaskDropdownProjectInputButton[i].dataset.number = i;
            }
        }
    };

    // CLEAR TASK LIST 
    const clearTasks = () => {
        while (listList.firstChild) {
            listList.removeChild(listList.firstChild)
        }
    }

        // RESET DROPDOWN TASKS
    const resetTask = () => {
        let allTaskDropdown = document.querySelectorAll('.list-list-task-dropdown');
        let allDropdownDate = document.querySelectorAll('.list-list-task-dropdown-date');
        let allDropdownDateInput = document.querySelectorAll('.list-list-task-dropdown-date-input');
        let allDropdownProject = document.querySelectorAll('.list-list-task-dropdown-project');
        let allDropdownProjectInput = document.querySelectorAll('.list-list-task-dropdown-project-input');
        overlay.classList.remove('overlay-active'); 
        listAdd.classList.remove('list-add-inactive');
        listAddTask.classList.remove('list-add-task-active');

        for (let i = 0; i < allTaskDropdown.length; i++) {
            allDropdownDate[i].classList.remove('list-list-task-dropdown-date-inactive');
            allDropdownDateInput[i].classList.remove('list-list-task-dropdown-date-input-active'); 
            allTaskDropdown[i].classList.remove('list-list-task-dropdown-active');
            allDropdownProject[i].classList.remove('list-list-task-dropdown-project-inactive');
            allDropdownProjectInput[i].classList.remove('list-list-task-dropdown-project-input-active');
        }
    }

    // EVENT LISTENERS
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

            if (listTitle.textContent == 'Today') {
                let date = new Date().toISOString().slice(0, 10);
                newTask = addTask(title, null, date, false);
            } 

            else if (listTitle.textContent !== 'Today' && listTitle.textContent !== 'Inbox') {
                newTask = addTask(title, listTitle.textContent, null, false)
            }

            else {
                newTask = addTask(title, null, null, false);
            }

            taskArray.push(newTask);
            fLocalStorage.saveLocalStorage();
            clearTasks();
            clearInputs();
            displayTasks();
            setAttributesTasks();
        } else {
            listAddTaskInput.placeholder = 'Please enter something';
        }
    });

    // ENTER KEY EVENT LISTENER
    document.addEventListener('keydown', event => {
        if (event.key === 'Enter' && document.getElementById('list-add-task').classList.contains('list-add-task-active')) {
            document.getElementById('list-add-task-input-add').click();
            overlay.classList.remove('overlay-active');
            resetTask();
        } else if (event.key === 'Enter' && document.getElementById('sidebar-projects-add-project').classList.contains('sidebar-projects-add-project-active')) {
            document.getElementById('list-projects-add-project-add').click();
            overlay.classList.remove('overlay-active');
            resetTask();
        }
    });
    return { displayTasks, clearTasks, setAttributesTasks, resetTask };
})();

export {
    fTasks as fTasks,
};
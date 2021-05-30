import { clearInputs } from '../index.js';
import { fLocalStorage, taskArray, projectArray } from '../js/_local-storage.js';
import { fSidebar } from '../js/_sidebar.js';

const overlay = document.getElementById('overlay');
const listList = document.getElementById('list-list');
const listTitle = document.getElementById('list-title');

const fTasks = (() => {
    // TASKS INPUT AND BUTTONS
    const listAdd = document.getElementById('list-add');
    const listAddTask = document.getElementById('list-add-task');

    // ADD CONSTRUCTOR
    const addTask = (title, project, date, done, index) => ({
        title, project, date, done, index,
    });

    const createTasks = (title, project, date, done, index) => {
        // TASK CONTAINER
        const listListTask = document.createElement('div');
        listListTask.classList.add('list-list-task');
        listListTask.dataset.number = index;
        listList.appendChild(listListTask);

        // TASK TITLE CONTAINER
        const listListDay = document.createElement('div');
        listListDay.classList.add('list-list-task-text');
        listListDay.dataset.number = index;
        listListTask.appendChild(listListDay);

        // DATE
        if (date != null) {
            const listListTaskDate = document.createElement('div');
            listListTaskDate.textContent = date.toLocaleString();
            listListTaskDate.dataset.number = index;
            listListTaskDate.classList.add('list-list-date');
            listListTask.appendChild(listListTaskDate);
        }

        // DONE DOT
        const doneDot = document.createElement('div');
        doneDot.dataset.number = index;
        doneDot.classList.add('main-dot');
        doneDot.classList.add('done-dot');
        listListDay.appendChild(doneDot);

        // TASK TITLE
        const li = document.createElement('li');
        li.dataset.number = index;
        li.classList.add('list-list-task-text-title');
        if (project !== null && listTitle.textContent == 'Today' || project !== null && listTitle.textContent == 'Overdue') {
            li.textContent = `${title} (${project})`;
        } else {
            li.textContent = title;
        }
        listListDay.appendChild(li);

        // DOTS CONTAINER
        const listListTaskDots = document.createElement('div');
        listListTaskDots.dataset.number = index;
        listListTaskDots.classList.add('list-list-task-dots');
        listListTask.appendChild(listListTaskDots);

        // DROPDOWN
        const listListTaskDropdown = document.createElement('ul');
        listListTaskDropdown.dataset.number = index;
        listListTaskDropdown.classList.add('list-list-task-dropdown');
        listListTask.appendChild(listListTaskDropdown);

        // DROPDOWN PROJECT
        const listListTaskDropdownProject = document.createElement('li');
        listListTaskDropdownProject.dataset.number = index;
        listListTaskDropdownProject.classList.add('list-list-task-dropdown-project');
        listListTaskDropdownProject.classList.add('list-list-task-dropdown-bar');
        listListTaskDropdownProject.textContent = 'Project';
        listListTaskDropdown.appendChild(listListTaskDropdownProject);

        // DROPDOWN PROJECT INPUT CONTAINER
        const listListTaskDropdownProjectInput = document.createElement('li');
        listListTaskDropdownProjectInput.dataset.number = index;
        listListTaskDropdownProjectInput.classList.add('list-list-task-dropdown-project-input');
        listListTaskDropdown.appendChild(listListTaskDropdownProjectInput);

        // DROPDOWN PROJECT INPUT
        const listListTaskDropdownProjectInputInput = document.createElement('select');
        listListTaskDropdownProjectInputInput.dataset.number = index;
        listListTaskDropdownProjectInputInput.classList.add('list-list-task-dropdown-project-input-input');
        listListTaskDropdownProjectInput.appendChild(listListTaskDropdownProjectInputInput);

        const listListTaskDropdownProjectInputInputOptionNull = document.createElement('option');
        listListTaskDropdownProjectInputInput.dataset.number = index;
        listListTaskDropdownProjectInputInputOptionNull.textContent = 'No Project';
        listListTaskDropdownProjectInputInputOptionNull.value = 'No Project';
        listListTaskDropdownProjectInputInput.appendChild(listListTaskDropdownProjectInputInputOptionNull);

        for (let i = 0; i < projectArray.length; i++) {
            const listListTaskDropdownProjectInputInputOption = document.createElement('option');
            listListTaskDropdownProjectInputInputOption.dataset.number = index;
            listListTaskDropdownProjectInputInputOption.textContent = projectArray[i];
            listListTaskDropdownProjectInputInputOption.value = projectArray[i];
            if (projectArray[i] == project) {
                listListTaskDropdownProjectInputInputOption.selected = true;
            }
            listListTaskDropdownProjectInputInput.appendChild(listListTaskDropdownProjectInputInputOption);
        }

        // DROPDOWN PROJECT BUTTON
        const listListTaskDropdownProjectInputButton = document.createElement('button');
        listListTaskDropdownProjectInputButton.dataset.number = index;
        listListTaskDropdownProjectInputButton.classList.add('list-list-task-dropdown-project-input-button');
        listListTaskDropdownProjectInputButton.classList.add('list-list-task-dropdown-bar-button');
        listListTaskDropdownProjectInputButton.textContent = 'OK';
        listListTaskDropdownProjectInput.appendChild(listListTaskDropdownProjectInputButton);

        // DROPDOWN LI DATE
        const listListTaskDropdownDate = document.createElement('li');
        listListTaskDropdownDate.dataset.number = index;
        listListTaskDropdownDate.classList.add('list-list-task-dropdown-date');
        listListTaskDropdownDate.classList.add('list-list-task-dropdown-bar');
        listListTaskDropdownDate.textContent = 'Date';
        listListTaskDropdown.appendChild(listListTaskDropdownDate);

        // DROPDOWN LI DATE INPUT
        const listListTaskDropdownDateInput = document.createElement('li');
        listListTaskDropdownDateInput.dataset.number = index;
        listListTaskDropdownDateInput.classList.add('list-list-task-dropdown-date-input');

        // INPUT TYPE DATE
        const listListTaskDropdownDateInputDate = document.createElement('input');
        listListTaskDropdownDateInputDate.dataset.number = index;
        listListTaskDropdownDateInputDate.type = 'date';
        listListTaskDropdownDateInputDate.value = date;
        listListTaskDropdownDateInputDate.classList.add('list-list-task-dropdown-date-input-date');
        if (date != null) {
            const newDate1 = date.slice(0, 2);
            const newDate2 = date.slice(3, 5);
            const newDate3 = date.slice(6, 10);
            const newDate = `${newDate3}-${newDate2}-${newDate1}`;
            listListTaskDropdownDateInputDate.value = newDate;
        }
        listListTaskDropdownDateInput.appendChild(listListTaskDropdownDateInputDate);

        // INPUT BUTTON
        const listListTaskDropdownDateInputButton = document.createElement('button');
        listListTaskDropdownDateInputButton.dataset.number = index;
        listListTaskDropdownDateInputButton.classList.add('list-list-task-dropdown-date-input-button');
        listListTaskDropdownDateInputButton.classList.add('list-list-task-dropdown-bar-button');
        listListTaskDropdownDateInputButton.textContent = 'OK';
        listListTaskDropdownDateInput.appendChild(listListTaskDropdownDateInputButton);
        listListTaskDropdown.appendChild(listListTaskDropdownDateInput);

        // DROPDOWN LI DELETE
        const listListTaskDropdownDelete = document.createElement('li');
        listListTaskDropdownDelete.dataset.number = index;
        listListTaskDropdownDelete.classList.add('list-list-task-dropdown-delete');
        listListTaskDropdownDelete.classList.add('list-list-task-dropdown-bar');
        listListTaskDropdownDelete.textContent = 'Delete';
        listListTaskDropdown.appendChild(listListTaskDropdownDelete);

        // TASK LIGN SEPARATOR
        const listListLign = document.createElement('span');
        listListLign.dataset.number = index;
        listListLign.classList.add('list-list-lign');
        listList.appendChild(listListLign);
    };

    // CLEAR TASK LIST
    const clearTasks = () => {
        while (listList.firstChild) {
            listList.removeChild(listList.firstChild);
        }
    };

    // RESET DROPDOWN TASKS
    const resetTask = () => {
        const allTaskDropdown = document.querySelectorAll('.list-list-task-dropdown');
        const allDropdownDate = document.querySelectorAll('.list-list-task-dropdown-date');
        const allDropdownDateInput = document.querySelectorAll('.list-list-task-dropdown-date-input');
        const allDropdownProject = document.querySelectorAll('.list-list-task-dropdown-project');
        const allDropdownProjectInput = document.querySelectorAll('.list-list-task-dropdown-project-input');
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
    };

    const displayInputOrNot = () => {
        if (listTitle.textContent === 'Overdue' || listTitle.textContent === 'Upcoming') {
            listAdd.classList.add('list-add-inactive');
        } else {
            listAdd.classList.remove('list-add-inactive');
        }
    };

    const displayTasks = () => {
        // INBOX
        clearTasks();
        if (listTitle.textContent === 'Inbox') {
            for (let i = 0; i < taskArray.length; i++) {
                if (taskArray[i].project === null) {
                    createTasks(taskArray[i].title, taskArray[i].project, taskArray[i].date, taskArray[i].done, taskArray[i].index = i);
                }
            }
        // OVERDUE
        } else if (listTitle.textContent === 'Overdue') {
            for (let i = 0; i < taskArray.length; i++) {
                if (taskArray[i].date !== null && taskArray[i].date.valueOf() < new Date().toLocaleString().slice(0, 10)) {

                    console.log(new Date().toLocaleString().slice(0, 10))
                    console.log(taskArray[i].date.valueOf())
                    createTasks(taskArray[i].title, taskArray[i].project, taskArray[i].date, taskArray[i].done, taskArray[i].index = i);
                }
            }
        // TODAY
        } else if (listTitle.textContent === 'Today') {
            for (let i = 0; i < taskArray.length; i++) {
                if (taskArray[i].date == new Date().toLocaleString().slice(0, 10)) {
                    createTasks(taskArray[i].title, taskArray[i].project, taskArray[i].date.toLocaleString(), taskArray[i].done, taskArray[i].index = i);
                }
            }
        // UPCOMING
        } else if (listTitle.textContent === 'Upcoming') {
            for (let i = 0; i < taskArray.length; i++) {
                if (taskArray[i].date > new Date().toLocaleString().slice(0, 10)) {
                    createTasks(taskArray[i].title, taskArray[i].project, taskArray[i].date, taskArray[i].done, taskArray[i].index = i);
                }
            }
        // PROJECTS
        } else {
            for (let i = 0; i < taskArray.length; i++) {
                if (taskArray[i].project == listTitle.textContent) {
                    createTasks(taskArray[i].title, taskArray[i].project, taskArray[i].date, taskArray[i].done, taskArray[i].index = i);
                }
            }
        }

        // DONE AND OVERDUE
        for (let i = 0; i < taskArray.length; i++) {
            for (let y = 0; y < document.querySelectorAll('.list-list-task-text-title').length; y++) {
                // DONE
                if (taskArray[i].title == document.querySelectorAll('.list-list-task-text-title')[y].textContent && document.querySelectorAll('.list-list-task-text-title')[y].dataset.number == taskArray[i].index && taskArray[i].done == true) {
                    document.querySelectorAll('.list-list-task-text-title')[y].classList.add('list-list-task-text-title-done');
                }
                // OVERDUE
                if (taskArray[i].title == document.querySelectorAll('.list-list-task-text-title')[y].textContent
                && document.querySelectorAll('.list-list-task-text-title')[y].dataset.number == taskArray[i].index
                && taskArray[i].date !== null && new Date().toLocaleString().slice(0, 10) > taskArray[i].date.valueOf()
                && new Date().toLocaleString().slice(3, 5) >= taskArray[i].date.valueOf().slice(3, 5)
                && new Date().toLocaleString().slice(6, 10) >= taskArray[i].date.valueOf().slice(6, 10)) {
                    document.querySelectorAll('.list-list-task-text-title')[y].classList.add('list-list-task-text-title-overdue');
                    document.querySelectorAll('.list-list-date')[y].classList.add('list-list-date-overdue');
                }
                // DONE AND OVERDUE
                if (taskArray[i].title == document.querySelectorAll('.list-list-task-text-title')[y].textContent
                && document.querySelectorAll('.list-list-task-text-title')[y].dataset.number == taskArray[i].index
                && taskArray[i].done == true
                && taskArray[i].date !== null
                && new Date().toLocaleString().slice(0, 10) > taskArray[i].date.valueOf()
                && new Date().toLocaleString().slice(3, 5) >= taskArray[i].date.valueOf().slice(3, 5)
                && new Date().toLocaleString().slice(6, 10) >= taskArray[i].date.valueOf().slice(6, 10)) {
                    document.querySelectorAll('.list-list-task-text-title')[y].classList.add('list-list-task-text-title-done-overdue');
                    document.querySelectorAll('.list-list-date')[y].classList.add('list-list-date-done-overdue');
                }
            }
        }
    };

    return {
        addTask,
        displayTasks,
        clearTasks,
        resetTask,
        displayInputOrNot,
    };
})();

export {
    fTasks as fTasks,
};

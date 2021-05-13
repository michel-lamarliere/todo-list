import { fLocalStorage, taskArray } from '../js/_local-storage.js';
import { fTasks } from '../js/_tasks.js';

const listTitle = document.getElementById('list-title');

const displayInbox = () => {
    listTitle.textContent = 'Inbox';
    fLocalStorage.getLocalStorage();
    fTasks.displayTasks();
    fTasks.displayInputOrNot();
};

const displayOverdue = () => {
    listTitle.textContent = 'Overdue';
    fLocalStorage.getLocalStorage();
    fTasks.displayTasks();
    fTasks.displayInputOrNot();
};

const displayToday = () => {
    listTitle.textContent = 'Today';
    fLocalStorage.getLocalStorage();
    fTasks.displayTasks();
    fTasks.displayInputOrNot();
};

const displayUpcoming = () => {
    listTitle.textContent = 'Upcoming';
    fLocalStorage.getLocalStorage();
    fTasks.displayTasks();
    fTasks.displayInputOrNot();
};

const displayProject = (project) => {
    listTitle.textContent = `${project}`;
    fLocalStorage.getLocalStorage();
    fTasks.displayTasks();
    fTasks.displayInputOrNot();
};

export {
    displayInbox as displayInbox,
    displayOverdue as displayOverdue,
    displayToday as displayToday,
    displayUpcoming as displayUpcoming,
    displayProject as displayProject,
};

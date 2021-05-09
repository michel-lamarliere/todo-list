import { fLocalStorage } from '../js/_local-storage.js';
import { fTasks } from '../js/_tasks.js';

const listTitle = document.getElementById('list-title');

const displayInbox = () => {
    listTitle.textContent = 'Inbox';
    fLocalStorage.getLocalStorage();
    fTasks.displayTasks();
};

const displayOverdue = () => {
    listTitle.textContent = 'Overdue';
    // fLocalStorage.getLocalStorage();
    // fTasks.displayTasks();
}

const displayToday = () => {    
    listTitle.textContent = 'Today';
    fLocalStorage.getLocalStorage();
    fTasks.displayTasks();
};

const displayUpcoming = () => {
    listTitle.textContent = 'Upcoming';
    // fLocalStorage.getLocalStorage();
    // fTasks.displayTasks();
}

const displayProject = (project) => {
    listTitle.textContent = `${project}`;
    fLocalStorage.getLocalStorage();
    fTasks.displayTasks();
}

export {    
    displayInbox as displayInbox,
    displayOverdue as displayOverdue,
    displayToday as displayToday,
    displayUpcoming as displayUpcoming,
    displayProject as displayProject
};
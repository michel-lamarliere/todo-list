import displayHeader from './js/_header.js';
import displaySidebar from './js/_sidebar.js';
import displayInbox from './js/_inbox.js';
import displayToday from './js/_today.js';

displayInbox();

let taskArray = [];

let allDots = document.querySelectorAll('.main-list-list-task-dots');
let allTaskDropdown = document.querySelectorAll('.main-list-list-task-dropdown');
let allTaskLign = document.querySelectorAll('.main-list-list-lign');
let allMainListListTask = document.querySelectorAll('.main-list-list-task');

const sidebarEvents = (() => {
    // NAVBAR HAMBURGER    
    const navbarHamburger = document.getElementById('navbar-hamburger');
    const mainSidebar = document.getElementById('main-sidebar');
    const inbox = document.getElementById('inbox');
    const today = document.getElementById('today');
    let mainListTitle = document.getElementById('main-list-title');
    let mainContainer = document.getElementById('main-list-container');
    
    navbarHamburger.addEventListener('click', () => {
        mainSidebar.classList.toggle('main-sidebar-closed');
    });

    inbox.addEventListener('click', () => {
        mainListTitle = document.getElementById('main-list-title');
        mainContainer = document.getElementById('main-list-container');
        if (mainListTitle.textContent !== 'Inbox') {
            manageTasks.clearTaskList();
            displayInbox();
            manageTasks.updateList(taskArray);
        }
    });

    today.addEventListener('click', () => {
        mainListTitle = document.getElementById('main-list-title');
        mainContainer = document.getElementById('main-list-container');
        if (mainListTitle.textContent !== 'Today') {
            manageTasks.clearTaskList();
            displayToday();
        }
        let allMainListListTask = document.querySelectorAll('.main-list-list-task');
        let taskArrayToday = [];
        for (let i = 0; i < taskArray.length; i++) {
            if (taskArray[i].date === new Date().toISOString().slice(0, 10)) {
                taskArrayToday.push(taskArray[i]);
            }
        } 
        manageTasks.updateList(taskArrayToday);
    
    });

    const clearMain = () => {
        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.firstChild);
        }
    };
})();

const manageTasks = (() => {
    const mainListAdd = document.getElementById('main-list-add');
    const mainListAddTask = document.getElementById('main-list-add-task');
    const mainListAddTaskInputCancel = document.getElementById('main-list-add-task-input-cancel');
    const mainListAddTaskInput = document.getElementById('main-list-add-task-input');
    const mainListAddTaskInputAdd = document.getElementById('main-list-add-task-input-add');
    const mainListList = document.getElementById('main-list-list');
    let allMainListListTask = document.querySelectorAll('.main-list-list-task');
    let allMainListListLign = document.querySelectorAll('.main-list-list-lign');
    let allDeleteButton = document.querySelectorAll('.main-list-list-task-dropdown-delete');
    let allDropdownDate = document.querySelectorAll('.main-list-list-task-dropdown-date');
    let allDropdownDateInput = document.querySelectorAll('.main-list-list-task-dropdown-date-input');
    let allDropdownDateInputDate = document.querySelectorAll('.main-list-list-task-dropdown-date-input-date');
    let allDropdownDateInputButton = document.querySelectorAll('.main-list-list-task-dropdown-date-input-button');

    const overlay = document.getElementById('overlay');

    // FUNCTIONS
        // ADD CONSTRUCTOR
    const addTask = (title, project, date) => {
        return { title, project, date }
    }

     // UPDATE LIST
    const updateList = (array) => {
        for (let i = 0; i < array.length; i++) {
            if (array[0].title) {
                console.log('updating list');
                let mainListListTask = document.createElement('div');
                mainListListTask.classList.add('main-list-list-task')

                let mainListListDay = document.createElement('div');
                mainListListDay.classList.add('main-sidebar-list-day');
                let mainDot = document.createElement('div');
                mainDot.classList.add('main-dot')
                let li = document.createElement('li');
                li.textContent = taskArray[i].title;
                    // DOTS CONTAINER
                let mainListListTaskDots = document.createElement('div');
                mainListListTaskDots.classList.add('main-list-list-task-dots');
                    // DROPDOWN 
                let mainListListTaskDropdown = document.createElement('ul');
                mainListListTaskDropdown.classList.add('main-list-list-task-dropdown');
                mainListListTask.appendChild(mainListListTaskDropdown);

                        // DROPDOWN LI DATE
                let mainListListTaskDropdownDate = document.createElement('li');
                mainListListTaskDropdownDate.classList.add('main-list-list-task-dropdown-date');
                mainListListTaskDropdownDate.textContent = 'Date';
                mainListListTaskDropdown.appendChild(mainListListTaskDropdownDate);

                        // DROPDOWN LI DATE INPUT
                let mainListListTaskDropdownDateInput = document.createElement('li');
                mainListListTaskDropdownDateInput.classList.add('main-list-list-task-dropdown-date-input');

                            // INPUT TYPE DATE 
                let mainListListTaskDropdownDateInputDate = document.createElement('input');
                mainListListTaskDropdownDateInputDate.type = 'date';
                mainListListTaskDropdownDateInputDate.value = new Date().toISOString().slice(0, 10);
                mainListListTaskDropdownDateInputDate.classList.add('main-list-list-task-dropdown-date-input-date');
                mainListListTaskDropdownDateInput.appendChild(mainListListTaskDropdownDateInputDate);

                            // INPUT BUTTON
                let mainListListTaskDropdownDateInputButton = document.createElement('button');
                mainListListTaskDropdownDateInputButton.classList.add('main-list-list-task-dropdown-date-input-button');
                mainListListTaskDropdownDateInputButton.textContent = 'Ok';
                mainListListTaskDropdownDateInput.appendChild(mainListListTaskDropdownDateInputButton);
                mainListListTaskDropdown.appendChild(mainListListTaskDropdownDateInput);

                        // DROPDOWN LI DELETE
                let mainListListTaskDropdownDelete = document.createElement('li');
                mainListListTaskDropdownDelete.classList.add('main-list-list-task-dropdown-delete');
                mainListListTaskDropdownDelete.textContent = 'Delete';
                mainListListTaskDropdown.appendChild(mainListListTaskDropdownDelete);

                // APPEND

                    // TASK LIGN SEPARATOR
                let mainListListLign = document.createElement('span');
                mainListListLign.classList.add('main-list-list-lign');
                // mainListListLign.dataset.number = i;
                    // APPENDING
                mainListListDay.appendChild(mainDot);
                mainListListDay.appendChild(li);
                mainListListTask.appendChild(mainListListDay);
                mainListListTask.appendChild(mainListListTaskDots);
                mainListList.appendChild(mainListListTask);
                mainListList.appendChild(mainListListLign);
            }   
        }

        const setAttribute = () => {
            console.log('setting attribute');
            allMainListListTask = document.querySelectorAll('.main-list-list-task');
            allMainListListLign = document.querySelectorAll('.main-list-list-lign');
            allDots = document.querySelectorAll('.main-list-list-task-dots');
            allTaskLign = document.querySelectorAll('.main-list-list-lign');
            allTaskDropdown = document.querySelectorAll('.main-list-list-task-dropdown');
            allDeleteButton = document.querySelectorAll('.main-list-list-task-dropdown-delete');
            allDropdownDate = document.querySelectorAll('.main-list-list-task-dropdown-date');
            allDropdownDateInput = document.querySelectorAll('.main-list-list-task-dropdown-date-input');
            allDropdownDateInputDate = document.querySelectorAll('.main-list-list-task-dropdown-date-input-date');
            allDropdownDateInputButton = document.querySelectorAll('.main-list-list-task-dropdown-date-input-button');
    
            for (let i = 0; i < taskArray.length; i++) {
                if (allMainListListTask[0]) {
                    allMainListListTask[i].dataset.number = i;
                    allMainListListLign[i].dataset.number = i;
                    allDots[i].dataset.number = i;
                    allTaskLign[i].dataset.number = i;
                    allTaskDropdown[i].dataset.number = i;
                    allDeleteButton[i].dataset.number = i;
                    allDropdownDate[i].dataset.number = i;
                    allDropdownDateInput[i].dataset.number = i;
                    allDropdownDateInputButton[i].dataset.number = i;
                }
            }

            for (let i = 0; i < taskArray.length; i++) {
                if (allMainListListTask[0]) {
                    allDropdownDateInputDate[i].value = taskArray[i].date;
                }
            }
        };

        let allDeleteButton = document.querySelectorAll('.main-list-list-task-dropdown-delete');
        let allTaskLign = document.querySelectorAll('.main-list-list-lign');
        let allMainListListTask = document.querySelectorAll('.main-list-list-task');

        const dropdown = (() => {
            allDots = document.querySelectorAll('.main-list-list-task-dots');
            allTaskDropdown = document.querySelectorAll('.main-list-list-task-dropdown');

            allDots.forEach(dots => dots.addEventListener('click', event => {
                allTaskDropdown[event.target.dataset.number].classList.add('main-list-list-task-dropdown-active');
                overlay.classList.add('overlay-active');
            }));
    
            overlay.addEventListener('click', () => {
                resetDropdown();
            });
            setAttribute();
        })()

        const displayDateInput = (() => {
            allDropdownDate.forEach(item => item.addEventListener('click', event => {
                event.target.classList.add('main-list-list-task-dropdown-date-inactive');
                allDropdownDateInput[event.target.dataset.number].classList.add('main-list-list-task-dropdown-date-input-active');
            }))
        })();

        const dateInputButton = (() => {
            allDropdownDateInputButton.forEach(button => button.addEventListener('click', event => {
                taskArray[event.target.dataset.number].date = allDropdownDateInputDate[event.target.dataset.number].value;
                updateLocalStorage.saveLocal();
            }))
        })();

        const deleteTask = (() => {
            allDeleteButton.forEach(button => button.addEventListener('click', event => {
                overlay.classList.remove('overlay-active');
                // allMainListListTask[event.target.dataset.number].remove();
                event.target.parentNode.parentNode.remove();
                allTaskLign[event.target.dataset.number].remove();
                allTaskDropdown[event.target.dataset.number].remove();
                taskArray.splice(event.target.dataset.number, 1);
                updateLocalStorage.saveLocal();

                setAttribute();
            }));
        })();
    }

    // CLEAR TASK LIST 
    
    const clearTaskList = () => {
        let allMainListListTask = document.querySelectorAll('.main-list-list-task');
        let allMainListListLign = document.querySelectorAll('.main-list-list-lign');
        if (taskArray.length !== 0) {
            for (let i = 0; i < allMainListListTask.length; i++) {
                allMainListListTask[i].remove();
                allMainListListLign[i].remove();
            }
        }
    }
    
    // CLEAR TEXT INPUT 
    const clearInput = () => {
        mainListAddTaskInput.value = "";
    }

    const resetDropdown = () => {
        for (let i = 0; i < allDropdownDate.length; i++) {
            allDropdownDate[i].classList.remove('main-list-list-task-dropdown-date-inactive');
            allDropdownDateInput[i].classList.remove('main-list-list-task-dropdown-date-input-active');  
        }
        for (let i = 0; i < allTaskDropdown.length; i++) {
            allTaskDropdown[i].classList.remove('main-list-list-task-dropdown-active');
            overlay.classList.remove('overlay-active');
        }
    }

    const displayAddATaskInput = (() => {
        // DISPLAY INPUT BUTTON
        mainListAdd.addEventListener('click', () => {
            mainListAdd.classList.toggle('main-list-add-inactive');
            mainListAddTask.classList.toggle('main-list-add-task-active');
        });

        // CANCEL TASK BUTTON
        mainListAddTaskInputCancel.addEventListener('click', () => {
            mainListAdd.classList.toggle('main-list-add-inactive');
         mainListAddTask.classList.toggle('main-list-add-task-active');
        clearInput();
        });
    })();
   
    // ADD TASK
    mainListAddTaskInputAdd.addEventListener('click', () => {
        if (mainListAddTaskInput.value !== "") {
            let title = mainListAddTaskInput.value;
            let newTask = addTask(title, null, null);
            taskArray.push(newTask);
            updateLocalStorage.saveLocal();
            clearTaskList();
            updateList(taskArray);
            clearInput();
        } else {
            mainListAddTaskInput.placeholder = 'Please enter something';
        }
    });

    // ENTER EVENT LISTENER
    document.addEventListener('keydown', event => {
        if (event.key === 'Enter' ) {
            document.getElementById('main-list-add-task-input-add').click();
        }
    });
    return { updateList, clearInput, clearTaskList };
})();
    
// LOCAL STORAGE
const updateLocalStorage = (() => {
    const saveLocal = () => {
        localStorage.setItem("taskArray", JSON.stringify(taskArray));
    }
    
    function getLocal() {
        let storage = JSON.parse(localStorage.getItem("taskArray"));

        if (storage) {
            taskArray.push(...storage);
        }
    }

    const displayLocal = () => {
        getLocal();
        manageTasks.updateList(taskArray);
    };

    return { saveLocal, getLocal, displayLocal}
})();    

manageTasks.clearInput();
updateLocalStorage.displayLocal();
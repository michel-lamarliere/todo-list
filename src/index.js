import displayHeader from './js/_header.js';
import displaySidebar from './js/_sidebar.js';
import displayInbox from './js/_inbox.js';
import displayToday from './js/_today.js';

displayInbox();

let taskArray = [];
let taskArrayToday = [];

const overlay = document.getElementById('overlay');
const navbarHamburger = document.getElementById('navbar-hamburger');
const mainSidebar = document.getElementById('main-sidebar');
const inbox = document.getElementById('inbox');
const today = document.getElementById('today');
const mainContainer = document.getElementById('main-list-container');
const mainListTitle = document.getElementById('main-list-title');
const mainListList = document.getElementById('main-list-list');
const mainListAdd = document.getElementById('main-list-add');
const mainListAddTask = document.getElementById('main-list-add-task');
const mainListAddTaskInput = document.getElementById('main-list-add-task-input');
const mainListAddTaskInputAdd = document.getElementById('main-list-add-task-input-add');
const mainListAddTaskInputCancel = document.getElementById('main-list-add-task-input-cancel');

const sidebarEvents = (() => {
    
    navbarHamburger.addEventListener('click', () => {
        mainSidebar.classList.toggle('main-sidebar-closed');
    });

    inbox.addEventListener('click', () => {
        if (mainListTitle.textContent !== 'Inbox') {
            manageTasks.clearTaskList();
            displayInbox();
            manageTasks.updateList(taskArray);
        }
    });

    today.addEventListener('click', () => {
        taskArrayToday = [];
        if (mainListTitle.textContent !== 'Today') {
            manageTasks.clearTaskList();
            displayToday();
        }
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
                // mainListListTaskDropdownDateInputDate.value = new Date().toISOString().slice(0, 10);
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
            let allMainListListTask = document.querySelectorAll('.main-list-list-task');
            let allMainListListLign = document.querySelectorAll('.main-list-list-lign');
            let allDots = document.querySelectorAll('.main-list-list-task-dots');
            let allTaskDropdown = document.querySelectorAll('.main-list-list-task-dropdown');
            let allDeleteButton = document.querySelectorAll('.main-list-list-task-dropdown-delete');
            let allDropdownDate = document.querySelectorAll('.main-list-list-task-dropdown-date');
            let allDropdownDateInput = document.querySelectorAll('.main-list-list-task-dropdown-date-input');
            let allDropdownDateInputButton = document.querySelectorAll('.main-list-list-task-dropdown-date-input-button');
            let allDropdownDateInputDate = document.querySelectorAll('.main-list-list-task-dropdown-date-input-date');
            
            console.log('setting attribute');
            if (mainListTitle.textContent == 'Inbox') {
                for (let i = 0; i < taskArray.length; i++) {
                    if (allMainListListTask[0]) {
                        allMainListListTask[i].dataset.number = i;
                        allMainListListLign[i].dataset.number = i;
                        allDots[i].dataset.number = i;
                        allTaskDropdown[i].dataset.number = i;
                        allDeleteButton[i].dataset.number = i;
                        allDropdownDate[i].dataset.number = i;
                        allDropdownDateInput[i].dataset.number = i;
                        allDropdownDateInputButton[i].dataset.number = i;
                    }
                    if (allMainListListTask[0]) {
                        allDropdownDateInputDate[i].value = taskArray[i].date;
                    }
                }
            } else if (mainListTitle.textContent == 'Today') {
                for (let i = 0; i < taskArrayToday.length; i++) {
                    if (allMainListListTask[0]) {
                        allMainListListTask[i].dataset.number = i;
                        allMainListListLign[i].dataset.number = i;
                        allDots[i].dataset.number = i;
                        allTaskDropdown[i].dataset.number = i;
                        allDeleteButton[i].dataset.number = i;
                        allDropdownDate[i].dataset.number = i;
                        allDropdownDateInput[i].dataset.number = i;
                        allDropdownDateInputButton[i].dataset.number = i;
                    }
                    if (allMainListListTask[0]) {
                        allDropdownDateInputDate[i].value = taskArray[i].date;
                    }
                }
            }
            
        };

        const dropdown = (() => {
            let allDots = document.querySelectorAll('.main-list-list-task-dots');
            
            allDots.forEach(dots => dots.addEventListener('click', event => {
                const allTaskDropdown = document.querySelectorAll('.main-list-list-task-dropdown');
                console.log(allTaskDropdown);
                allTaskDropdown[event.target.dataset.number].classList.add('main-list-list-task-dropdown-active');
                overlay.classList.add('overlay-active');
            }));
    
            overlay.addEventListener('click', () => {
                resetDropdown();
            });
            setAttribute();
        })()

        const displayDateInput = (() => {
            let allDropdownDate = document.querySelectorAll('.main-list-list-task-dropdown-date');
            let allDropdownDateInput = document.querySelectorAll('.main-list-list-task-dropdown-date-input');

            allDropdownDate.forEach(item => item.addEventListener('click', event => {
                event.target.classList.add('main-list-list-task-dropdown-date-inactive');
                allDropdownDateInput[event.target.dataset.number].classList.add('main-list-list-task-dropdown-date-input-active');
            }))
        })();

        const dateInputButton = (() => {
            let allDropdownDateInputButton = document.querySelectorAll('.main-list-list-task-dropdown-date-input-button');
            let allDropdownDateInputDate = document.querySelectorAll('.main-list-list-task-dropdown-date-input-date');

            allDropdownDateInputButton.forEach(button => button.addEventListener('click', event => {
                taskArray[event.target.dataset.number].date = allDropdownDateInputDate[event.target.dataset.number].value;
                updateLocalStorage.saveLocal();
                console.log(taskArray);
                console.log('input button')
            }))
        })();

        const deleteTask = (() => {
            let allDeleteButton = document.querySelectorAll('.main-list-list-task-dropdown-delete');
            let allMainListListLign = document.querySelectorAll('.main-list-list-lign');

            allDeleteButton.forEach(button => button.addEventListener('click', event => {
                overlay.classList.remove('overlay-active');
                // allMainListListTask[event.target.dataset.number].remove();
                event.target.parentNode.parentNode.remove();
                allMainListListLign[event.target.dataset.number].remove();
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
        let allTaskDropdown = document.querySelectorAll('.main-list-list-task-dropdown');
        let allDropdownDate = document.querySelectorAll('.main-list-list-task-dropdown-date');
        let allDropdownDateInput = document.querySelectorAll('.main-list-list-task-dropdown-date-input');

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
        console.log(taskArray);
    };

    return { saveLocal, getLocal, displayLocal}
})();    

manageTasks.clearInput();
updateLocalStorage.displayLocal();
import displayHeader from './js/_header.js';
import displaySidebar from './js/_sidebar.js';
import displayInbox from './js/_inbox.js';
import displayToday from './js/_today.js';
import displayProject from './js/_project.js';

displayInbox();

let taskArray = [];
let projectArray = [];
let mustDeleteTask;
let mustDeleteProject;

const overlay = document.getElementById('overlay');
const navbarHamburger = document.getElementById('navbar-hamburger');
const sidebar = document.getElementById('sidebar');
const inbox = document.getElementById('inbox');
const today = document.getElementById('today');
const sidebarProjectsAdd = document.getElementById('sidebar-projects-add');
const sidebarProjectsAddTitle = document.getElementById('sidebar-projects-add-title');
const sidebarProjectsAddProject = document.getElementById('sidebar-projects-add-project');
const sidebarProjectsAddProjectCancel = document.getElementById('list-projects-add-project-cancel');
const sidebarProjectsAddProjectAdd = document.getElementById('list-projects-add-project-add');
const sidebarProjectsAddProjectInput = document.getElementById('sidebar-projects-add-project-input');
const sidebarProjectsList = document.getElementById('sidebar-projects-list');

const container = document.getElementById('list-container');
const listTitle = document.getElementById('list-title');
const listList = document.getElementById('list-list');
const listAdd = document.getElementById('list-add');
const listAddTask = document.getElementById('list-add-task');
const listAddTaskInput = document.getElementById('list-add-task-input');
const listAddTaskInputAdd = document.getElementById('list-add-task-input-add');
const listAddTaskInputCancel = document.getElementById('list-add-task-input-cancel');

const updateVariables = () => {
    console.log('refreshing data');

    const allSidebarProjectsListProject = document.querySelectorAll('.sidebar-projects-list-project');
    const allSidebarProjectsListProjectDots = document.querySelectorAll('.sidebar-projects-list-project-dots');
    const allSidebarProjectsListProjectTitle = document.querySelectorAll('.sidebar-projects-list-project-title');
    const allSidebarProjectsListProjectDropdown = document.querySelectorAll('.sidebar-projects-list-project-dropdown');
    const allSidebarProjectsListProjectDropdownDelete = document.querySelectorAll('.sidebar-projects-list-project-dropdown-delete');

    let allDots = document.querySelectorAll('.list-list-task-dots');
    let allDeleteButton = document.querySelectorAll('.list-list-task-dropdown-delete');
    let allTaskDropdown = document.querySelectorAll('.list-list-task-dropdown');
    let allTaskTitle = document.querySelectorAll('.list-list-task-text-title');
    let allDropdownDate = document.querySelectorAll('.list-list-task-dropdown-date');
    let allDropdownProject = document.querySelectorAll('.list-list-task-dropdown-project');
    let allDropdownProjectInput = document.querySelectorAll('.list-list-task-dropdown-project-input');
    let listListTaskDropdownProjectInputInput = document.querySelectorAll('.list-list-task-dropdown-project-input-input')
    let listListTaskDropdownProjectInputButton = document.querySelectorAll('.list-list-task-dropdown-project-input-button');
    let allDropdownDateInput = document.querySelectorAll('.list-list-task-dropdown-date-input');
    let listListTaskDropdownDateInputDate = document.querySelectorAll('.list-list-task-dropdown-date-input-date')
    let allListListTask = document.querySelectorAll('.list-list-task');
    let allListListLign = document.querySelectorAll('.list-list-lign');
    let allDropdownDateInputButton = document.querySelectorAll('.list-list-task-dropdown-date-input-button');
    let allDropdownDateInputDate = document.querySelectorAll('.list-list-task-dropdown-date-input-date');


    // EVENT LISTENERS
        // SIDEBAR PROJECT 
    allSidebarProjectsListProjectTitle.forEach(title => title.addEventListener('click', event => {
        displayProject(projectArray[event.target.dataset.number]);
        fTasks.clearTasks();
        fTasks.displayTasks();
        fTasks.updateList();
        fTasks.setAttributeTask();
    }));

        // SIDEBAR PROJECTS DOTS
    allSidebarProjectsListProjectDots.forEach(dots => dots.addEventListener('click', event => {
        allSidebarProjectsListProjectDropdown[event.target.dataset.number].classList.add('sidebar-projects-list-project-dropdown-active');
        overlay.classList.add('overlay-active');
        mustDeleteProject = true;
    }));
        // SIDEBAR PROJECTS DELETE
    allSidebarProjectsListProjectDropdownDelete.forEach(button => button.addEventListener('click', event => {
        if (mustDeleteProject == true) {
            projectArray.splice(event.target.dataset.number, 1);
            fLocalStorage.saveLocalProjects();
            fSidebar.clearProjects();
            projectArray = [];
            fLocalStorage.getLocalProjects();
            fSidebar.displayProjects();
            fSidebar.setAttributeProject();
            fTasks.setAttributeTask();
            fTasks.clearInputs();
            fTasks.clearTasks();
            fTasks.displayTasks();
            updateVariables();
            fTasks.setAttributeTask();
            fSidebar.setAttributeProject();
            mustDeleteProject = false;
        }
    }));

        // TASK DOTS
    allDots.forEach(dots => dots.addEventListener('click', event => {
        console.log('click');
        allTaskDropdown[event.target.dataset.number].classList.add('list-list-task-dropdown-active');
        overlay.classList.add('overlay-active');
        mustDeleteTask = true;
    }));

        // OVERLAY
    overlay.addEventListener('click', () => {
        fSidebar.resetDropdownProject();
        fTasks.resetDropdownTask();
        fTasks.resetAddTask();
        fSidebar.resetAddProject();
    });

        // TASK DROPDOWN
    allDropdownProject.forEach(button => button.addEventListener('click', event => {
        allDropdownProject[event.target.dataset.number].classList.add('list-list-task-dropdown-project-inactive');
        allDropdownProjectInput[event.target.dataset.number].classList.add('list-list-task-dropdown-project-input-active');
    }));
        
        // TASKS DROPDOWN PROJECT
    listListTaskDropdownProjectInputButton.forEach(button => button.addEventListener('click', event => {
        console.log('okayfreg');
        console.log(listListTaskDropdownProjectInputInput[event.target.dataset.number].value);

        for (let i = 0; i < taskArray.length; i++) {
            if (taskArray[i].title == allTaskTitle[event.target.dataset.number].textContent ) {
                taskArray[i].project = listListTaskDropdownProjectInputInput[event.target.dataset.number].value;
                fLocalStorage.saveLocalTasks();
            }
        }

        fTasks.clearTasks();
        fTasks.displayTasks();
        fTasks.updateList();
        fTasks.setAttributeTask();
    }));

            // TASK DROPDOWN DATE INPUT
    allDropdownDate.forEach(item => item.addEventListener('click', event => {
        event.target.classList.add('list-list-task-dropdown-date-inactive');
        allDropdownDateInput[event.target.dataset.number].classList.add('list-list-task-dropdown-date-input-active');
    }));
        // TASK DROPDOWN DATE BUTTON
    allDropdownDateInputButton.forEach(button => button.addEventListener('click', event => {
        taskArray[event.target.dataset.number].date = allDropdownDateInputDate[event.target.dataset.number].value;
        fLocalStorage.saveLocalTasks();
    }));

        // TASK DROPDOWN BUTTON
    allDeleteButton.forEach(button => button.addEventListener('click', event => {
        if (mustDeleteTask == true) {
            if (listTitle.textContent == 'Today') {
                for (let i = 0; i < taskArray.length; i++) {
                    if (taskArray[i].title == allTaskTitle[event.target.dataset.number].textContent && taskArray[i].date == listListTaskDropdownDateInputDate[event.target.dataset.number].value) {
                        taskArray.splice(i, 1);
                        console.log(taskArray);
                        fTasks.clearTasks();
                        fLocalStorage.saveLocalTasks();
                        taskArray = [];
                        fLocalStorage.getLocalTasks();
                        fTasks.displayTasks();
                        overlay.classList.remove('overlay-active');
                        fTasks.setAttributeTask();
                        mustDeleteTask = false;
                    }
                }
            } else {
                taskArray.splice(event.target.dataset.number, 1);
                console.log(taskArray);
                fTasks.clearTasks();
                fLocalStorage.saveLocalTasks();
                taskArray = [];
                fLocalStorage.getLocalTasks();
                fTasks.displayTasks();
                overlay.classList.remove('overlay-active');
                fTasks.setAttributeTask();
                mustDeleteTask = false;
            }
        }
        console.log(taskArray);
    }));

    document.getElementById('sidebar-projects-title').textContent = `Projects: (${projectArray.length})`;
}

const fSidebar = (() => {

        // NAVBAR HAMBURGER
    navbarHamburger.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-closed');
    });

        // INBOX 
    inbox.addEventListener('click', () => {
        if (listTitle.textContent !== 'Inbox') {
            console.log('inbox');
            fTasks.clearTasks();
            fTasks.displayTasks();
            displayInbox();
            fTasks.updateList();
            fTasks.setAttributeTask();
            updateVariables();
        }
    });
        // TODAY
    today.addEventListener('click', () => {
        if (listTitle.textContent !== 'Today') {
            console.log('today');
            fTasks.clearTasks();
            fTasks.displayTasks();
            displayToday();
            fTasks.updateList();
            fTasks.setAttributeTask();
            updateVariables();
        }
    });
        // SIDEBAR PROJECT ADD
    sidebarProjectsAdd.addEventListener('click', () => {
        console.log('okay');
        overlay.classList.add('overlay-active');
        sidebarProjectsAdd.classList.add('sidebar-projects-add-inactive');
        sidebarProjectsAddProject.classList.add('sidebar-projects-add-project-active');
    })
        // SIDEBAR PROJECT CANCEL BUTTON
    sidebarProjectsAddProjectCancel.addEventListener('click', () => {
        sidebarProjectsAdd.classList.remove('sidebar-projects-add-inactive');
        sidebarProjectsAddProject.classList.remove('sidebar-projects-add-project-active');
    });
        // SIDEBAR PROJECT ADD BUTTON
    sidebarProjectsAddProjectAdd.addEventListener('click', () => {
        console.log('hello')
        clearProjects();
        projectArray.push(sidebarProjectsAddProjectInput.value);
        fLocalStorage.saveLocalProjects();
        projectArray = [];
        fLocalStorage.getLocalProjects();
        displayProjects();
        console.log(projectArray);
        console.log('adding')
        fTasks.clearInputs();
        fTasks.clearTasks();
        fTasks.displayTasks();
        updateVariables();
        fTasks.setAttributeTask();
        setAttributeProject();
    });

        // CREATE ALL PROJECTS
    const displayProjects = () => {
        for (let i = 0; i < projectArray.length; i++) {
            let sidebarProjectsListProject = document.createElement('div');
            sidebarProjectsListProject.classList.add('sidebar-projects-list-project');
            sidebarProjectsList.appendChild(sidebarProjectsListProject);
            
            let dotText = document.createElement('div');
            dotText.classList.add('dot-text');
            sidebarProjectsListProject.appendChild(dotText);

            let mainDot = document.createElement('div');
            mainDot.classList.add('main-dot');
            mainDot.classList.add('sidebar-projects-dot');
            dotText.appendChild(mainDot);
        
            let sidebarProjectsListTitle = document.createElement('div');
            sidebarProjectsListTitle.classList.add('sidebar-projects-list-project-title');
            sidebarProjectsListTitle.textContent = projectArray[i];
            dotText.appendChild(sidebarProjectsListTitle);

            let sidebarProjectsListDots = document.createElement('div');
            sidebarProjectsListDots.classList.add('sidebar-projects-list-project-dots');
            sidebarProjectsListProject.appendChild(sidebarProjectsListDots);

            let sidebarProjectsListDropdown = document.createElement('ul');
            sidebarProjectsListDropdown.classList.add('sidebar-projects-list-project-dropdown');
            sidebarProjectsListProject.appendChild(sidebarProjectsListDropdown);

            let sidebarProjectsListDropdownDelete = document.createElement('li');
            sidebarProjectsListDropdownDelete.classList.add('sidebar-projects-list-project-dropdown-delete');
            sidebarProjectsListDropdownDelete.textContent = 'Delete';
            sidebarProjectsListDropdown.appendChild(sidebarProjectsListDropdownDelete);
        
            sidebarProjectsAdd.classList.remove('sidebar-projects-add-inactive');
            sidebarProjectsAddProject.classList.remove('sidebar-projects-add-project-active');
            updateVariables();
        }
        console.log(taskArray);
    }

        // CLEAR ALL PROJECT
    const clearProjects = () => {
        let allSidebarProjectsListProject = document.querySelectorAll('.sidebar-projects-list-project');
            for (let i = 0; i < allSidebarProjectsListProject.length; i++) {
                allSidebarProjectsListProject[i].remove();
            }
        console.log('cleared projects');
    }
        // RESETS INPUT POP UP
    const resetAddProject = () => {
        sidebarProjectsAdd.classList.remove('sidebar-projects-add-inactive');
        sidebarProjectsAddProject.classList.remove('sidebar-projects-add-project-active');
    }

        // SETS PROJECT DATASET NUMBERS
    const setAttributeProject = () => {
        const allSidebarProjectsListProject = document.querySelectorAll('.sidebar-projects-list-project');
        const allDotText = document.querySelectorAll('.dot-text');
        const allMainDot = document.querySelectorAll('.sidebar-projects-dot');
        const allSidebarProjectsListProjectTitle = document.querySelectorAll('.sidebar-projects-list-project-title');
        const allSidebarProjectsListProjectDots = document.querySelectorAll('.sidebar-projects-list-project-dots');
        const allSidebarProjectsListProjectDropdown = document.querySelectorAll('.sidebar-projects-list-project-dropdown');
        const allSidebarProjectsListProjectDropdownDelete = document.querySelectorAll('.sidebar-projects-list-project-dropdown-delete');

        for (let i = 0; i < allSidebarProjectsListProject.length; i++) {
           allSidebarProjectsListProject[i].dataset.number = i;
           allDotText[i].dataset.number = i;
           allMainDot[i].dataset.number = i;
           allSidebarProjectsListProjectTitle[i].dataset.number = i;
           allSidebarProjectsListProjectDots[i].dataset.number = i;
           allSidebarProjectsListProjectDropdown[i].dataset.number = i;
           allSidebarProjectsListProjectDropdownDelete[i].dataset.number = i;
        } 
        updateVariables();
    }
        
        // RESETS DROPDOWN
    const resetDropdownProject = () => {
        const allSidebarProjectsListProjectDropdown = document.querySelectorAll('.sidebar-projects-list-project-dropdown');

        for (let i = 0; i < allSidebarProjectsListProjectDropdown.length; i++) {
            allSidebarProjectsListProjectDropdown[i].classList.remove('sidebar-projects-list-project-dropdown-active');
            overlay.classList.remove('overlay-active');
        }
    }

    return { displayProjects, clearProjects, resetAddProject, setAttributeProject, resetDropdownProject }
})();

const fTasks = (() => {

    // ADD CONSTRUCTOR
    const addTask = (title, project, date) => {
        return { title, project, date }
    }

    const displayTasks = () => {
        for (let i = 0; i < taskArray.length; i++) {
            let listListTask = document.createElement('div');
            listListTask.classList.add('list-list-task')

            let listListDay = document.createElement('div');
            listListDay.classList.add('list-list-task-text');
            let mainDot = document.createElement('div');
            mainDot.classList.add('main-dot')
            let li = document.createElement('li');
            li.classList.add('list-list-task-text-title');
            li.textContent = taskArray[i].title;
                // DOTS CONTAINER
            let listListTaskDots = document.createElement('div');
            listListTaskDots.classList.add('list-list-task-dots');
                // DROPDOWN 
            let listListTaskDropdown = document.createElement('ul');
            listListTaskDropdown.classList.add('list-list-task-dropdown');
            listListTask.appendChild(listListTaskDropdown);

                    // DROPDOWN PROJECT
            let listListTaskDropdownProject = document.createElement('li');
            listListTaskDropdownProject.classList.add('list-list-task-dropdown-project');
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

            for (let i = 0; i < projectArray.length; i++) {
                let listListTaskDropdownProjectInputInputOption = document.createElement('option');
                listListTaskDropdownProjectInputInputOption.textContent = projectArray[i];
                listListTaskDropdownProjectInputInputOption.value = projectArray[i];
                listListTaskDropdownProjectInputInput.appendChild(listListTaskDropdownProjectInputInputOption);
                console.log('okay')
            }
            
                // DROPDOWN PROJECT BUTTON
            let listListTaskDropdownProjectInputButton = document.createElement('button');
            listListTaskDropdownProjectInputButton.classList.add('list-list-task-dropdown-project-input-button');
            listListTaskDropdownProjectInputButton.textContent = 'OK';
            listListTaskDropdownProjectInput.appendChild(listListTaskDropdownProjectInputButton);

                    // DROPDOWN LI DATE
            let listListTaskDropdownDate = document.createElement('li');
            listListTaskDropdownDate.classList.add('list-list-task-dropdown-date');
            listListTaskDropdownDate.textContent = 'Date';
            listListTaskDropdown.appendChild(listListTaskDropdownDate);

                    // DROPDOWN LI DATE INPUT
            let listListTaskDropdownDateInput = document.createElement('li');
            listListTaskDropdownDateInput.classList.add('list-list-task-dropdown-date-input');

                        // INPUT TYPE DATE 
            let listListTaskDropdownDateInputDate = document.createElement('input');
            listListTaskDropdownDateInputDate.type = 'date';
            listListTaskDropdownDateInputDate.value = taskArray[i].date;
            listListTaskDropdownDateInputDate.classList.add('list-list-task-dropdown-date-input-date');
            listListTaskDropdownDateInput.appendChild(listListTaskDropdownDateInputDate);

                        // INPUT BUTTON
            let listListTaskDropdownDateInputButton = document.createElement('button');
            listListTaskDropdownDateInputButton.classList.add('list-list-task-dropdown-date-input-button');
            listListTaskDropdownDateInputButton.textContent = 'OK';
            listListTaskDropdownDateInput.appendChild(listListTaskDropdownDateInputButton);
            listListTaskDropdown.appendChild(listListTaskDropdownDateInput);

                    // DROPDOWN LI DELETE
            let listListTaskDropdownDelete = document.createElement('li');
            listListTaskDropdownDelete.classList.add('list-list-task-dropdown-delete');
            listListTaskDropdownDelete.textContent = 'Delete';
            listListTaskDropdown.appendChild(listListTaskDropdownDelete);

            // APPEND

                // TASK LIGN SEPARATOR
            let listListLign = document.createElement('span');
            listListLign.classList.add('list-list-lign');
                // APPENDING
            listListDay.appendChild(mainDot);
            listListDay.appendChild(li);
            listListTask.appendChild(listListDay);
            listListTask.appendChild(listListTaskDots);
            listList.appendChild(listListTask);
            listList.appendChild(listListLign);
        }
        console.log('created tasks');
        console.log(taskArray);
    }

     // UPDATE LIST
    const updateList = () => {

        if (listTitle.textContent == 'Inbox' && taskArray[0]) {
            let allListListTask = document.querySelectorAll('.list-list-task');
            let allListListLign = document.querySelectorAll('.list-list-lign');
            console.log('created inbox tasks');
            for (let i = 0; i < taskArray.length; i++) {
                if (taskArray[i].project == null) {
                    allListListTask[i].remove();
                    allListListLign[i].remove();
                }
            }

        } else if (listTitle.textContent == 'Today' && taskArray[0]) {

            let allListListTask = document.querySelectorAll('.list-list-task');
            let allListListLign = document.querySelectorAll('.list-list-lign');

            for (let i = 0; i < taskArray.length; i++) {
                if (taskArray[i].date !== new Date().toISOString().slice(0, 10)) {
                    allListListTask[i].remove();
                    allListListLign[i].remove();
                }
            }
            console.log('created today tasks');
        } else if (taskArray[0])  {
            console.log(taskArray);
            let allListListTask = document.querySelectorAll('.list-list-task');
            let allListListLign = document.querySelectorAll('.list-list-lign');

            for (let i = 0; i < taskArray.length; i++) {    
                if (taskArray[i].project !== document.getElementById('list-title').textContent) {
                    allListListTask[i].remove();
                    allListListLign[i].remove();
                }
            }
        }
    }

        // SETS DATASET NUMBER ON TASKS
    const setAttributeTask = () => {
        let allListListTask = document.querySelectorAll('.list-list-task');
        let allListListLign = document.querySelectorAll('.list-list-lign');
        let allDots = document.querySelectorAll('.list-list-task-dots');
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
        updateVariables();
        console.log('set attributes');
    };

    // CLEAR TASK LIST 
    const clearTasks = () => {
        let allListListTask = document.querySelectorAll('.list-list-task');
        let allListListLign = document.querySelectorAll('.list-list-lign');

            for (let i = 0; i < allListListTask.length; i++) {
                allListListTask[i].remove();
                allListListLign[i].remove();
            }

        console.log('cleared all tasks');
    }
    
        // CLEAR TEXT INPUT 
    const clearInputs = () => {
        listAddTaskInput.value = "";
        sidebarProjectsAddProjectInput.value = "";
    }

        // RESET DROPDOWN TASKS
    const resetDropdownTask = () => {
        let allTaskDropdown = document.querySelectorAll('.list-list-task-dropdown');
        let allDropdownDate = document.querySelectorAll('.list-list-task-dropdown-date');
        let allDropdownDateInput = document.querySelectorAll('.list-list-task-dropdown-date-input');
        let allDropdownProject = document.querySelectorAll('.list-list-task-dropdown-project');
        let allDropdownProjectInput = document.querySelectorAll('.list-list-task-dropdown-project-input');

        for (let i = 0; i < allTaskDropdown.length; i++) {
            allDropdownDate[i].classList.remove('list-list-task-dropdown-date-inactive');
            allDropdownDateInput[i].classList.remove('list-list-task-dropdown-date-input-active'); 
            allTaskDropdown[i].classList.remove('list-list-task-dropdown-active');
            allDropdownProject[i].classList.remove('list-list-task-dropdown-project-inactive');
            allDropdownProjectInput[i].classList.remove('list-list-task-dropdown-project-input-active');
        }
        overlay.classList.remove('overlay-active'); 
    }

    const resetAddTask = () => {
        listAdd.classList.remove('list-add-inactive');
        listAddTask.classList.remove('list-add-task-active');
    }

    const displayAddATaskInput = (() => {
        // DISPLAY INPUT BUTTON
        listAdd.addEventListener('click', () => {
            listAdd.classList.toggle('list-add-inactive');
            listAddTask.classList.toggle('list-add-task-active');
            overlay.classList.add('overlay-active');
        });

        // CANCEL TASK BUTTON
        listAddTaskInputCancel.addEventListener('click', () => {
            listAdd.classList.toggle('list-add-inactive');
            listAddTask.classList.toggle('list-add-task-active');
            overlay.classList.remove('overlay-active');
        clearInputs();
        });
    })();
   
    // ADD TASK
    listAddTaskInputAdd.addEventListener('click', () => {
        if (listAddTaskInput.value !== "") {
            let title = listAddTaskInput.value;
            let newTask;
            if (listTitle.textContent == 'Today') {
                let date = new Date().toISOString().slice(0, 10);
                newTask = addTask(title, null, date);
            } else {
                newTask = addTask(title, null, null);
            }
            taskArray.push(newTask);
            fLocalStorage.saveLocalTasks();
            clearTasks();
            displayTasks();
            updateList(taskArray);
            clearInputs();
            console.log('created task');
            setAttributeTask();
            updateVariables();
        } else {
            listAddTaskInput.placeholder = 'Please enter something';
        }
    });

    // ENTER EVENT LISTENER
    document.addEventListener('keydown', event => {
        if (event.key === 'Enter' && document.getElementById('list-add-task').classList.contains('list-add-task-active')) {
                document.getElementById('list-add-task-input-add').click();
                overlay.classList.remove('overlay-active');
                resetAddTask();
                fSidebar.resetAddProject();
        } else if (event.key === 'Enter' && document.getElementById('sidebar-projects-add-project').classList.contains('sidebar-projects-add-project-active')) {
            document.getElementById('list-projects-add-project-add').click();
            overlay.classList.remove('overlay-active');
            resetAddTask();
            fSidebar.resetAddProject();
        }
    });
    return { updateList, displayTasks, clearInputs, clearTasks, setAttributeTask, resetDropdownTask, resetAddTask };
})();
    
// LOCAL STORAGE
const fLocalStorage = (() => {
    const saveLocalTasks = () => {
        localStorage.setItem("taskArray", JSON.stringify(taskArray));
        console.log('saved task local storage');
    }
    
    function getLocalTasks() {
        let storageTask = JSON.parse(localStorage.getItem("taskArray"));
        if (storageTask) {
            taskArray.push(...storageTask);
            console.log('got task local storage');
        }
    }

    const displayLocalTask = () => {
        getLocalTasks();
        fTasks.displayTasks();
        console.log('displayed task local storage');
    };

    const saveLocalProjects = () => {
        localStorage.setItem("projectArray", JSON.stringify(projectArray));
        console.log('saved project local storage');
    }

    function getLocalProjects() {
        let storageProject = JSON.parse(localStorage.getItem("projectArray"));
        if (storageProject) {
            projectArray.push(...storageProject);
            console.log('got project local storage');
        }
    }

    const displayLocalProject = () => {
        getLocalProjects();
        fSidebar.displayProjects();
        console.log('displayed project local storage');
    };

    return { saveLocalTasks, getLocalTasks, displayLocalTask, saveLocalProjects, getLocalProjects, displayLocalProject}
})();    

fTasks.clearInputs();
fLocalStorage.displayLocalProject();
fLocalStorage.displayLocalTask();
fTasks.setAttributeTask();
fSidebar.setAttributeProject();
fTasks.updateList();
console.log(taskArray)
// console.log(projectArray);
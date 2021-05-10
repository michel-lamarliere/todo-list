import { clearInputs } from '../index.js';
import { fTasks } from '../js/_tasks.js'
import { displayInbox, displayToday, displayProject, displayOverdue } from '../js/_displays.js';
import { fLocalStorage, taskArray, projectArray } from './_local-storage.js';

const listTitle = document.getElementById('list-title');

const fSidebar = (() => {

    const navbarHamburger = document.getElementById('navbar-hamburger');
    
    const sidebar = document.getElementById('sidebar');
    const sidebarProjectsAdd = document.getElementById('sidebar-projects-add');
    const sidebarProjectsAddProjectAdd = document.getElementById('list-projects-add-project-add');
    const sidebarProjectsAddProjectCancel = document.getElementById('list-projects-add-project-cancel');
    const sidebarProjectsAddProject = document.getElementById('sidebar-projects-add-project');
    const sidebarProjectsAddProjectInput = document.getElementById('sidebar-projects-add-project-input');

    const sidebarProjectsList = document.getElementById('sidebar-projects-list');
    const sidebarProjectsTitle = document.getElementById('sidebar-projects-title');

    const inbox = document.getElementById('inbox');
    const today = document.getElementById('today');
    const overdue = document.getElementById('overdue');
    
    // NAVBAR HAMBURGER
    navbarHamburger.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-closed');
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
        if (sidebarProjectsAddProjectInput.value !== "") {
            projectArray.push(sidebarProjectsAddProjectInput.value);
            clearProjects();
            clearInputs();
            fLocalStorage.saveLocalStorage();
            fLocalStorage.getLocalStorage();
            displayProjects();
            fTasks.displayTasks();
        } else {
            sidebarProjectsAddProjectInput.placeholder = "Please enter something";
        }
    });

        // CREATE ALL PROJECTS
    const displayProjects = () => {
        clearProjects();
        for (let i = 0; i < projectArray.length; i++) {
            let sidebarProjectsListProject = document.createElement('div');
            sidebarProjectsListProject.classList.add('sidebar-projects-list-project');
            sidebarProjectsList.appendChild(sidebarProjectsListProject);

            let mainDot = document.createElement('div');
            mainDot.classList.add('main-dot');
            mainDot.classList.add('sidebar-projects-dot');
            sidebarProjectsListProject.appendChild(mainDot);
        
            let sidebarProjectsListTitle = document.createElement('div');
            sidebarProjectsListTitle.classList.add('sidebar-projects-list-project-title');
            sidebarProjectsListTitle.textContent = projectArray[i];
            sidebarProjectsListProject.appendChild(sidebarProjectsListTitle);

            let sidebarProjectsListDelete = document.createElement('div');
            sidebarProjectsListDelete.classList.add('sidebar-projects-list-project-delete');
            sidebarProjectsListProject.appendChild(sidebarProjectsListDelete);
        
            sidebarProjectsAdd.classList.remove('sidebar-projects-add-inactive');
            sidebarProjectsAddProject.classList.remove('sidebar-projects-add-project-active');
        }
        updateProjectNumber();
        setAttributeProjects();
    }

    const updateProjectNumber = () => {
        sidebarProjectsTitle.textContent = `Projects: ${projectArray.length}`;
    }

        // CLEAR ALL PROJECT
    const clearProjects = () => {
        while (sidebarProjectsList.firstChild) {
            sidebarProjectsList.removeChild(sidebarProjectsList.firstChild);
        }
    }

        // RESETS DROPDOWN
    const resetProject = () => {
        const allSidebarProjectsListProjectDropdown = document.querySelectorAll('.sidebar-projects-list-project-dropdown');

        sidebarProjectsAdd.classList.remove('sidebar-projects-add-inactive');
        sidebarProjectsAddProject.classList.remove('sidebar-projects-add-project-active');

        for (let i = 0; i < allSidebarProjectsListProjectDropdown.length; i++) {
            allSidebarProjectsListProjectDropdown[i].classList.remove('sidebar-projects-list-project-dropdown-active');
            overlay.classList.remove('overlay-active');
        }
    }

        // SETS PROJECT DATASET NUMBERS
    const setAttributeProjects = () => {
        let allSidebarProjectsListProject = document.querySelectorAll('.sidebar-projects-list-project');
        let allMainDot = document.querySelectorAll('.sidebar-projects-dot');
        let allSidebarProjectsListProjectTitle = document.querySelectorAll('.sidebar-projects-list-project-title');
        let allSidebarProjectsListProjectDelete = document.querySelectorAll('.sidebar-projects-list-project-delete');

        for (let i = 0; i < allSidebarProjectsListProject.length; i++) {
        allSidebarProjectsListProject[i].dataset.number = i;
        allMainDot[i].dataset.number = i;
        allSidebarProjectsListProjectTitle[i].dataset.number = i;
        allSidebarProjectsListProjectDelete[i].dataset.number = i;
        } 
    }
    
return { displayProjects, clearProjects, resetProject, setAttributeProjects, updateProjectNumber }
})();

export {
    fSidebar as fSidebar,
};
const displaySidebar = (() => {
    const main = document.getElementById('main');
    
    // DATE BASED PROJECT SORTING

    const mainSidebar = document.getElementById('main-sidebar');
    // mainSidebar.id = 'main-sidebar',
    // mainSidebar.classList.add('main-sidebar');
    // main.appendChild(mainSidebar);

    const mainSidebarList = document.createElement('ul');
    mainSidebarList.classList.add('main-sidebar-list');
    mainSidebar.appendChild(mainSidebarList);
    
    // INBOX
    const mainSidebarListLignInbox = document.createElement('div');
    mainSidebarListLignInbox.classList.add('main-sidebar-list-day');
    mainSidebarList.appendChild(mainSidebarListLignInbox);

    let mainDotOne = document.createElement('div');
    mainDotOne.classList.add('main-dot');
    mainSidebarListLignInbox.appendChild(mainDotOne);

    const mainSidebarListLignInboxTitle = document.createElement('li');
    mainSidebarListLignInboxTitle.textContent = 'Inbox';
    mainSidebarListLignInboxTitle.id = 'inbox';
    mainSidebarListLignInbox.appendChild(mainSidebarListLignInboxTitle);

    // TODAY
    const mainSidebarListLignToday = document.createElement('div');
    mainSidebarListLignToday.classList.add('main-sidebar-list-day');
    mainSidebarList.appendChild(mainSidebarListLignToday);

    let mainDotTwo = document.createElement('div');
    mainDotTwo.classList.add('main-dot');
    mainSidebarListLignToday.appendChild(mainDotTwo);

    const mainSidebarListLignTodayTitle = document.createElement('li');
    mainSidebarListLignTodayTitle.textContent = 'Today';
    mainSidebarListLignTodayTitle.id = 'today';
    mainSidebarListLignToday.appendChild(mainSidebarListLignTodayTitle);

    // ADD PROJECT

    const mainSidebarListAdd = document.createElement('h1');
    mainSidebarListAdd.classList.add('main-sidebar-list-title');
    mainSidebar.appendChild(mainSidebarListAdd);

    const mainSidebarListTitlePlus = document.createElement('div');
    mainSidebarListTitlePlus.classList.add('main-plus');
    mainSidebarListAdd.appendChild(mainSidebarListTitlePlus);

    for (let i = 0; i < 2; i++) {
        let plusLign = document.createElement('span');
        mainSidebarListTitlePlus.appendChild(plusLign);
    }

    const mainSidebarListTitleText = document.createElement('li');
    mainSidebarListTitleText.textContent = 'Add Project';
    mainSidebarListAdd.appendChild(mainSidebarListTitleText);

    // PROJECTS(0)
    const mainSidebarListProjects = document.createElement('h1');
    mainSidebarListProjects.classList.add('main-sidebar-list-title');
    mainSidebarListProjects.textContent = 'Projects (1)';
    mainSidebar.appendChild(mainSidebarListProjects);

    const mainSidebarProjectList = document.createElement('ul');
    mainSidebarProjectList.classList.add('main-sidebar-list');
    mainSidebar.appendChild(mainSidebarProjectList);

    const mainSidebarListLignProject = document.createElement('div');
    mainSidebarListLignProject.classList.add('main-sidebar-list-day');
    mainSidebarProjectList.appendChild(mainSidebarListLignProject);

    let mainDot = document.createElement('div');
    mainDot.classList.add('main-dot');
    mainSidebarListLignProject.appendChild(mainDot);

    const mainSidebarListLignProjectTitle = document.createElement('li');
    mainSidebarListLignProjectTitle.textContent = 'Chores';
    mainSidebarListLignProject.appendChild(mainSidebarListLignProjectTitle);
})();

export default displaySidebar;
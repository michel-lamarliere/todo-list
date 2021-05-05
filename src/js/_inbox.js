const displayInbox = () => {
    const main = document.getElementById('main');

    const mainContainer = document.getElementById('main-list-container');

    const mainList = document.getElementById('main-list');
    const mainListAdd = document.getElementById('main-list-add');

    const mainListTitle = document.getElementById('main-list-title');
    mainListTitle.textContent = 'Inbox';
   
    const mainListList = document.createElement('ul');
    mainListList.classList.add('main-list-list');
    mainListList.id = 'main-list-list';
    mainList.appendChild(mainListList);
};

export default displayInbox;
const displayHeader = (() => {
    const header = document.getElementById('header');

    const navbar = document.createElement('navbar');
    navbar.classList.add('navbar');
    header.appendChild(navbar);
    
    const navbarHamburger = document.createElement('div');
    navbarHamburger.id = 'navbar-hamburger';
    navbarHamburger.classList.add('navbar-hamburger');
    navbar.appendChild(navbarHamburger);
    
    for (let i = 0; i < 3; i++) {
        let lign = document.createElement('span');
        lign.classList.add('navbar-hamburger-lign');
        navbarHamburger.appendChild(lign);
    }
    
    const navbarHome = document.createElement('div');
    navbarHome.classList.add('navbar-home');
    navbarHome.textContent = 'Home';
    navbar.appendChild(navbarHome);
    
    const navbarSearchbar = document.createElement('div');
    navbarSearchbar.classList.add('navbar-searchbar');
    navbar.appendChild(navbarSearchbar);
    
    const navbarSearchbarInput = document.createElement('input');
    navbarSearchbarInput.type = 'search';
    navbarSearchbarInput.classList.add('navbar-searchbar-input');
    navbarSearchbarInput.placeholder = 'Search';
    navbarSearchbar.appendChild(navbarSearchbarInput);
    
    console.log('displaying header');
})();

export default displayHeader;
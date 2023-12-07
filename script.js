// toggle class active

const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu di click 

document.querySelector('#humbergerMenu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const hamburgerMenu = document.querySelector('#humbergerMenu');

document.addEventListener('click', function (e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
       navbarNav.classList.remove('active');
   }
}
)
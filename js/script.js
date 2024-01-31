// Toggle Class Active
const navbarNav = document.querySelector('.nav-nav');

//Ketika menucheck di klik
document.querySelector('#menucheck'). onclick = () => {
    navbarNav.classList.toggle('active');
};

//Klik di luar sidebar untuk menghilangkan navbar
const menu = document.querySelector('#menucheck');

document.addEventListener('click', function (e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.toggle)) {
        navbarNav.classList.remove('active');
    }
});
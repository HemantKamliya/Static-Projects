function toggleMenu() {
    var menu = document.getElementById('fullscreen-menu');
    var menuToggle = document.getElementById('menu-toggle');
    var menuIcon = document.getElementById('menu-icon');
    var closeIcon = document.getElementById('close-icon');
    var navbar = document.getElementById('navbar');
    var content = document.getElementById('content');

    menu.classList.toggle('hidden');
    menuToggle.classList.toggle('hidden');

    if (menu.classList.contains('hidden')) {
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        navbar.style.height = 'auto';
        content.style.top = '20%';
    } else {
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        navbar.style.height = '50vh';
        content.style.top = '50vh';
    }
}

document.getElementById('menu-toggle').addEventListener('click', toggleMenu);
document.querySelector('#fullscreen-menu button').addEventListener('click', toggleMenu);
document.querySelectorAll('#fullscreen-menu a').forEach(item => {
    item.addEventListener('click', toggleMenu);
});
const container = document.querySelector('.banner-container');
let scrollAmount = 0;
const bannerWidth = container.querySelector('.banner').clientWidth + 12; // Including gap

function slideLeft() {
    if (scrollAmount > 0) {
        scrollAmount -= bannerWidth;
    } else {
        scrollAmount = container.scrollWidth - container.clientWidth;
    }
    container.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
}

function slideRight() {
    if (scrollAmount < container.scrollWidth - container.clientWidth) {
        scrollAmount += bannerWidth;
    } else {
        scrollAmount = 0;
    }
    container.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
}
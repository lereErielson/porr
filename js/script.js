
/* ==== Turns the menu hamburguer into a X */
const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', ()=> {
    ToggleMenu();
});

function ToggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';

    } else {
        nav.style.display = 'none';
    }
}
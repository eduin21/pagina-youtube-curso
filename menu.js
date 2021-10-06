const menu = document.querySelector('.nav');
const btn = document.querySelector('.menu-btn');

btn.addEventListener('click', () => {
    menu.classList.toggle('active'); /*activa el menu */
})
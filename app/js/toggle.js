/*
    ------------------------
    ------ Variables -------
    ------------------------
*/

const navToggleOpen = document.getElementById('navToggle-open');
const navToggleClose = document.getElementById('navToggle-close');
const navMenu = document.getElementById('menu');
const directorsToggleButtons = document.querySelectorAll('.directors__toggle');

const hamburgerIcon = "url(../../assets/icon/hamburger.svg)";
const closeIcon = "url(../../assets/icon/close.svg)";

/*
    ------------------------
    ------ Functions -------
    ------------------------
*/

function toggleMenu(){
    navMenu.classList.toggle('show-mobile-menu');
}

function showHiddenContainer(){
    this.classList.toggle('bg-rapture-blue');
    this.classList.toggle('rotate-45deg');
    console.log(this.previousElementSibling.lastElementChild.className);
    this.previousElementSibling.lastElementChild.classList.toggle('show-hidden-container');
}

/*
    ------------------------
    ------ Main -------
    ------------------------
*/

navToggleOpen.addEventListener('click', toggleMenu);
navToggleClose.addEventListener('click', toggleMenu);
directorsToggleButtons.forEach(button => button.addEventListener('click', showHiddenContainer));
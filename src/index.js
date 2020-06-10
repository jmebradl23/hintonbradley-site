import jump from 'jump.js';
import sal from 'sal.js';
import './style.scss';
import '../node_modules/sal.js/dist/sal.css';

$(document).ready(function() {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => link.addEventListener('click', smoothScroll));
    sal();
    const hamburger = document.getElementsByClassName('hamburger')[0];
    hamburger.addEventListener('click', toggleNavbar);
    const navLinks = document.querySelector('.nav-links');
    navLinks.addEventListener('click', toggleNavbar);
});

function smoothScroll (e) {
    e.preventDefault();
    e.stopPropogation();
    const id = e.currentTarget.getAttribute('href');
    jump(id, {
        duration: 1000,
        offset: -58
      })
}

function toggleNavbar (e) {
    e.preventDefault();
    e.stopPropogation();
    if (window.innerWidth<779) {
        const links = document.querySelector('.nav-links');
        links.classList.toggle('show')
    }
}
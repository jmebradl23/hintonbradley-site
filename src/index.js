import jump from 'jump.js';
import sal from 'sal.js';
import './style.scss';
import '../node_modules/sal.js/dist/sal.css';

$(document).ready(function() {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => link.addEventListener('click', smoothScroll));
    sal();
});

function smoothScroll (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href');
    jump(id, {
        duration: 1000,
        offset: -58
      })
}
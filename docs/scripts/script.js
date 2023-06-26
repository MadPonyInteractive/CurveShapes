document.addEventListener('DOMContentLoaded', () => {
    // Toggle navigation menu on burger icon click
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const logo = document.querySelector('.logo');

    burger.addEventListener('click', () => {
        logo.classList.toggle('toggle');
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
});

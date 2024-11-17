function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');

    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('open');
}
const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
let button = document.getElementById('burguer');

button.addEventListener('click', function () {
    mobileNavbar.classList.toggle('active');
});

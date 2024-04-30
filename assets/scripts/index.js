const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
let button = document.getElementById('burguer');

function manipularNavbar() {
   
    const posicaoRolagem = window.scrollY;

    if (posicaoRolagem > 0) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
}


window.addEventListener('scroll', manipularNavbar);
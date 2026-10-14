document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    function openMenu() {
        if (sideMenu && menuOverlay && hamburgerBtn) {
            sideMenu.classList.add('active');
            menuOverlay.classList.add('active');
            hamburgerBtn.classList.add('open');
        }
    }

    function closeMenu() {
        if (sideMenu && menuOverlay && hamburgerBtn) {
            sideMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            hamburgerBtn.classList.remove('open');
        }
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            if (sideMenu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', closeMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    
     
    // ANIMACIÓN DE ENTRADA PARA INDEX.HTML
    
    const hero = document.querySelector('.hero');
    if (hero) {
        animarEntradaIndex();
    }
});


function animarEntradaIndex() {
      // 1. Logo superior izquierdo del Navbar
     const navLogo = document.querySelector('.navbar .logo-container');
     if (navLogo) {
        navLogo.animate([
            { opacity: 0, transform: 'translateY(-30px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], {
            duration: 750,
            delay: 100,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            fill: 'both'
        });
    }

    // 2. Enlaces del menú de navegación (efecto cascada / stagger)
    const navLinks = document.querySelectorAll('.navbar .nav-links li');
    navLinks.forEach((item, index) => {
        item.animate([
            { opacity: 0, transform: 'translateY(-20px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], {
            duration: 650,
            delay: 200 + (index * 120),
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            fill: 'both'
        });
    });

    // 3. Botón de Iniciar Sesión en el Navbar
    const navButton = document.querySelector('.navbar .btn-campus');
    if (navButton) {
        navButton.animate([
            { opacity: 0, transform: 'scale(0.8) translateY(-10px)' },
            { opacity: 1, transform: 'scale(1) translateY(0)' }
        ], {
            duration: 700,
            delay: 600,
            easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            fill: 'both'
        });
    }

    // 4. Imagen de Mike y Sulley (deslizamiento dinámico desde la izquierda)
    const charactersImg = document.querySelector('.hero-image .characters-img');
    if (charactersImg) {
        charactersImg.animate([
            { opacity: 0, transform: 'translateX(-90px) scale(0.92)' },
            { opacity: 1, transform: 'translateX(0) scale(1)' }
        ], {
            duration: 1100,
            delay: 250,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            fill: 'both'
        });
    }

  // 5. Título "Bienvenidos a" (fade in con elevación suave)
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        heroTitle.animate([
            { opacity: 0, transform: 'translateY(35px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], {
            duration: 800,
            delay: 450,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            fill: 'both'
        });
    }

    // 6. Logo grande central de Monsters University (efecto zoom/pop)
    const heroLogo = document.querySelector('.hero-content .hero-logo');
    if (heroLogo) {
        heroLogo.animate([
            { opacity: 0, transform: 'scale(0.65) translateY(20px)' },
            { opacity: 1, transform: 'scale(1) translateY(0)' }
        ], {
            duration: 950,
            delay: 650,
            easing: 'cubic-bezier(0.34, 1.4, 0.64, 1)',
            fill: 'both'
        });
    }
}


const usuario = "adrian@cesde.net";
const password = "1234";
let intentos = 0;
const maxIntentos = 3;
let acceso = false;

function iniciarSesion() {

    const usuarioIngresado = document.querySelector("#username").value;
    const passwordIngresado = document.querySelector("#password").value;

    if (usuarioIngresado === usuario && passwordIngresado === password) {

        acceso = true;

        window.location.href = "estudiante.html";

    } else {

        intentos++;

        alert("Usuario o contraseña incorrectos. Intento " +
              intentos + " de " + maxIntentos);

        if (intentos >= maxIntentos) {
            alert("Has superado el número máximo de intentos. Cuenta bloqueada.");

            document.querySelector(".btn-login").disabled = true;
        }
    }
}

// Detectar el formulario de inicio de sesión
const formularioLogin = document.querySelector("#loginForm");

if (formularioLogin) {
    formularioLogin.addEventListener("submit", function(event) {
        event.preventDefault();

        iniciarSesion();
    });
}


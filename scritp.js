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

     // ==========================================
    // ANIMACIÓN DE ENTRADA PARA INDEX.HTML
    // ==========================================
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

}

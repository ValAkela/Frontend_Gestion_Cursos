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
});


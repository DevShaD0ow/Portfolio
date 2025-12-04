// Gestion du menu hamburger
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    // Vérification que les éléments existent
    if (!hamburgerBtn || !mobileMenu) {
        console.error('Menu hamburger: éléments non trouvés');
        return;
    }

    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    // Toggle menu
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Fermer le menu au clic sur un lien
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Fermer le menu au clic en dehors
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            hamburgerBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
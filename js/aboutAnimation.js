document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector("#aboutMe");
    const aboutElements = document.querySelectorAll(
        "#aboutMe h2, #aboutMe .about-desc, #aboutMe .skill-bar"
    );
    const fills = document.querySelectorAll(".fill");
    let hasAnimated = false;

    // Remplit directement les jauges dès le chargement
    fills.forEach(fill => {
        fill.style.width = fill.getAttribute("data-fill");
    });

    // Animation du contenu texte et barres
    function animateAbout() {
        aboutElements.forEach((el, i) => {
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }, i * 100);
        });
    }

    // Détection fluide du scroll  
    function checkScroll() {
        if (!aboutSection) return;

        const rect = aboutSection.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.85;

        if (!hasAnimated && rect.top < triggerPoint && rect.bottom > 0) {
            hasAnimated = true;
            animateAbout();
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});
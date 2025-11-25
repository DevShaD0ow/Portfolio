// =======================================
// ANIMATIONS POUR LA SECTION ÉDUCATION
// =======================================

document.addEventListener('DOMContentLoaded', () => {
    const educationSection = document.querySelector('#education');
    const educationTitle = document.querySelector('#education h2');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineLine = document.querySelector('.timeline-line');

    // Observer pour détecter quand la section entre dans le viewport
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    // Animation du titre
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.to(educationTitle, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                });
                titleObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (educationTitle) {
        titleObserver.observe(educationTitle);
    }

    // Animation de la ligne de timeline
    const lineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && timelineLine) {
                timelineLine.style.height = '100%';
                lineObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (educationSection) {
        lineObserver.observe(educationSection);
    }

    // Animation des items - simple et rapide
    const itemObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = Array.from(timelineItems).indexOf(entry.target) * 0.1;

                gsap.to(entry.target, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: delay + 0.2,
                    ease: 'power2.out'
                });

                itemObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => {
        itemObserver.observe(item);
    });

    // Animation des badges au hover
    const badges = document.querySelectorAll('.timeline-badge');
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', function () {
            gsap.to(this, {
                scale: 1.05,
                backgroundColor: 'rgba(180, 0, 255, 0.3)',
                duration: 0.2,
                ease: 'power2.out'
            });
        });

        badge.addEventListener('mouseleave', function () {
            gsap.to(this, {
                scale: 1,
                backgroundColor: 'rgba(180, 0, 255, 0.2)',
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    });
});

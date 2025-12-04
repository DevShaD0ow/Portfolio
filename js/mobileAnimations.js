// ========================================
// ANIMATIONS MOBILES ULTRA-MODERNES
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth <= 1250;

    if (!isMobile) return; // N'appliquer que sur mobile

    // ========================================
    // 1. PARALLAXE FLUIDE AU SCROLL
    // ========================================
    let ticking = false;
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax(lastScrollY);
                ticking = false;
            });
            ticking = true;
        }
    });

    function updateParallax(scrollY) {
        // Parallaxe hero
        const hero = document.querySelector('#firstView .content');
        if (hero && scrollY < window.innerHeight) {
            const opacity = 1 - (scrollY / (window.innerHeight * 0.8));
            const translateY = scrollY * 0.3;
            hero.style.transform = `translateY(${translateY}px)`;
            hero.style.opacity = Math.max(0, opacity);
        }

        // Parallaxe background squares
        const squares = document.querySelectorAll('.bg-square');
        squares.forEach((square, index) => {
            const speed = 0.1 + (index * 0.05);
            const yPos = -(scrollY * speed);
            square.style.transform = `translateY(${yPos}px) rotate(45deg)`;
        });
    }

    // ========================================
    // 2. RÉVÉLATION PROGRESSIVE AU SCROLL
    // ========================================
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Éléments à révéler progressivement
    const revealElements = document.querySelectorAll(`
    .project-card,
    .skill-bar,
    .timeline-item,
    .form-group
  `);

    revealElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`;
        revealObserver.observe(el);
    });

    // ========================================
    // 3. FEEDBACK HAPTIQUE (vibration)
    // ========================================
    function vibrateOnTouch(element, duration = 10) {
        element.addEventListener('touchstart', () => {
            if (navigator.vibrate) {
                navigator.vibrate(duration);
            }
        });
    }

    // Appliquer aux boutons et cartes
    const interactiveElements = document.querySelectorAll(`
    .Button,
    .project-card,
    .submit-btn,
    .wrapper .icon,
    .timeline-content
  `);

    interactiveElements.forEach(el => vibrateOnTouch(el));

    // ========================================
    // 4. EFFET RIPPLE AU TOUCH
    // ========================================
    function createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.touches ? event.touches[0].clientX - rect.left - size / 2 :
            event.clientX - rect.left - size / 2;
        const y = event.touches ? event.touches[0].clientY - rect.top - size / 2 :
            event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.className = 'ripple-effect';

        // Supprimer l'ancien ripple
        const existingRipple = button.querySelector('.ripple-effect');
        if (existingRipple) {
            existingRipple.remove();
        }

        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }

    // Style pour le ripple
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
    .ripple-effect {
      position: absolute;
      border-radius: 50%;
      background: rgba(180, 0, 255, 0.3);
      transform: scale(0);
      animation: ripple-animation 0.6s ease-out;
      pointer-events: none;
      z-index: 10;
    }

    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    .ripple-container {
      position: relative;
      overflow: hidden;
    }
  `;
    document.head.appendChild(rippleStyle);

    // Ajouter le ripple aux boutons
    const rippleElements = document.querySelectorAll(`
    .Button,
    .submit-btn,
    .wrapper .icon
  `);

    rippleElements.forEach(el => {
        el.classList.add('ripple-container');
        el.addEventListener('touchstart', createRipple);
        el.addEventListener('click', createRipple);
    });

    // ========================================
    // 5. SMOOTH SCROLL AMÉLIORÉ
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Fermer le menu mobile si ouvert
                const mobileMenu = document.getElementById('mobileMenu');
                const hamburger = document.getElementById('hamburgerBtn');
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });

    // ========================================
    // 6. ANIMATION DES CARTES AU SWIPE
    // ========================================
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        card.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            card.style.transition = 'none';
        });

        card.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
            const diff = currentX - startX;

            // Effet de résistance
            const resistance = Math.abs(diff) > 50 ? 0.5 : 1;
            card.style.transform = `translateX(${diff * resistance}px) scale(0.98)`;
        });

        card.addEventListener('touchend', () => {
            isDragging = false;
            card.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.transform = '';
        });
    });

    // ========================================
    // 7. PROGRESS BAR DE LECTURE
    // ========================================
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #b400ff, #8c52ff);
    z-index: 10000;
    transition: width 0.1s ease-out;
    box-shadow: 0 0 10px rgba(180, 0, 255, 0.5);
  `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // ========================================
    // 8. LAZY LOADING OPTIMISÉ POUR VIDÉOS
    // ========================================
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                if (video.dataset.src && !video.src) {
                    video.src = video.dataset.src;
                    video.load();
                }
                videoObserver.unobserve(video);
            }
        });
    }, { rootMargin: '100px' });

    document.querySelectorAll('video[data-src]').forEach(video => {
        videoObserver.observe(video);
    });

    // ========================================
    // 9. GESTION INTELLIGENTE DU FOCUS
    // ========================================
    const inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'scale(1.02)';
            input.parentElement.style.transition = 'transform 0.3s ease';
        });

        input.addEventListener('blur', () => {
            input.parentElement.style.transform = '';
        });
    });

    // ========================================
    // 10. PERFORMANCE: DÉSACTIVER ANIMATIONS PENDANT SCROLL
    // ========================================
    let scrollTimeout;

    window.addEventListener('scroll', () => {
        document.body.classList.add('is-scrolling');

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            document.body.classList.remove('is-scrolling');
        }, 150);
    });

    // Style pour optimiser pendant le scroll
    const scrollOptimizationStyle = document.createElement('style');
    scrollOptimizationStyle.textContent = `
    .is-scrolling * {
      pointer-events: none;
    }
    
    .is-scrolling .project-card video {
      opacity: 0 !important;
    }
  `;
    document.head.appendChild(scrollOptimizationStyle);

    // ========================================
    // 11. EFFET DE PROFONDEUR SUR SCROLL
    // ========================================
    const sections = document.querySelectorAll('section');

    const depthObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const depth = entry.intersectionRatio;
            entry.target.style.filter = `blur(${(1 - depth) * 2}px)`;
            entry.target.style.opacity = Math.max(0.3, depth);
        });
    }, { threshold: [0, 0.25, 0.5, 0.75, 1] });

    sections.forEach(section => {
        depthObserver.observe(section);
    });

    // ========================================
    // 12. ANIMATION PARTICLE AU TOUCH
    // ========================================
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.cssText = `
      position: fixed;
      width: 4px;
      height: 4px;
      background: #b400ff;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      left: ${x}px;
      top: ${y}px;
      animation: particle-float 1s ease-out forwards;
      box-shadow: 0 0 10px rgba(180, 0, 255, 0.8);
    `;
        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), 1000);
    }

    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
    @keyframes particle-float {
      0% {
        transform: translate(0, 0) scale(1);
        opacity: 1;
      }
      100% {
        transform: translate(${Math.random() * 100 - 50}px, -100px) scale(0);
        opacity: 0;
      }
    }
  `;
    document.head.appendChild(particleStyle);

    // Ajouter particules aux interactions
    projectCards.forEach(card => {
        card.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            createParticle(touch.clientX, touch.clientY);
        });
    });

    console.log('✨ Animations mobiles modernes chargées');
});
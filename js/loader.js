document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.getElementById('progress-bar');
    const percentageText = document.getElementById('loading-percentage');

    const mediaElements = document.querySelectorAll('video');
    let totalMedia = mediaElements.length;
    let mediaLoaded = 0;

    function updateProgress() {
        mediaLoaded++;
        const percent = Math.round((mediaLoaded / totalMedia) * 100);

        progressBar.style.width = percent + '%';
        percentageText.textContent = percent + '%';

        if (mediaLoaded >= totalMedia) {
            setTimeout(() => {
                loadingScreen.classList.add('loading-hidden');

                // 🎯 RÉDUIT À 200ms au lieu de 600ms
                setTimeout(() => {
                    document.body.classList.add('site-loaded');
                    window.dispatchEvent(new Event('siteLoaded'));
                }, 200);

                mediaElements.forEach(vid => vid.play().catch(e => console.log("Autoplay bloqué par le navigateur")));
            }, 500);
        }
    }

    if (totalMedia === 0) {
        updateProgress();
    }

    mediaElements.forEach(media => {
        if (media.readyState >= 3) {
            updateProgress();
        } else {
            media.addEventListener('loadeddata', updateProgress, { once: true });
            media.addEventListener('error', updateProgress, { once: true });
        }
    });

    setTimeout(() => {
        if (!loadingScreen.classList.contains('loading-hidden')) {
            console.warn("Chargement long : Force l'ouverture du site.");
            loadingScreen.classList.add('loading-hidden');
            setTimeout(() => {
                document.body.classList.add('site-loaded');
                window.dispatchEvent(new Event('siteLoaded'));
            }, 200);  // 🎯 RÉDUIT À 200ms
        }
    }, 5000);
});
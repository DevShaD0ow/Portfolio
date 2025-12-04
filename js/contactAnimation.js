document.addEventListener("DOMContentLoaded", () => {
    const contactElements = document.querySelectorAll(
        "#contact h2, #contact .contact-intro, #contact .form-group, #contact .submit-btn"
    );
    let hasAnimated = false;

    function animateContact() {
        contactElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }, index * 100);
        });
    }

    function checkScroll() {
        const contactSection = document.querySelector("#contact");
        if (!contactSection) return;

        const rect = contactSection.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.75;

        if (!hasAnimated && rect.top < triggerPoint && rect.bottom > 0) {
            hasAnimated = true;
            animateContact();
        }

        requestAnimationFrame(checkScroll);
    }

    requestAnimationFrame(checkScroll);
});
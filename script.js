document.addEventListener("DOMContentLoaded", () => {
    const revealTargets = document.querySelectorAll(".section, .hero-copy, .hero-visual, .footer");
    revealTargets.forEach((node) => node.setAttribute("data-reveal", ""));

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.14,
            rootMargin: "0px 0px -8% 0px"
        }
    );

    revealTargets.forEach((node) => revealObserver.observe(node));

    const auroras = document.querySelectorAll(".hero-aurora");
    const glowRing = document.querySelector(".glow-ring");
    const slides = Array.from(document.querySelectorAll(".screen-slide"));

    if (slides.length > 1) {
        let currentSlide = 0;

        const showSlide = (index) => {
            slides.forEach((slide, slideIndex) => {
                slide.classList.toggle("is-active", slideIndex === index);
            });
        };

        showSlide(currentSlide);
        window.setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 6200);
    }

    document.addEventListener("mousemove", (event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 18;
        const y = (event.clientY / window.innerHeight - 0.5) * 18;

        auroras.forEach((aurora, index) => {
            const factor = index === 0 ? 1 : -1;
            aurora.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        });

        if (glowRing) {
            glowRing.style.transform = `translate(${x * -0.8}px, ${y * -0.8}px)`;
        }
    });
});

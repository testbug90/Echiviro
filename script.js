document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('section, .hero-content, .footer');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
    });

    revealElements.forEach(el => {
        el.setAttribute('data-reveal', '');
        observer.observe(el);
    });

    const hero = document.querySelector('.hero');
    if (!hero) return;

    hero.addEventListener('mousemove', event => {
        const x = (event.clientX / window.innerWidth - 0.5) * 12;
        const y = (event.clientY / window.innerHeight - 0.5) * 12;
        hero.style.setProperty('--pointer-x', `${x}px`);
        hero.style.setProperty('--pointer-y', `${y}px`);
    });

    const slides = document.querySelectorAll('.screen-slide');
    if (slides.length > 1) {
        let index = 0;
        setInterval(() => {
            slides[index].style.opacity = '0';
            slides[index].style.transform = 'scale(0.98)';
            index = (index + 1) % slides.length;
            slides[index].style.opacity = '1';
            slides[index].style.transform = 'scale(1)';
        }, 5200);
    }
});

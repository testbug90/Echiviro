document.addEventListener("DOMContentLoaded", () => {
    // 1. Slider-Wechsel Logik
    const slides = document.querySelectorAll(".screen-slide");
    if (slides.length > 0) {
        let currentSlide = 0;
        function nextSlide() {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
        }
        if (slides.length > 1) {
            setInterval(nextSlide, 4000);
        }
    }

    // 2. Beta-Formular AJAX Logik (Lautloser Einlass)
    const betaForm = document.getElementById("betaForm");
    const betaSuccess = document.getElementById("betaSuccess");
    const betaIntro = document.getElementById("betaIntro");
    const betaNote = document.getElementById("betaNote");

    if (betaForm) {
        betaForm.addEventListener("submit", function(e) {
            e.preventDefault(); 
            const formData = new FormData(betaForm);

            fetch(betaForm.action, {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    betaForm.style.display = "none";
                    betaIntro.style.display = "none";
                    betaNote.style.display = "none";
                    betaSuccess.style.display = "block";
                } else {
                    alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
                }
            })
            .catch(() => {
                alert("Verbindung fehlgeschlagen. Prüfen Sie Ihre Netzwerkstruktur.");
            });
        });
    }
});

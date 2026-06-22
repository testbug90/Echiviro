/**
 * Echiviro — Das lebendige Erinnerungsarchiv
 * Synchronisierte Logik für Slider-Wechsel und AJAX-Beta-Formular
 */
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Smartphone-Slider Logik (Ohne Überlagerungsfehler)
    const slides = document.querySelectorAll(".screen-slide");
    if (slides.length > 0) {
        let currentSlide = 0;

        function nextSlide() {
            // Entferne aktive Klasse vom aktuellen Bild
            slides[currentSlide].classList.remove("active");
            
            // Berechne Index des nächsten Bildes
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Weise die aktive Klasse dem neuen Bild zu
            slides[currentSlide].classList.add("active");
        }

        // Automatischer Bildwechsel im 4-Sekunden-Takt
        if (slides.length > 1) {
            setInterval(nextSlide, 4000);
        }
    }

    // 2. Beta-Formular AJAX Logik (Lautloser Einlass ohne Seiten-Reload)
    const betaForm = document.getElementById("betaForm");
    const betaSuccess = document.getElementById("betaSuccess");
    const betaIntro = document.getElementById("betaIntro");
    const betaNote = document.getElementById("betaNote");

    if (betaForm) {
        betaForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Verhindert das standardmäßige Weiterleiten
            
            const formData = new FormData(betaForm);

            fetch(betaForm.action, {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    // Blendet Formular und Begleittexte lautlos aus
                    betaForm.style.display = "none";
                    betaIntro.style.display = "none";
                    betaNote.style.display = "none";
                    
                    // Zeigt die edle Erfolgsmeldung an
                    betaSuccess.style.display = "block";
                } else {
                    alert("Ein Fehler ist aufgetreten. Bitte versuche es noch einmal.");
                }
            })
            .catch(() => {
                alert("Verbindung fehlgeschlagen. Bitte prüfe deine Netzwerkstruktur.");
            });
        });
    }
});

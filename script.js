/**
 * Echiviro — Das digitale Vermächtnis
 * Stabiler Slider-Wechsel für das Smartphone-Mockup
 */
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".screen-slide");
    
    // Führe den Slider nur aus, wenn Slider-Elemente existieren 
    // (verhindert Fehler auf den Rechtsseiten Impressum/Datenschutz)
    if (slides.length > 0) {
        let currentSlide = 0;

        function nextSlide() {
            // Entferne die aktive Klasse vom aktuellen Bild
            slides[currentSlide].classList.remove("active");
            
            // Berechne den Index des nächsten Bildes
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Füge die aktive Klasse dem neuen Bild hinzu
            slides[currentSlide].classList.add("active");
        }

        // Starte den automatischen, sanften Bildwechsel alle 4 Sekunden (4000ms)
        if (slides.length > 1) {
            setInterval(nextSlide, 4000);
        }
    }
});

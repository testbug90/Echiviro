# Echiviro — Das lebendige Erinnerungsarchiv

[![Beta Phase](https://img.shields.io/badge/Status-Beta--Phase-goldenrod?style=flat-square)](https://testbug90.github.io/Echiviro/)
[![Plattform](https://img.shields.io/badge/Plattform-Android-green?style=flat-square&logo=android)](https://developer.android.com/)
[![Lizenz](https://img.shields.io/badge/Lizenz-Propriet%C3%A4r-black?style=flat-square)](https://testbug90.github.io/Echiviro/)
[![Datenschutz](https://img.shields.io/badge/Datenschutz-100%25%20Lokal%20%2F%20Verschl%C3%BCsselt-blue?style=flat-square)](https://testbug90.github.io/Echiviro/)

> **Deine Momente. Deine Stimme.** > Echiviro ist ein privates digitales Archiv für die Erinnerungen, die wirklich zählen. Es verbindet deine schönsten Fotos mit echten Sprachaufnahmen — absolut sicher, lokal auf deinem Gerät gespeichert und für Generationen bewahrt.

---

##  Die Philosophie Behind Echiviro

Moderne Galerie- und Social-Media-Apps sind laut, werbeüberladen und hungrig nach deinen privaten Daten. Sie drängen dich in die Cloud und machen deine Familiengeschichte von Abonnements abhängig. 

**Echiviro bricht mit diesem Prinzip.** Inspiriert von der zeitlosen Eleganz eines schweren analogen Fotoalbums aus Papier, kombiniert mit moderner, kompromissloser Sicherheit, bietet Echiviro ein echtes digitales Refugium. 

* **Fairer Einmalkauf (ca. 19,99 €):** Keine versteckten Kosten, keine Abos, keine Werbung.
* **Local-First & Privatsphäre:** Alle Berechnungen, Audios und Verschlüsselungen finden zu 100 % auf deinem Smartphone statt. Deine Daten berühren niemals fremde Server.

---

##  Funktionen ab Version 1.0 (Tag 1)

Das Fundament von Echiviro bietet dir von der ersten Sekunde an ein lückenloses, stabiles Premium-Erlebnis:

* ** Das lebendige Fotoalbum:** Nimm deine Stimme direkt beim Betrachten oder Hinzufügen eines Fotos auf. Die App bettet deine Erzählung ein, sodass du beim Durchblättern deine Familiengeschichte im Originalton hörst.
* **Das mitlesbare Wort:** Deine gesprochenen Erinnerungen werden vollautomatisch im Hintergrund per Offline-KI in Text übersetzt. Deine Geschichte bleibt so hörbar und flexibel lesbar – komplett offline.
* **Alben & Kapitelchronik:** Ordne deine Erlebnisse in übersichtliche, thematische Kapitel (z.B. „Die ersten Schritte“, „Sommerurlaub“). Jedes Album wird wie ein hochwertiger Bildband inszeniert.
* **Local Desktop Server:** Streamen ganz privat. Übertrage deine Alben per verschlüsselter Peer-to-Peer-Verbindung direkt in den Computer-Browser deines Heimnetzwerks – ohne Umwege über das Internet.
* **Der digitale Chronist:** Die App fügt deine wichtigsten Monatsmomente vollautomatisch zu einem harmonischen filmischen Rückblick zusammen. Dein ganz persönliches Kinobuch.
* ** Voice Shield Wasserzeichen:** Ein unsichtbares, kryptografisch verschlüsseltes digitales Wasserzeichen verknüpft deine Sprachaufnahme untrennbar mit der Bilddatei und schützt dein gesprochenes Wort vor Manipulationen.
* **Lokale High-End-Verschlüsselung:** Deine Daten gehören dir. Echiviro nutzt eine lokale, hochsichere `SQLCipher`-Datenbank, die direkt über die integrierte Hardware-Sicherheitsarchitektur (`Android Keystore`) deines Smartphones geschützt wird.
* ** Der Meilenstein-Kosmos:** Vergiss kühle, technische Tabellen. Jeder festgehaltene Lebensabschnitt wird visuell als leuchtende Verbindungslinie dargestellt und wächst Stück für Stück zu deiner persönlichen Lebenslandkarte heran.

---

## 🗺️ Die Evolution (Zukünftige Roadmap)

Mit dem Erwerb der App unterstützt du die unabhängige Weiterentwicklung. Folgende Funktionen befinden sich bereits in der Konzeption und erscheinen als kostenlose Inhaltsupdates:

* **v1.1 — Teilen im Kreis (Family Hub):** Ein rein lokaler, verschlüsselter Datenabgleich zwischen den Smartphones von Partnern oder Familienmitgliedern für ein gemeinsames, dezentrales Familienarchiv.
* **v1.2 — Akustik-Upgrade (Spatial Sound Master):** Platziert deine Stimme dreidimensional im Raum des Fotos. Ein Analog-Filter sorgt für die akustische Wärme und Natürlichkeit eines klassischen Röhrenmikrofons.
* **v1.3 — Sichere Übergabe (The Heritage Protocol):** Erstellt eine physische Notfallkarte mit 24 Wörtern und einem QR-Code, damit eine Vertrauensperson deine verschlüsselten Daten im Notfall dezentral retten kann.
* **v1.4 — Physische Brücke (Physical Anchors & Echoes):** Verknüpfe echte Tagebücher per NFC-Sticker mit der App und hinterlege Sprachnachrichten, die sich erst an bestimmten Meilensteinen (z.B. dem 18. Geburtstag deiner Kinder) öffnen lassen.
* **v2.0 — Das Finale (The Bio-Graph):** Die automatische Übersetzung deines gesamten digitalen Archivs und all deiner Monologe in ein hochwertig gestaltetes, druckfertiges Buch aus echtem, schwerem Papier.

---

## 🛠️ Technischer Überblick & Architektur

Echiviro wird als native Android-Anwendung mit modernsten Standards entwickelt:
* **UI-Framework:** Jetpack Compose (vollständig responsiv, OLED-optimierter Dark-Mode)
* **Datenbank:** SQLCipher (Lokale AES-256-Bit-Verschlüsselung)
* **Sicherheit:** Android Keystore System
* **Netzwerk:** Lokale Peer-to-Peer-Protokolle (Ktor / WebSockets) für den Desktop Server
* **Sprachverarbeitung:** Lokale On-Device Speech-to-Text Engine

---

##  Feedback & Bugreporting

Während der Beta-Phase liegt uns dein Feedback besonders am Herzen. Läuft etwas nicht rund, kannst du Fehler direkt aus der App heraus über das Menü melden. 

Die App nutzt dafür einen **nativen E-Mail-Intent**, der die wichtigsten anonymisierten Gerätedaten (Android-Version, Gerätemodell) automatisch für den Bericht vorschreibt, um dir das Tippen zu ersparen. Alternativ kannst du Fehler über das integrierte Formular auf unserer Webseite einreichen.

---

##  Kanäle & Support

* **Webseite / Beta-Anmeldung:** [testbug90.github.io/Echiviro/](https://testbug90.github.io/Echiviro/)
* **Instagram:** [@echiviro.voices](https://www.instagram.com/echiviro.voices)
* **Projekt unterstützen:** [Buy Me a Coffee](https://www.buymeacoffee.com/echiviro.memories)

---
*Entwickelt mit Fokus auf absolute Privatsphäre, Nähe und zeitlosem Anspruch.*

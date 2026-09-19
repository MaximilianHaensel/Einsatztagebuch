EINSATZTAGEBUCH – PWA

Dateien auf den Webspace / GitHub Pages hochladen:
- index.html
- manifest.webmanifest
- service-worker.js
- Ordner icons/ mit allen PNG-Dateien

WICHTIG:
Die PWA muss über HTTPS (oder localhost) aufgerufen werden. Eine PWA funktioniert nicht vollständig, wenn index.html nur direkt aus der Dateien-App geöffnet wird.

INSTALLATION AUF DEM IPAD:
1. Die veröffentlichte HTTPS-Adresse in Safari öffnen.
2. Einmal vollständig laden lassen.
3. Teilen -> Zum Home-Bildschirm.
4. Danach über das neue Einsatztagebuch-Symbol starten.

DATEN:
Einsätze und Archiv werden lokal im Browser/PWA-Speicher des Geräts gespeichert. Browser-/Websitedaten nicht löschen, wenn die Daten erhalten bleiben sollen.

PDF:
Die aktuelle Version verwendet jsPDF über jsDelivr. Nach erfolgreichem Online-Laden versucht der Service Worker die Bibliothek zwischenzuspeichern. Für garantiertes PDF-Erzeugen beim allerersten Start ohne Internet müsste jspdf.umd.min.js zusätzlich lokal mit ausgeliefert und der Script-Pfad in index.html angepasst werden.

UPDATE v2:
- Archiv bleibt nach Neustart der PWA erhalten.
- Abgeschlossene Einsätze erscheinen dauerhaft im Archiv und die PDF kann dort erneut geöffnet werden.

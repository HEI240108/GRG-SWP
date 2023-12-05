# Praktische Leistungsüberprüfung

### 4AHWII am 18. Oktober 2023 / GRG

### Thema: Grid Layout und Javascript Callbacks

### Angabe

Gegeben sind leere `index.html`, `script.js` sowie `style.css` Dateien, welche
im Rahmen dieser Arbeit zu erweitern sind. Als Hilfe dienen die 5 angefügten
Screenshots.

### Aufgabe Grid Layout (7P)

Die 7 Felder (Container) der Angabedatei sollen in einem Grid-Layout wie auf den
Bildern angeordnet werden.

### Aufgabe Nummernfeld (2P)

Im Nummernfeld möge der Benutzer eine Zahl eingeben können.

### Aufgabe Uhr (6P)

Im Feld der Uhrzeit möge eine Uhr erscheinen, welche im Sekundentakt die
aktuelle Uhrzeit anzeigt. Es kann hierfür der Aufruf von
`new Date().toLocaleTimeString()` verwendet werden.

### Aufgabe Analyze-Button (12P)

Der Analyze-Button soll die Zahl im Nummernfeld nehmen und überprüfen, ob die
Zahl eine Fibonacci-Zahl und/oder eine Primzahl ist. Die Felder `Fibonacci` und
`Primzahl` mögen daraufhin entsprechend eingefärbt und mit Texten versehen
werden, wie den Screenshots zu entnehmen ist. Falls die Zahl des Nummerfeldes
größer als 1 Million ist, soll auf beiden Ausgabefeldern der Text `zu groß`
erscheinen und die Felder rot eingefärtbt werden.

Hilfestellung 1: Beim Laden der Applikation kann man 2 Arrays aufbauen. Im
ersten kann man alle Primzahlen `<=` 1 Million abspeichern und im anderen Array
alle Fibonacci-Zahlen die `<=` 1 Million sind. Mit `fibArray.includes()` kann
dann z.B. überprüft werden, ob es sich um eine Fibonacci-Zahl handelt.

Hilfestellung 2: Überprüfe den Datentyp, den das Nummernfeld liefert!

### Aufgabe Styling (5P)

Erstelle ein ansprechenderes Styling der Website, als es in den Angabedateien
abgebildet ist!

##### Notenschlüssel: 0-16/17-20/21-24/25-28/29-32

### Gutes Gelingen!

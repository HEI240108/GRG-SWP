# 3AHWII, 2. Praktische Leistungsfeststellung

### 5. Dezember 2023, Lehrer: Georg Graf

## Zur Angabe

Gegeben ist ein ähnliches Projekt wie aus dem Unterricht bekannt, bestehend aus
3 Dateien: `index.html`, `script.js` sowie `style.css`

## 1. Aufgabe _create function_

In den schon vorhandenen 2 Funktionen für die Buttons `push` sowie `indexOf`
gibt es folgenden Code, welchen man für alle weiteren Buttons vielfach kopieren
müßte: `const i1 = eval(input1.value);`. Aufgabe: **Erstelle eine Funktion**
`getInput(number)`, welche sich so verwenden läßt: `const i1 = getInput(1)` usw.
bis `const hallo = getInput(4)`. **Tipp**: Erstelle dazu ein Array, welches alle
Input-Felder beinhaltet. Verwende dieses Array, um den Wert des entsprechenden
Input-Feldes _evaluiert_ (also as `Number`) zu retournieren.

## 2. Aufgabe _"use" button_

Füge rechts an die "Samples" Felder einen Button an mit der Beschriftung "use
value". Beim Drücken des Buttons soll der Inhalt des Samples in das oberste
Input-Feld hineinkopiert werden.

## 3. Aufgabe _swap contents_

**Füge Arrow-Buttons rechts neben die Input Felder an**, `🠕` sowie `🠗`. Überlege
für jedes Feld, ob Du einen oder beide Buttons brauchst und wenn nur einen,
welchen ;). Beim Drücken des Buttons soll der Inhalt mit dem vorigen bzw.
nächsten Feld vertauscht werden.

## 4. Aufgabe _styling_

**Erstelle hierzu eine zweite CSS Datei**, welche _nach_ `style.css` geladen
wird, binde sie in das `index.html` ein. Bewirke, dass das Output Feld 1,5 mal
größeren sowie fetten Text in dunkler Farbe (nicht schwarz) anzeigt. Verwende
einen geeigneten CSS Selektor dafür!

## 5. Aufgabe _Beschreibung in Worten_ ()

a) Beschreibe in eigenen Worten, was mit "in place" bei Arrayfunktionen gemeint
ist, in einer Textdatei "Beschreibungen.txt".

b) Beschreibe in eigenen Worten, was Du unter einer Callback Funktion verstehst,
auch in diese Datei!

## 6. Aufgabe _array functions ohne callback_

Dies sind die "leichteren" Funktionen, wo etwas mit dem Array gemacht wird,
jedoch keine Callbacks verwendet werden, z.B. `array.reverse()`

## 7. Aufgabe _array function mit callback_ ()

Dies ist recht anspruchsvoll! Nur wenn alles andere schon erledigt ist!!!

## Gutes Gelingen!

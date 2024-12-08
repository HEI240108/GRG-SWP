# 2AHWII-Y PLF2

## 10.12.2024

## Themen: Programmieren, Datenbanken

## Programmieren Teil 1: Funktion bmi

Öffne zu Beginn ein Terminal in dem Ordner, wo sich auch diese Angabe befindet. Sieh Dir die Dateien "main.ts" sowie "main_test.ts" an! Sie wurden mittels "deno init" von mir erzeugt. Die wesentlichen Befehle während Deiner Arbeit sind "deno test" sowie "deno task dev". (Der Test läuft erfolgreich durch und auch main.ts).

Benenne die Funktion "add" auf "bmi" um. Das BMI (Body-Mass-Index) wird folgendermaßen errechnet: `kg/(m²)`, also Körpergewicht (in kg) dividiert durch das Quadrat der Körpergröße (in m). Dieser Wert gilt im Gesundheitswesen als Einheit für die Feststellung von Unter- Normal- oder Übergewicht.

Commit - Push (13p)

## Programmieren Teil2: Testfunktion

Für diese Aufgabe wirst Du die Datei "main_test.ts" editieren. Folgende BMI Werte sind (mit Rundungsfehler) korrekt:

```js
["kg", "m", "bmi"],
[42, 1.68, 14.9],
[56, 1.63, 21.1],
[127, 2.2, 26.2],
[105, 1.65, 38.6],
[131, 1.83, 39.1],
```

Die zu verwendende Funktion heißt `assertAlmostEquals()` und wird so aufgerufen:

```js
assertAlmostEquals(actual, expected, tolerance);
```

Der tolerance Wert ist `0.1` -- die Testwerte sind eben gerundet.

Commit - Push JETZT! (13p)

## Datenbank: Personen importieren

Im Angabeordner befindet sich eine `personen.csv` Datei. Importiere diese - wie im Unterricht - in eine sqlite3 Datenbank!

Die Felder heißen:

- Vorname
- Nachname
- Geschlecht
- Gewicht
- Groesse

Beachte, dass Gewicht und Groesse ein Zahlen-Datentyp sind und achte auf die hier verwendeten Trennzeichen.

Committe und Pushe Deine Änderungen JETZT!

##

 ein Körpergewicht von 2kg bis 350kg akzeptiert wird.
 Werte von 20cm bis 272cm möglich sein.

```text
     ____       _                 ____      _ _                        _
    / ___|_   _| |_ ___  ___     / ___| ___| (_)_ __   __ _  ___ _ __ | |
   | |  _| | | | __/ _ \/ __|   | |  _ / _ \ | | '_ \ / _` |/ _ \ '_ \| |
   | |_| | |_| | ||  __/\__ \   | |_| |  __/ | | | | | (_| |  __/ | | |_|
    \____|\__,_|\__\___||___/    \____|\___|_|_|_| |_|\__, |\___|_| |_(_)
                                                      |___/
```

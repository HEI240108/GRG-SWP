# 2AHWII-Y PLF2

## 10.12.2024

## Themen: Programmieren, Datenbanken

## Datenbank: Personen importieren (15p)

In der Angabe befindet sich eine `persons.csv` Datei. Importiere diese - wie im Unterricht - in eine sqlite3 Datenbank `persons.db`!

Die Felder heißen:

- Vorname
- Nachname
- Geschlecht
- Gewicht
- Groesse

Beachte, dass Gewicht und Groesse ein Zahlen-Datentyp sind und achte auf die im CSV verwendeten Trennzeichen.

Committe und pushe Deine Änderungen (das erzeugte Datenbankfile `persons.db`) jetzt.

## Programmieren: FizzBuzz (20p)

Editiere dazu die noch leere Datei "fizzbuzz.ts". Ausführung mit `deno fizzbuzz.ts`.

Schreibe ein Programm, das die Zahlen von 1 bis 100 ausgibt.
Für Vielfache von drei gib "Fizz" anstelle der Zahl aus.
Für Vielfache von fünf gib "Buzz" anstelle der Zahl aus.
Für Zahlen, die Vielfache sowohl von drei als auch von fünf sind, gib "FizzBuzz" anstelle der Zahl aus.

git add fizzbuzz.ts - commit - push

## Programmieren: CSV einlesen und auf console ausgeben

Gib nun die einzelnen Zeilen (Records) der `persons.csv` Datei anders formatiert aus. Folge möglichst exakt den folgenden Beispielen:

```text
Kathrin Bussmann ist weiblich. Sie ist 66kg schwer und 175cm groß.
Simeon Schwirkschlies ist männlich. Er ist 75kg schwer und 188cm groß.
```

add persons.csv - commit - push (13p)

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

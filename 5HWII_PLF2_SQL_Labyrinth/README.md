# 5ahwii plf2, 15.1.2024

## Aufgabe1 : Not boring movies

| Column      | Type    |
| ----------- | ------- |
| id          | int     |
| movie       | varchar |
| description | varchar |
| rating      | float   |

id ist der Primärschlüssel (Spalte mit eindeutigen Werten) für diese Tabelle.
Jede Zeile enthält Informationen über den Namen eines Films, sein Genre und
seine Bewertung. rating ist ein Float mit 2 Dezimalstellen im Bereich von [0,
10].

Schreibe eine Lösung, um die Filme mit einer ungeraden ID und einer
Beschreibung, die nicht "boring" ist, zu melden. Gib die Ergebnistabelle in
absteigender Reihenfolge der Bewertung zurück. Das Ergebnisformat ist im
folgenden Beispiel dargestellt.

Beispiel 1:

Eingabe: Cinema-Tabelle:

| id | movie      | description | rating |
| -- | ---------- | ----------- | ------ |
| 1  | War        | great 3D    | 8.9    |
| 2  | Science    | fiction     | 8.5    |
| 3  | irish      | boring      | 6.2    |
| 4  | Ice song   | Fantacy     | 8.6    |
| 5  | House card | Interesting | 9.1    |

Ausgabe:

| id | movie      | description | rating |
| -- | ---------- | ----------- | ------ |
| 5  | House card | Interesting | 9.1    |
| 1  | War        | great 3D    | 8.9    |

Erläuterung: Wir haben drei Filme mit ungeraden IDs: 1, 3 und 5. Der Film mit
der ID = 3 ist langweilig, daher schließen wir ihn nicht in die Antwort ein.

## Aufgabe 2: Erweiterung der Labyrinth-Lösung

Im Ordner `2_recursion` findet sich eine fertig ausprogrammierte Lösung des
Labyrinth Problems. Diese kannst Du in einer wsl-bash mit `./main.ts 5x5.json`
starten und die Ausgabe begutachten. Die Aufgabe besteht darin, anstatt der
Punkte Pfeile auszugeben: (`←, →, ↑, ↓`). Beispiel:

```text
  1 2 3 4 5 6 7 8 9 
1 + + + ↓ + + + + + 
2 + ↓ ← ← +       + 
3 + ↓ + + +   +   + 
4 + ↓ + → → ↓ +   + 
5 + ↓ + ↑ + ↓ +   + 
6 + → → ↑ + ↓ +   + 
7 + + + + + ↓ + + +
```

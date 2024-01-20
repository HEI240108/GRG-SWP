# Praktische Leistungsfeststellung #3

### 4AHWII am 24. Jänner 2024 / GRG

### Themen: Prisma und Konsumation eines APIs

## Aufgabe 1 (prisma):

Für eine Online-Spiele-Plattform soll das Gerüst eines Datenbankschemas in einer
Datei `schema.prisma` angelegt werden. Einstweilen ist nicht mehr bekannt als:
Es gibt Benutzer, Spiele und Scores. An jedem Spiel können mehrere Spieler
beteiligt sein und auch deren Scores sollen abgespeichert werden können.

Eigenschaften dieser Objekte:

```text
Player
- id
- name
- email
- lastLoginDate
- Game[]

Game
- id
- name
- Player[]
- startDate
- endDate
- Score[]

Score
- id
- game
- player
- points
```

Entwickle das Prisma-Schema soweit, dass `npx prisma validate` fehlerfrei
durchläuft!

## Aufgabe 2 (fetch api):

Unter <https://grafg1.spengergasse.at/swp4> steht ein REST Endpoint zur
Verfügung, welcher Spengergassen Credentials (Username / Passwort) verifiziert.
Einen Beispiel-Aufruf findest Du in der Datei `example.rest-sample`, benenne Sie
um auf `example.rest`, füge einen Aufruf mit Deinem Username und einem richtigen
Passwort hinzu. Trage unbedingt Sorge dafür daß Du diese Datei **nicht** in das
Repository hochlädst, dies sollte allerdings schon durch `.gitignore` erledigt
werden.

Es sind die Dateien `index.html` sowie `style.css` vorgegeben, es fehlt jedoch
die Javascript Datei `index.js`, welche anzeigt ob die Credentials stimmen oder
nicht. Aufgabe ist es, diese Datei anzulegen und "mit Leben zu erfüllen", sodaß
im Ausgabefeld im Browser ersichtlich wird, ob Username und Passwort
zusammenpassen oder eben nicht.

TIPP zur Ausarbeitung: Nach 3 fehlerhaften Versuchen wird der versuchte Benutzer
am API 5 Minuten gesperrt. Jedoch auch dann liefert das API eine Antwort, welche
im Ausgabefeld angezeigt werden soll!

## Viel Erfolg!

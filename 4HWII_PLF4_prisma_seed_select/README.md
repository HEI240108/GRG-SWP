# 4AHWII PLF4 am 20.3.2024

## Thema Datenmodellierung, Seeding und Queries

## Vorbereitung

-   Dokus und Angabe auf den Desktop **verschieben**
-   entpacken
-   im MDN Doku Ordner "npm start" ausführen

### AngabeProjekt öffnen.

VSCode Plugins installieren

-   prettier
-   prisma
-   sqlite viewer

Abhängigkeiten herunterladen

-   npm i

## Aufgaben

### Datenmodell Zoo

-   Zoo:
-   -   Land
-   -   Stadt (beide in faker.location),
-   -   Adresse (location.streetAddress),
-   -   baujahr (date.past)

-   Abteilung: faker.animal.type
-   -   Zoo
-   -   Name

-   Tier
-   -   Art: Tipp: faker.animal['type']()
-   -   Name person.firstName()
-   -   Abteilung

-   Mitarbeiter
-   -   Name - gefaked
-   -   Abteilungen

Erstelle dieses Datenmodell mithilfe von Prisma. Beachte die besprochene Groß-
und Kleinschreibung Deiner Objekte, auch wenn die Angabe Fehler enthält.

### Seeden der Datenbank

Erstelle mithilfe des `seed` Kommandos folgende Objekte:

-   5 Zoo's
-   Jeder Zoo soll 2 bis 7 Abteilungen haben (Also Tierarten .. Katzen, Affen,
    usw.)
-   Jede Abteilung soll 5 bis 20 Tiere haben
-   100 Mitarbeiter, welche jeweils in 1-4 verschiedenen Abteilungen arbeiten.

Jetzt ist Leben in die Zoos geraten!

### Abfragen der Datenbank

Erstelle eine Applikation `query.js` welche bei `npm start` gestarted wird. Sie
möge strukturiert und verständlich Antworten auf folgende Fragen liefern (von
leicht bis schwer):

-   Ausgabe aller Zoos
-   Wählen einer zufälligen Zoo-Id und Auskunft über den Zoo und über die
    dortigen Abteilungen geben.
-   wie oben und zusätzlich: wie viele Tiere in jeder Abteilung
-   alle Mitarbeiter in einem bestimmten Zoo ausgeben
-   wie oben und zusätzlich: in welchen Abteilungen sie arbeiten

### extra!

-   für einen bestimmten Mitarbeiter ermitteln
-   -   wie viele Tiere er betreut
-   -   den Namen jedes Tieres das er betreut (als Liste).

### Abgabe

-   auf Laufwerk `Z:\` absolut _nur_ Notwendiges abgeben. Insbesondere keine
    Angabedateien und kein node_modules!

Gutes Gelingen!

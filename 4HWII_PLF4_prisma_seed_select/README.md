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
-   -   Art (Tipp: faker.animal['type']())
-   -   Name person.firstName()
-   -   Abteilung

-   Mitarbeiter
-   -   Name
-   -   Abteilungen
-   -   ein Zoo

Erstelle dieses Datenmodell mithilfe von Prisma

### Seeden der Datenbank

Erstelle folgende Objekte:

-   5 Zoo's
-   Jeder Zoo soll 2 bis 7 Abteilungen haben
-   Jede Abteilung soll 5 bis 20 Tiere haben

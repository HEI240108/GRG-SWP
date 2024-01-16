# 3AHWII, 3. Praktische Leistungsfeststellung

### 23. Jänner 2024, Lehrer: Georg Graf

## Ticketautomat

In dieser Übung soll ein Ticketautomat entstehen, als Klasse (class). Er hat
folgende Eigenschaften:

-   Im constructor gibt man mit wieviel Restgeld (#einnahmenGesamt) ürsprünglich
    drinnen sind.
-   Man kann Geld `einwerfen()`, dies erhöht das Feld `#eingeworfen`
-   Man kann das Ziel einstellen
-   Man kann die Anzahl der Fahrgäste einstellen
-   man kann den Button `ticketKaufen()` drücken, dann wird ein Ticket gedruckt.

Fahrziele:

`{"Salzbug":30,"Innsbruck":45,"Klagenfurt":40,"Graz":25,"Bregenz":60}`

## Aufgabe Klassen

Erstelle für diese Aufgabe erstmal nur die Rümpfe der Methoden für die folgenden
2 Klassen

```plantuml
class TicketAutomat {
- #einnahmenGesamt: Number
- #eingeworfen: Number
- #ziele (konstant, s.o.)
- get einnahmenGesamt()
- get eingeworfen()
+ constructor(einnahmenInitial)
+ einwerfen(Number)
+ zielEinstellen()
+ anzahlEinstellen()
+ ticketKaufen()
}
class Ticket {
- #anzahlPersonen
- #ziel
+ construktor(anzahl, ziel)
+ toString()
}
```

Beispiel für ein Ticket:

```text
===============================
=== Fahrkarte nach Salzburg ===
===============================
Einzelpreis: € 30.-
Anzahl der Fahrgäste: 3
===============================
Summe: € 90.-
===============================
gegeben: € 100.-
Restgeld: € 10,-
===============================
```

Elemente der Benutzeroberfläche:

-   einwerfen (input type=numer ... submit)
-   ziel einstellen (option / select)
-   anzahl Personen einstellen
-   Anzeige Fahrpreis (ändert sich bei Ziel Änderung oder Anzahl Änderung)
-   Anzeige des Guthabens (ändert sich durch einwerfen `#eingeworfen`)
-   Ausgabefeld des Tickets, dort kann auch angezeigt werden "Es fehlen noch XX
    € damit ich das Ticket drucken kann".
-   Anzeige der gesamten Einnahmen des Automatens, ändert sich bei jedem
    Ticketkauf (`#einnahmenGesamt`)
-   button "Ticket Kaufen" (wenn das Geld reicht wird Ticket gedruckt und die
    `#einnahmenGesamt` vergrößern sich entsprechend)

## gutes Gelingen!

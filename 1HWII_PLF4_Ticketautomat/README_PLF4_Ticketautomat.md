# 1AHWII, 4. Praktische Leistungsfeststellung (WH)

### am 10. April 2024, Lehrer: Georg Graf

## Angabe Ticketautomat

In dieser Übung soll ein Ticketautomat entstehen, als Klasse (class). Er hat
folgende Eigenschaften:

Es gibt 2 Geldfächer:

1. #gesamtEingenommen
2. #guthabenAktuellerKunde

-   Im constructor gibt übergibt man, wieviel Geld (#gesamtEingenommen)
    ürsprünglich drinnen ist (in €).
-   Man kann Geld `einwerfen()`, dies erhöht das Feld `#guthabenAktuellerKunde`
-   Man kann das Fahrziel einstellen, in einem `select` Feld.
-   Man kann die Anzahl der Fahrgäste einstellen (1-10)
-   man kann den Button `ticketKaufen()` drücken, dann wird ein Ticket gedruckt.

Fahrziele und Preise:

`{"Salzbug":30,"Innsbruck":45,"Klagenfurt":40,"Graz":25,"Bregenz":60}`

(Obigen String kannst Du in ein Objekt `ziele` speichern! `const ziele = {...}`)

## Aufgabe Klassen Ticket und TicketAutomat

Erstelle für diese Aufgabe die folgenden 2 Klassen:

```plantuml
class TicketAutomat {
- #gesamtEingenommen: Number
- #guthabenAktuellerKunde: Number
- #ziel
- #anzahlPersonen
- #standort
+ constructor(einnahmenInitial)
+ get gesamtEingenommen()
+ set gesamtEingenommen()
+ get eingeworfen()
+ einwerfen(Number)
+ zielEinstellen()
+ anzahlEinstellen()
+ ticketKaufen()
}
class Ticket {
- #anzahlPersonen
- #ziel
+ constructor(anzahl, ziel, gegeben)
+ toString()
}
TicketAutomat -> Ticket
```

Im `constructor(gesamtEingenommen)` sollen ein paar Dinge passieren:

-   this.gesamtEingenommen soll auf den gegebenen Wert gesetzt werden, indem
    `setgesamtEingenommen()` aufgerufen wird.
-   this.eingeworfen auf 0.
-   this.ziel auf `undefined`

`zielEinstellen()` soll nur eines der oben genannten Ziele in die private
Variable `ziel` speichern können.

`anzahlEinstellen()` soll die Variable `#anzahlPersonen` setzen, sofern der
übergebene Wert gültig ist.

`ticketKaufen()` soll ein neues Ticket erstellen mit
`let ticket = new Ticket (ziel, anzahlPersonen, gegeben)`, soferne der
eingeworfene Betrag ausreicht. Im Fehlerfall - wie immer - soll eine Exception
geworfen werden. mit `console.log(ticket.toString())` soll die Ausgabe auf die
Konsole erfolgen. Der Ticketpreis soll die `#gesamtEingenommen` des Automaten
entsprechend erhöhen.

#### Beispiel für ein Ticket:

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

## Bonusufgabe html Benutzeroberfläche:

Elemente der Benutzeroberfläche:

-   einwerfen (input type=numer ... submit)
-   ziel einstellen (option / select)
-   anzahl Personen einstellen
-   Anzeige Fahrpreis (ändert sich bei Ziel Änderung oder Anzahl Änderung)
-   Anzeige des Guthabens (ändert sich durch einwerfen
    `#guthabenAktuellerKunde`)
-   Ausgabefeld des Tickets, dort kann auch angezeigt werden "Es fehlen noch XX
    € damit ich das Ticket drucken kann".
-   Anzeige der gesamten Einnahmen des Automatens, ändert sich bei jedem
    Ticketkauf (`#gesamtEingenommen`)
-   button "Ticket Kaufen" (wenn das Geld reicht wird Ticket gedruckt und die
    `#gesamtEingenommen` vergrößern sich entsprechend)

## gutes Gelingen!

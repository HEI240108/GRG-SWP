# Kolloquium SWP1 3AHWII am 29.9.2024

## Thema Datenmodellierung, Seeding und Queries

## Vorbereitung (mit Internet)

1. Prisma Doku aufs das Desktop verschieben und von `Z:\` entfernen, danach am Desktop entpacken.
2. Den PLF Ordner auf Desktop verschieben
3. mit Windows-Explorer öffnen und die "Clickme.code-workspace" anklicken. Vscode öffnet sich.
4. package.json -> open in integrated terminal
5. npm i (installiert die Dependencies aus dem Internet)
6. vscode plugins installieren:

- prisma
- sqlite viewer

### Internet wird abgeschaltet

## Aufgaben

### Datenmodell für eine Immobilienverwaltung

Jedes Model (== Tabelle) hat eine id (vom Typ "String"), id-Felder mit `cuid()` anlegen!

- Immobilie
- - id
- - adresse: String `faker.location.streetAddress(), faker.location.zipCode(), faker.location.city(), faker.location.country()`
- - immoTyp: String (Büro, Wohnung, Haus, Land, etc..)
- - quadratmeter: Number
- - baujahr

- Kunde
- - id
- - name: String `faker.person.fullName()`
- - tel: String `faker.phone.number()`

- Verkauf
- - id
- - Immobilie (foreign-key)
- - Kunde (foreign-key)
- - vertrag: String `faker.lorem.paragraph()`
- - verkaufsdatum: `faker.date.recent()`
- - verkaufspreis: `faker.number.int({min: 10000, max: 10e6})`

Erstelle das gegebene Datenmodell mithilfe von Prisma. Beachte die besprochene Groß- und Kleinschreibung Deiner Objekte!

### Seeden der Datenbank

Modifiziere `package.json` dahingehend, dass `npx prisma db seed` folgende Objekte in der Datenbank sicherstellt:

- 7 Immobilien
- 7 Kunden
- 3 Verkäufe

Ein mehrfacher Aufruf des seed-Kommandos sollte nicht mehr als 7 (bzw. 3) Objekte in der Datenbank hinterlassen!

### Abfragen der Datenbank

Erstelle eine Applikation `query.js` welche bei `npm start` gestarted wird. Sie
möge strukturiert und verständlich Antworten auf folgende Fragen liefern (von
leicht bis schwer):

- Ausgabe aller verwalteten Immobilien
- Ausgabe aller Kunden
- Ausgabe aller noch nicht verkauften Immobilien
- Ausgabe aller Kunden, die etwas gekauft haben inklusive der von ihnen gekauften Immobilie(n)

### Abgabe

- auf Laufwerk `Z:\`
- **absolut _nur_ Notwendiges** abgeben.
- **Insbesondere keine Angabedateien und kein node_modules!**

Gutes Gelingen!

# 3AHWII PLF am 4. Juni 2024

## Thema Datenmodellierung, Seeding und Queries

### Datenmodell Fluglinie

Für eine Fluglinie soll ein Datenmodell erstellt werden, wie folgt:

#### Model Airplane

- id String (cuid)
- name String faker.airline.airplane().name
- flights (!)

#### Model Flight

- id (cuid)
- when (DateTime) faker.date.*
- flightNo String
    faker.airline.airline().iataCode + faker.number.int({min:1000, max:3000})
- passengers (!!)
- fromAirport -> named relation, s.u.
- toAirport -> named relation, s.u.
- Airplane (!)

#### Model Airport

- id (cuid)
- name String (faker.airline.airport().name)
- flightIncoming -> named relation, s.u.
- flightOutgoing -> named relation, s.u.

#### Model Passenger

- id String (cuid)
- email faker.internet.email(). UNIQUE!
- fullname faker.person.fullName()
- flights (!!)

Erstelle dieses Datenmodell mithilfe von Prisma. Beachte die besprochene Groß-
und Kleinschreibung Deiner Objekte.

#### Anmerkung named relations

Jeder Flug hat einen "from" und einen "to" Flughafen, somit brauchen wir
voneinander unterscheidbare Relationen (mit Namen).

```prisma
model Flight {
    ...
    toAirport   Airport   @relation("to", fields: [airportIdTo], references: [id])
    airportIdTo String
    ...
}
model Airport {
    ...
    flightIncoming Flight[] @relation("to")
    ...
```

### Seeden der Datenbank

Befülle mithilfe des `seed` Kommandos die Datenbank!

Tabellen mit keiner Abhängigkeit:

- Airplane
- Passenger
- Airport

Mit Abhängigkeit:

- Flight
- Passengers on a Flight

### Abfrage

Nur für "sehr gut" notwendig:

Suche Dir mittels "npx prisma studio" die Email eines Passagiers heraus und gib
für diese das Folgende aus, nach Datum sortiert, wie z.B.

"Luisa Kirchmayer am 21.6.2024 von Wien nach Brindisi"
"Luisa Kirchmayer am 24.6.2024 von Oklahoma nach Osaka"

### Abgabe

- auf Laufwerk `Z:\`
- **absolut _nur_ Notwendiges** abgeben.
- **Insbesondere keine Angabedateien und kein node_modules!**

Gutes Gelingen!

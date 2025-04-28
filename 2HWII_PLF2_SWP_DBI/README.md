# 2ahwii plf 2025-04-29

## themen: javascript klassen, sql joins

### Task 1: Erstellung und export der Klasse "Frage"

"export class"

### Task 2: Construktor

implentiere die constructor methode und speichere die Argumente in Attributen der Klasse

### Task 3: Parameterprüfung constructor

Stelle sicher, dass

- 3 "arguments" an den constructor übergeben werden.
- das erste und dritte argument ein "string" ist (typeof)
- das zweite in array ist und nicht leer

Im Fehlerfall: "throw"

### Task 4: Plausibilitätstest

Die Frage bekommt als parameter 2 eine Liste an Optionen, die richtige davon
wird in parameter 3 übergeben. Stelle nun sicher, dass nur ein gültiges
Frage-Objekt erzeugt werden kann. (Parameter 3: string muss in Parameter
2: string[] enthalten sein). Tipp: "includes"

### Task 5: Klasse `Quiz`

exportiere nun eine weitere Klasse: "Quiz"

### Task 6: Parameterprüfung Quiz constructor: 1 argument

Werfe nun Fehler, wenn die "arguments" des constructors nicht Länge 1 haben.

### Task 7: Einlesen von einer .json Datei

... in das Array "Quiz.fragen". `new Quiz("fragen.json")` sollte nun die Datei
einlesen. Erinnerung: `Deno.readTextFileSync(fileName)` und `JSON.parse(json)`.

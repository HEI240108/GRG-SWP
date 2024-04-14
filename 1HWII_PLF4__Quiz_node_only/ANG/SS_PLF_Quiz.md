Tests:

- constructor
- #optionen: Exception bei "set"
- #frage: keine Excpetion bei "set"



# Javascript Frontend: Einfache Quiz-Anwendung

(Quelle: Copilot)

Ziel: Erstellen Sie eine einfache Quiz-Anwendung mit reinem JavaScript. Das Quiz
sollte Fragen anzeigen, Optionen bereitstellen und am Ende die Punktzahl
anzeigen.

## Teil 1: JavaScript-Grundlagen (20 Minuten)

Arrays: Definieren Sie ein Array von Fragen. Jede Frage sollte ein Objekt mit
den Eigenschaften Frage, Optionen (ein Array) und Antwort sein.

Schleifen: Schreiben Sie eine Funktion FrageAnzeigen, die ein Frage-Objekt als
Argument nimmt und die Frage und Optionen in der Konsole ausgibt.

If/Else: Schreiben Sie eine Funktion AntwortPrüfen, die ein Frage-Objekt und
eine Benutzerantwort als Argumente nimmt und ausgibt, ob die Benutzerantwort
korrekt ist oder nicht.

## Teil 2: Klassen (20 Minuten)

Klassen: Erstellen Sie eine Quiz-Klasse mit den Eigenschaften Fragen (ein
Array), Punktzahl und AktuellerFragenIndex. Die Klasse sollte die Methoden
AktuelleFrageAnzeigen, AntwortPrüfen und NächsteFrage haben.

Klasseninstanzen: Erstellen Sie eine Instanz der Quiz-Klasse mit Ihrem
Fragen-Array und verwenden Sie deren Methoden, um Fragen anzuzeigen und
Antworten zu prüfen.

## Teil 3: Einfache Frontend (20 Minuten)

DOM-Manipulation: Erstellen Sie eine einfache HTML-Seite mit einem div für die
Frage, einem ul für die Optionen und Schaltflächen für "Antwort einreichen" und
"Nächste Frage". Schreiben Sie Funktionen, um diese Elemente mit der aktuellen
Frage und den Optionen zu aktualisieren.

Ereignisbehandlung: Fügen Sie den Schaltflächen Ereignis-Listener hinzu, die bei
einem Klick die entsprechenden Methoden Ihrer Quiz-Instanz aufrufen.

Bonus: Zeigen Sie die Punktzahl des Benutzers auf der Seite an und aktualisieren
Sie sie, wenn er Fragen beantwortet.

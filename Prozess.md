# Der Prozess

Ein Prozess ist ein laufendes Programm.

## Process Creation

Ein Prozess wird erzeugt, indem der Parent-Prozess zuerst

- `fork()'ed` (siehe man fork). Es gibt jetzt 2 Instanzen, eine ist das Child, die andere der Parent.
- Dann ruft das child ein File (in dem maschinenlesbarer Code enthalten ist) mittels `exec()'d` auf.
- Der Parent `wait()'ed` auf das child, wenn es ihn interessiert.

## Pid und Pid

- pid process ID
- ppid parent process id

## Management von Prozessen in der Shell

- einfach das Programm aufrufen, Beispiel: `date`
- Starten im Hintergrund mit `&`. Beispiel: `firefox &`
- Holen in den Foreground mit `fg`.
- Crtl-Z stoppt einen Vordergrund Prozess. Dieser kann mit `fg` im Vordergrund oder mit `bg` im Hintergrund weiter ausgeführt werden.
- `jobs` listet laufende Prozesse.
- `%` Symbol, um Hintergrund Prozesse gezielt zu bearbeiten. Zb. `fg %3`

## Signale

Signale sind eine Möglichkeit, Prozesse über bestimmte Ereignisse zu informieren oder deren Lauf zu beinflussen. Signale werden über den `kill()` Syscall an Prozesse übermittelt. `kill -l` listet alle verfügbaren Signale des Systems auf. Für die meisten (?) Signale sind default actions vorgegeben, welche
per Signal-Handler des signalisierten Prozesses geändert implementiert werden können. Manche Signals können aber nicht durch Handler abgefangen werden.

### nicht handelbare Signale

- STOP .. unterbricht die Ausführung eines Prozesses bis ein CONT kommt.
- CONT .. setzt die Ausführung eines gestoppten Prozesses fort.
- KILL .. beendet den Prozess *sofort*
- SEGV .. Segmentation Violation: Der Prozess hat auf Speicher ausserhalb seiner Berechtigungen zugegriffen.

Signale. Werdenan Prozesse gesendet. Mit dem Befehl `kill` CONT STOP

ps wwwaux

## filehandles

Jeder Prozess hat zu Beginn 3 offene Filehandles

- stdin (read-only)
- stdout (write-only)
- stderr (write-only)

## environment

key-value store,  wird bei fork / exec vererbt.
deno: process.env

## args

ist ein string-array, und manchmal ist argv[0] der Name des Programmes selbst.

Umleitung '> filename' bzw. stderr '2 > filename'

find /etc > filename 2>&1

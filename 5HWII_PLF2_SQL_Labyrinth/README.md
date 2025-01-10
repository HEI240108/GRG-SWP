# 5ahwii plf2, 15.1.2024

## Aufgabe 1: Nicht langweilige Filme (7p)

| Spalte       | Typ     |
| ------------ | ------- |
| id           | int     |
| film         | varchar |
| beschreibung | varchar |
| bewertung    | float   |

Id ist der Primärschlüssel (Spalte mit eindeutigen Werten) für diese Tabelle.
Jede Zeile enthält Informationen über den Namen eines Films, sein Genre und
seine Bewertung. Bewertung ist ein Float mit 2 Dezimalstellen im Bereich von [0,
10].

Schreibe eine Lösung, um die Filme mit einer ungeraden ID und einer
Beschreibung, die nicht "langweilig" ist, zu melden. Gib die Ergebnistabelle in
absteigender Reihenfolge der Bewertung zurück. Das Ergebnisformat ist im
folgenden Beispiel dargestellt.

Beispiel Kino-Tabelle:

| id | film           | beschreibung | bewertung |
| -- | -------------- | ------------ | --------- |
| 1  | Krieg          | tolles 3D    | 8.9       |
| 2  | Wissenschaft   | Fiktion      | 8.5       |
| 3  | irisch         | langweilig   | 6.2       |
| 4  | Eis Lied       | Fantasie     | 8.6       |
| 5  | House of Cards | Interessant  | 9.1       |

Ausgabe:

| id | film           | beschreibung | bewertung |
| -- | -------------- | ------------ | --------- |
| 5  | House of Cards | Interessant  | 9.1       |
| 1  | Krieg          | tolles 3D    | 8.9       |

Erläuterung: Es gibt drei Filme mit ungeraden IDs: 1, 3 und 5. Der Film mit der
ID = 3 ist langweilig, daher wird er nicht in die Antwort einbezogen.

## Aufgabe 2: Erweiterung der Labyrinth-Lösung (15p)

Im Ordner `2_recursion` findet sich eine fertig ausprogrammierte Lösung des
Labyrinth Problems. Diese kannst Du in einer wsl-bash z.B. mit
`./main.ts 5x5.json` starten und die Ausgabe begutachten. Alternativ sind auch
einige deno tasks vorbereitet. Die Aufgabe besteht darin, anstatt der Punkte
Pfeile auszugeben: (`←, →, ↑, ↓`). Beispiel:

```text
  1 2 3 4 5 6 7 8 9                           1 2 3 4 5 6 7 8 9
1 # # # . # # # # #                         1 # # # ↓ # # # # #
2 # . . . #       #                __       2 # ↓ ← ← #       #
3 # . # # #   #   #      _____ ____\ \      3 # ↓ # # #   #   #
4 # . # . . . #   #     |_____|_____\ \     4 # ↓ # → → ↓ #   #
5 # . # . # . #   #     |_____|_____/ /     5 # ↓ # ↑ # ↓ #   #
6 # . . . # . #   #                /_/      6 # → → ↑ # ↓ #   #
7 # # # # # . # # #                         7 # # # # # ↓ # # #
```

## Aufgabe 3: Join von 2 Tabellen (8p)

Dies betrifft den Ordner 3_sql_join.

Tabelle: Person

| Spaltenname | Typ     |
| ----------- | ------- |
| personId    | int     |
| nachname    | varchar |
| vorname     | varchar |

personId ist der Primärschlüssel. Die Tabelle enthält Informationen über die ID
von Personen und deren Vor- und Nachnamen.

Tabelle: Adresse

| Spaltenname | Typ     |
| ----------- | ------- |
| addressId   | int     |
| personId    | int     |
| city        | varchar |
| state       | varchar |

addressId ist der Primärschlüssel. Jede Zeile dieser Tabelle enthält Informationen
über die Stadt und das Bundesland einer Person mit ID = personId.

Schreibe eine Statement, um den Vornamen, Nachnamen, die Stadt und das Bundesland
jeder Person in der Person-Tabelle zu finden. Wenn die Adresse einer personId
nicht in der Adresse-Tabelle vorhanden ist, gib stattdessen `null` aus. Gib die
Ergebnistabelle in beliebiger Reihenfolge zurück.

Person-Tabelle:

| personId | lastname | firstname |
| -------- | -------- | --------- |
| 1        | Wang     | Allen     |
| 2        | Alice    | Bob       |

Adress-Tabelle:

| addressId | personId | city          | state      |
| --------- | -------- | ------------- | ---------- |
| 1         | 2        | New York City | New York   |
| 2         | 3        | Leetcode      | California |

Ausgabe:

| vorname | nachname | city          | state    |
| ------- | -------- | ------------- | -------- |
| Allen   | Wang     | Null          | Null     |
| Bob     | Alice    | New York City | New York |

Erläuterung: Da es keine Adresse in der Adresse-Tabelle für die personId = 1
gibt, werden null für Stadt und Bundesland zurückgegeben. addressId = 1 enthält
Informationen über die Adresse der personId = 2.

## Aufgabe 4: Datenmodell Menschheit (10p)

Gesucht wird ein Datenmodell für das biblische genetische Modell der Menschheit,
der Abstammung von Adam und Eva. Die Idee ist, dass jeder Mensch einen Vater und
eine Mutter hat. Somit wären die Spalten wohl wie folgt:

| id | id_mutter | id_vater | name |

Verlangt ist zudem die Bedingung (Constraint), dass weder "id", noch "id_vater",
noch "id_mutter" `NULL` sein darf. Das wird natürlich bei Adam und Eva schwierig,
ist aber Teil dieser Aufgabe.

**Gesucht** ist a) das "DDL" (create table), bitte in "ddl.sql" eintragen, sowie
b) eine sqlite Datenbank in welcher diese Tabelle existiert und c) sollen Adam und
Eva existieren und dürfen weder sich selbst noch sich gegenseitig als Vater und
Mutter haben. Vielleicht musst Du dazu den lieben Gott ins Spiel bringen.

---
Punkteschlüssel: *0-20 / 21-25 / 26-30 / 31-35 / 36-40*

```text
#     #                        #####                                    ###
#     # # ###### #            #     # #####    ##    ####   ####        ###
#     # # #      #            #       #    #  #  #  #      #            ###
#     # # #####  #             #####  #    # #    #  ####   ####         #
 #   #  # #      #                  # #####  ######      #      #
  # #   # #      #            #     # #      #    # #    # #    #       ###
   #    # ###### ######        #####  #      #    #  ####   ####        ###
```

import { assertEquals } from "@std/assert";
export class Frage {
    constructor(frage, optionen, antwort) {
        assertEquals(typeof frage, "string", "Frage muss ein String sein");
        assertEquals(
            Array.isArray(optionen),
            true,
            "Optionen muss ein Array sein",
        );
        assertEquals(
            optionen.length > 0,
            true,
            "Optionen darf nicht leer sein",
        );
        assertEquals(typeof antwort, "string", "Antwort muss ein String sein");
        assertEquals(3, arguments.length, "Es werden 3 Argumente erwartet");
        assertEquals(
            optionen.includes(antwort),
            true,
            "Antwort muss in den Optionen enthalten sein",
        );
        this.frage = frage;
        this.optionen = optionen;
        this.antwort = antwort;
    }
}
export class Quiz {
    constructor(fileName) {
        this.fragen = [];

        assertEquals(
            typeof fileName,
            "string",
            "Dateiname muss ein String sein",
        );
        assertEquals(
            fileName.endsWith(".json"),
            true,
            "Dateiname muss .json enden",
        );
        assertEquals(1, arguments.length, "Es wird 1 Argument erwartet");
        const json = Deno.readTextFileSync(fileName);
        const data = JSON.parse(json);
        assertEquals(
            Array.isArray(data),
            true,
            "Datei muss ein Array sein",
        );
        for (const frage of data) {
            this.fragen.push(
                new Frage(
                    frage.frage,
                    frage.optionen,
                    frage.antwort,
                ),
            );
        }
    }
}

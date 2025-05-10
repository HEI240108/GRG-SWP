import {
    assert,
    assertEquals,
    assertFalse,
    assertNotEquals,
    assertThrows,
} from "@std/assert";
import * as plf from "../plf.js";

Deno.test("Class Frage exists", () => {
    assertEquals(typeof plf.Frage, "function", "Frage ist keine Klasse");
    assert(
        plf.Frage instanceof Function,
        "Frage ist keine Klasse",
    );
});
Deno.test("constructor takes 3 arguments", () => {
    const frage1 = new plf.Frage("Frage", ["Option1", "Option2"], "Option1");
    assertEquals(frage1.frage, "Frage");
    assertEquals(frage1.optionen, ["Option1", "Option2"]);
    assertEquals(frage1.antwort, "Option1");
    const frage2 = new plf.Frage("Frage2", ["OptionA", "OptionB"], "OptionB");
    assertEquals(frage2.frage, "Frage2");
    assertEquals(frage2.optionen, ["OptionA", "OptionB"]);
    assertEquals(frage2.antwort, "OptionB");
});
Deno.test("constructor throws on false arguments", () => {
    assert(plf.Frage);
    assertThrows(() => {
        new plf.Frage();
    });
    assertThrows(() => {
        new plf.Frage("Frage");
    });
    assertThrows(() => {
        new plf.Frage("Frage", ["Option1", "Option2"]);
    });
    assertThrows(() => {
        new plf.Frage("Frage", ["Option1", "Option2"], 123);
    });
});
Deno.test("constructor throws on not included antwort", () => {
    assert(plf.Frage);
    assertThrows(() => {
        new plf.Frage("Frage", ["Option1", "Option2"], "Option3");
    });
    assertThrows(() => {
        new plf.Frage("Frage", ["Option1", "Option2"], "Option4");
    });
});
Deno.test("class Quiz exists", () => {
    assertEquals(typeof plf.Quiz, "function", "Quiz ist keine Klasse");
    assert(
        plf.Quiz instanceof Function,
        "Quiz ist keine Klasse",
    );
});
Deno.test("constructor takes exactly argument", () => {
    new plf.Quiz("fragen.json");
    assertThrows(() => {
        new plf.Quiz();
    });
    assertThrows(() => {
        new plf.Quiz("fragen.json", "extra");
    });
});
Deno.test("fragen is an array of Frage objects", () => {
    const quiz = new plf.Quiz("fragen.json");
    assertEquals(Array.isArray(quiz.fragen), true, "fragen ist kein Array");
    assertEquals(
        quiz.fragen.length > 0,
        true,
        "fragen ist ein leeres Array",
    );
    for (const frage of quiz.fragen) {
        assert(
            frage instanceof plf.Frage,
            "fragen enthält kein Frage-Objekt",
        );
    }
});

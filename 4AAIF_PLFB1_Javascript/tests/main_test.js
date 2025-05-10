import {
    assert,
    assertEquals,
    assertFalse,
    assertNotEquals,
    assertThrows,
} from "@std/assert";
import * as plf from "../plf.js";
import { otdb } from "../fragen.js";

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
Deno.test("constructor takes exactly argument", async () => {
    assertThrows(() => {
        new plf.Quiz();
    });
    assertThrows(() => {
        new plf.Quiz("fragen.js", "extra");
    });
});
Deno.test("fragen is an array of Frage objects", async () => {
    const quiz = new plf.Quiz(otdb);
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
Deno.test("getFragenByLength returns questions with minimum length", async () => {
    const quiz = new plf.Quiz(otdb);
    const longQuestions = quiz.getFragenByLength(10);
    assert(
        Array.isArray(longQuestions),
        "getFragenByLength should return an array",
    );
    for (const frage of longQuestions) {
        assert(
            frage.frage.length >= 10,
            "Questions should be at least 10 chars long",
        );
    }
});
Deno.test("sortFragenByLength returns sorted questions", async () => {
    const quiz = new plf.Quiz(otdb);
    const sortedQuestions = quiz.sortFragenByLength();
    assert(
        Array.isArray(sortedQuestions),
        "sortFragenByLength should return an array",
    );
    for (let i = 1; i < sortedQuestions.length; i++) {
        assert(
            sortedQuestions[i].frage.length >=
                sortedQuestions[i - 1].frage.length,
            "Questions should be sorted by length",
        );
    }
});
Deno.test("getFragenWithOption returns questions containing option", async () => {
    const quiz = new plf.Quiz(otdb);
    const questionsWithOption = quiz.getFragenWithOption("Option1");
    assert(
        Array.isArray(questionsWithOption),
        "getFragenWithOption should return an array",
    );
    for (const frage of questionsWithOption) {
        assert(
            frage.optionen.includes("Option1"),
            "Questions should contain the specified option",
        );
    }
});
Deno.test("getAllOptions returns unique options", async () => {
    const quiz = new plf.Quiz(otdb);
    const allOptions = quiz.getAllOptions();
    assert(Array.isArray(allOptions), "getAllOptions should return an array");
    assert(allOptions.length > 0, "Should return some options");
    const uniqueOptions = new Set(allOptions);
    assertEquals(
        uniqueOptions.size,
        allOptions.length,
        "Options should be unique",
    );
});
Deno.test("getAverageOptionsPerQuestion returns positive number", async () => {
    const quiz = new plf.Quiz(otdb);
    const avg = quiz.getAverageOptionsPerQuestion();
    assert(
        typeof avg === "number",
        "getAverageOptionsPerQuestion should return a number",
    );
    assert(avg > 0, "Average should be positive");
});

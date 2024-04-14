'use strict';
const fragen = require('./fragen.js')
const assert = require('assert')
let PLForTEST;
if (process.argv[process.argv.length - 1] == 'lsg') {
    console.log('running loesung');
    PLForTEST = require('./lsg.js');
} else {
    PLForTEST = require('./plf.js');
}
const tests = [
    checkConstructor,
    checkOptionen,
    checkOptionenRW,
    checkFrage,
    checkFrageRW,
    isRichtig,
];
function checkConstructor() {
    if (PLForTEST?.__proto__?.__proto__ === null || PLForTEST?.name != "Frage") {
                throw new Error('Konstruktor existiert nicht oder ist falsch');
    }
    if (typeof PLForTEST.constructor?.name !="string")
                throw new Error('Konstruktor existiert nicht oder ist falsch');
}
function checkOptionen() {
    fragen.forEach(f => {
        const frg = new PLForTEST(f);
        if (frg.optionen !== f.optionen) {
            throw new Error("Die Optinen des Objekts sind nicht die gleichen wie in der Frage");
        }
    });
}
function checkOptionenRW() {
    fragen.forEach(f => {
        const frg = new PLForTEST(f);
        try {
            frg.optionen = null;
            throw new Error("Optionen setzen sollte mit Exception verhindert werden");
        } catch { }
    });
}
function checkFrage() {
    fragen.forEach(f => {
        const frg = new PLForTEST(f);
        if (frg.frage !== f.frage) {
            throw new Error("GET Frage returned nicht die Frage");
        }
    });
}
function checkFrageRW() {
    fragen.forEach(f => {
        const frg = new PLForTEST(f);
        try {
            frg.frage = "serwus"
        } catch (e) {}
        if (frg.frage !== f.frage) {
            throw new Error('property frage wurde möglicherweise überschrieben');
        }
    });
}
function isRichtig() {
    fragen.forEach(f => {
        const frg = new PLForTEST(f);
        f.optionen.forEach(opt => {
            if (!(frg.isRichtig(opt) === (opt === f.antwort)))
                throw new Error("Klasse kann nicht sagen ob eine Antwort richtig ist")
        });
});
}
function doAllTests() {
    let noSucceed = 0;
    let noTest = 0;
    for (let test of tests) {
        noTest++;
        let line = `Test #${noTest} (${test.name}): `;
        try {
            test();
            noSucceed++;
            line = `✅ ${line}`;
        } catch (e) {
            line = `❌ ${line} ${e.message}`;
        }
        console.log(`${line} (${noSucceed} OK von ${noTest})`);
    }
}
doAllTests();
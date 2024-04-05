'use strict';
let plfExp;
if (process.argv[process.argv.length - 1] == 'lsg') {
    console.log('running loesung');
    plfExp = require('./loesung.js');
} else {
    plfExp = require('./plf');
}
const { FakeTier, fakerDE } = plfExp;

const tests = [
    checkMethods,
    checkToStringExists,
    checkToString,
    checkArt,
    checkArtRasse,
    checkFirstName,
];
const aTypes = {};
Array.from(new Array(100)).map(
    (_) => (aTypes[fakerDE.animal.type()] = new Set())
);
for (let at in aTypes) {
    Array.from(new Array(9999)).map((_) =>
        aTypes[at].add(fakerDE.animal[at]())
    );
}
const firsts = new Set();
Array.from(new Array(9999)).map((_) => firsts.add(fakerDE.person.firstName()));
const t = new FakeTier();
function checkMethods() {
    Array.from(new Array(10))
        .map((_) => new FakeTier())
        .forEach((_) => {
            if (!_['name'] || !_['art'] || !_['rasse']) {
                throw new Error('Eines der Attribute fehlt');
            }
        });
}
function checkToStringExists() {
    Array.from(new Array(10))
        .map((_) => new FakeTier())
        .forEach((_) => {
            if (_.toString().includes('object Object')) {
                throw new Error('toString Methode fehlt');
            }
        });
}
function checkToString() {
    Array.from(new Array(10))
        .map((_) => new FakeTier())
        .forEach((_) => {
            if (!_.toString().match(' is a .*, race: ')) {
                throw new Error('toString nicht lt. Angabe implementiert');
            }
        });
}
function checkArt() {
    Array.from(new Array(50))
        .map((_) => new FakeTier())
        .forEach((_) => {
            if (!aTypes[_.art]) {
                throw new Error(`"${_.art} ist keine gültige Tierart`);
            }
        });
}
function checkArtRasse() {
    Array.from(new Array(50))
        .map((_) => new FakeTier())
        .forEach((_) => {
            if (!aTypes[_.art]?.has(_.rasse)) {
                throw new Error(`${_.rasse} ist keine Rasse von ${_.art}`);
            }
        });
}
function checkFirstName() {
    Array.from(new Array(50))
        .map((_) => new FakeTier())
        .forEach((_) => {
            if (!firsts.has(_.name)) {
                throw new Error(
                    `${_.name} kommt nicht aus der faker bibliothek!`
                );
            }
        });
}
function print7Tiere() {
    Array.from(new Array(7))
        .map((_) => new FakeTier())
        .forEach((_) => {
            console.log(_.toString());
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
print7Tiere();

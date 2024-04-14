const fragen = require('./fragen');

class Frage {
    #frage
    #antwort
    #optionen
    constructor(frage) {
        this.#frage = frage.frage
        this.#antwort = frage.antwort
        this.#optionen = frage.optionen
    }
    get optionen() {
        return this.#optionen;
    }
    set optionen(l) {
        throw new Error('Optionen können nur im Konstruktor gesetzt werden')
    }
    get frage() {
    return this.#frage}

    isRichtig(antwort) {
        return this.#antwort === antwort
        }
}

fragen.map(f => new Frage(f));
module.exports = Frage
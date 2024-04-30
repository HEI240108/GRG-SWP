
class TicketAutomat {
    #einnahmenGesamt;
    #eingeworfen;
    #anzahlPersonen;
    #ziel;
    constructor(initialGeld) {
        this.einnahmenGesamt = initialGeld;
        this.#eingeworfen = 0;
        this.#ziel = undefined;
    }
    einwerfen(geld) {
        if (isNaN(geld) || geld < 0) {
            throw new Error('Dieses Geld nehme ich nicht!');
        }
        this.#eingeworfen += geld;
    }
    zielEinstellen(ziel) {
        const preis = zieleUndPreise[ziel];
        if (preis == undefined) {
            throw new Error('Dorthin fahre ich nicht');
        }
        this.#ziel = ziel;
    }
    set einnahmenGesamt(was) {
        this.#einnahmenGesamt = was;
    }
    get einnahmenGesamt() {
        return this.#einnahmenGesamt;
    }
    get eingeworfen() {
        return this.#eingeworfen;
    }
    get ziel() {
        return this.#ziel;
    }
    get gesamtPreis() {
        return zieleUndPreise[this.#ziel] * this.#anzahlPersonen;
    }
    anzahlEinstellen(wieviele) {
        if (wieviele < 1 || wieviele > 10) {
            throw new Error('falsche Anzahl Personnen');
        }
        this.#anzahlPersonen = wieviele;
    }
    ticketKaufen() {
        // wirft evtl. einen Fehler
        const ticket = new Ticket(
            this.#anzahlPersonen,
            this.#ziel,
            this.#eingeworfen
        );
        // Guthaben zurücksetzen
        this.#eingeworfen = 0;

        this.#einnahmenGesamt += ticket.summe;
        return ticket;
    }
}
const zieleUndPreise = {
    Salzburg: 30,
    Innsbruck: 45,
    Klagenfurt: 40,
    Graz: 25,
    Bregenz: 60,
};
class Ticket {
    #anzahlPersonen;
    #ziel;
    #gegeben;
    #summe;
    constructor(anzahl, ziel, gegeben) {
        this.#anzahlPersonen = anzahl;
        this.#ziel = ziel;
        this.#gegeben = gegeben;
        this.#summe = zieleUndPreise[this.#ziel] * this.#anzahlPersonen;
        if (this.#gegeben < this.#summe) {
            throw new Error('nicht genug gegeben');
        }
    }
    get summe() {
        return this.#summe;
    }
    toString() {
        return `===============================
=== Fahrkarte nach ${this.#ziel} ===
===============================
Einzelpreis: € ${zieleUndPreise[this.#ziel]}.-
Anzahl der Fahrgäste: ${this.#anzahlPersonen}
===============================
Summe: € ${this.#summe}.-
===============================
gegeben: € ${this.#gegeben}.-
Restgeld: € ${this.#gegeben - this.#summe},-
===============================`;
    }
}

// State
// 1.APPLICATION STATE;
// 2.STATE ACCESSORS / MUTATORS FN'S
const state = new TicketAutomat(100);
// 3.DOM Node Refs
const einwerfenInput = document.getElementById('einwerfenBetrag');
const einwerfenButton = document.getElementById('einwerfenButton');
const zielSelect = document.getElementById('ziel');
const anzahlPersonenInput = document.getElementById('anzahlPersonen');
const fahrpreisSpan = document.getElementById('fahrpreis');
const guthabenSpan = document.getElementById('guthaben');
const ticketAusgabeTextarea = document.getElementById('ticketAusgabe');
const einnahmenSpan = document.getElementById('einnahmen');
// Static references to DOM nodes needed after the start of the application;
// 4.DOM Node Creation Fn's
// no need for this
// Dynamic creation of DOM nodes needed upon user interaction
// Here we will possibly create a function that will create a new item;
// README_Ticketautomat.md(4 / 4);
// 5.RENDER FN
function render() {
    automat.zielEinstellen(zielSelect.value);
    automat.anzahlEinstellen(anzahlPersonenInput.value);
    fahrpreisSpan.textContent = automat.gesamtPreis;
    einnahmenSpan.textContent = automat.einnahmenGesamt;
}
// These functions will render the application state to the DOM
// IMPORTANT TAKEAWAY: The state drives the UI, any state change should trigger a re - render of the UI;

// 6.EVENT HANDLERS
// These functions handle user interaction e.g.button clicks, key presses etc.
// These functions will call the state mutators and then call the render function
//     The naming convention for the event handlers is on < Event >
//         Here we will create a functions that will handle e.g.a "click" event on a button.
// 7.INIT BINDINGS
// These are the initial bindings of the event handlers, i.e.register the handlers of Pt. 6 with the DOM Node Refs of;
// Pt. 3;
// 8.INITIAL RENDER
// Here will call the render function (Pt. 5) to render the initial state of the application;
function reset() {
    render();
    // ticketAusgabeTextarea.textContent = '';
    // einwerfenInput.textContent = "";
    // anzahlPersonenInput.textContent = "";
}
function ticketKaufenClickHandler() {
    console.log('ticketKaufenClickHandler');
    try {
        const ticket = automat.ticketKaufen();
        ticketAusgabeTextarea.textContent = ticket.toString();
    } catch (error) {
        console.error(error.message);
        ticketAusgabeTextarea.textContent = `Fehler: ${error.message}`;
    }

    // Guthaben im HTML aktualisieren
    guthabenSpan.textContent = automat.eingeworfen;

    render();
}
automat = new TicketAutomat(150);
automat.anzahlEinstellen(2);
automat.zielEinstellen('Graz');
einwerfenInput.addEventListener('keyup', (e) => {
    if (e.key != 'Enter') {
        return;
    }
    try {
        automat.einwerfen(parseFloat(einwerfenInput.value));
        guthabenSpan.textContent = automat.eingeworfen;
    } catch (error) {
        ticketAusgabeTextarea.textContent = error.message;
    }
});
einwerfenButton.addEventListener('click', () => {
    try {
        automat.einwerfen(parseFloat(einwerfenInput.value));
        guthabenSpan.textContent = automat.eingeworfen;
    } catch (error) {
        ticketAusgabeTextarea.textContent = error.message;
    }
});
zielSelect.addEventListener('change', render);
anzahlPersonenInput.addEventListener('input', render);
render();

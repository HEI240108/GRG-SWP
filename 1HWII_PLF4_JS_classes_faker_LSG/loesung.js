const { fakerDE } = require('@faker-js/faker');
const breakpoint = 'Hier kann der Breakpoint gesetzt werden';

class FakeTier {
    constructor() {
        this.name = fakerDE.person.firstName();
        this.art = fakerDE.animal.type();
        this.rasse = fakerDE.animal[this.art]();
    }
    toString() {
        return `${this.name} is a ${this.art}, race: ${this.rasse}`;
    }
}

module.exports = { FakeTier, fakerDE };

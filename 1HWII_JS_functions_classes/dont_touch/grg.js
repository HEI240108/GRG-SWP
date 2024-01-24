// + name : String
// + groesseM : Number
// + gewichtKG : Number
// toString() : String
// getBmi() : Number// Code snippet: https://www.codewars.com/kata/56f173a35b91399a05000cb7/solutions/javascript

const tests = [testPersonExists];

function testPersonExists() {
    if (typeof Person === 'undefined') {
        throw new Error('Person class does not exist');
    }
}

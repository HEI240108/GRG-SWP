const persons = require('./persons')();
const { fakerDE_AT: faker } = require('@faker-js/faker');
const maxDups = 3;
const arr = [];
for (per of persons) {
    const count = faker.number.int({ min: 1, max: maxDups });
    for (let i = 0; i < count; i++) {
        arr.push(per);
    }
}
arr.sort((_) => Math.random() - 0.5);
for (per of arr) {
    console.log(per);
}

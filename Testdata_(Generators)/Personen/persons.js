const { fakerDE_AT: faker } = require('@faker-js/faker');
function getPersons(num = 54) {
    const rw = [];
    for (let i = 1; i <= num; i++) {
        const sex = faker.person.sexType();
        const firstName = faker.person.firstName({ sex: sex });
        const fullName = faker.person.fullName({
            sex: sex,
            firstName: firstName
        });
        const lastName = fullName.split(' ').at(-1);
        rw.push(
            `${fullName};${faker.internet
                .email({
                    firstName: firstName,
                    lastName: lastName
                })
                .toLocaleLowerCase()};${faker.phone.number()};${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state()}`
        );
    }
    return rw;
}
module.exports = getPersons;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { fakerDE: faker } = require('@faker-js/faker');
console.log("seeding immo ..");
async function seed() {
    let added = 0;
    const immoTypes = ['Büro', 'Wohnung', 'Haus', 'Land'];
    const immoCountTarget = 7;
    // 7 immos
    while (await prisma.immobilie.count() < immoCountTarget) {
        await prisma.immobilie.create({
            data: {
                adresse: `${faker.location.streetAddress()}, ${faker.location.zipCode()}, ${faker.location.city()}, ${faker.location.country()}`,
                immoTyp: immoTypes[Math.floor(Math.random() * immoTypes.length)],
                baujahr: faker.number.int({ min: 1500, max: 2024 }),
                quadratmeter: faker.number.int({ min: 10, max: 1000 }),
            },
        });
        added++;
    }
    const kundeCountTarget = 7;
    // 7 kunden
    while (await prisma.kunde.count() < kundeCountTarget) {
        await prisma.kunde.create({
            data: {
                name: faker.person.fullName(),
                tel: faker.phone.number(),
            },
        });
        added++;
    }
    const verkaufCountTarget = 3;
    // 3 verkäufe
    const immos = await prisma.immobilie.findMany({ select: { id: true } });
    const kunden = await prisma.kunde.findMany({ select: { id: true } });
    while (await prisma.verkauf.count() < verkaufCountTarget) {
        await prisma.verkauf.create({
            data: {
                immobilieId: immos[Math.floor(Math.random() * immos.length)].id,
                kundeId: kunden[Math.floor(Math.random() * kunden.length)].id,
                verkaufspreis: faker.number.int({ min: 10000, max: 10e6 }),
                verkaufsdatum: faker.date.recent(),
                vertrag: faker.lorem.paragraph(),
            },
        });
        added++;
    }
    return `added ${added} records`;
}
seed().then((e) => { console.log(`seeding ok: ${e}`); }).catch((e) => { console.error(`Error: ${e.message}`); }).finally(() => { prisma.$disconnect(); });;
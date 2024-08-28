const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { fakerDE: faker } = require('@faker-js/faker');
console.log("seeding immo ..");
async function seed() {
    const immoTypes = ['Büro', 'Wohnung', 'Haus', 'Land'];
    const immoCountTarget = 7;
    const kundeCountTarget = 7;
    const verkaufCountTarget = 3;
    let added = 0;
    // your code goes here
    return `added ${added} records`;
}
seed().then((e) => { console.log(`seeding ok: ${e}`); }).catch((e) => { console.error(`Error: ${e.message}`); }).finally(() => { prisma.$disconnect(); });;
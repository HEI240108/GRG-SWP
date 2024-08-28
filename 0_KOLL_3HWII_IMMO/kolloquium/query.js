const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function query() {
    // your code here
}
query().catch(e => console.error(e.message)).finally(() => { prisma.$disconnect(); });
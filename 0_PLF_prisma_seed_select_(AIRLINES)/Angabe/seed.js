const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { faker } = require('@faker-js/faker');

async function main() {

}
main()
    .then(_ => console.log("done seeding"))
    .catch(e => console.error(e.message))
    .finally(() => {
        prisma.$disconnect().then(() => {
            console.log("prisma successfully disconnected");
        }
        );
    });

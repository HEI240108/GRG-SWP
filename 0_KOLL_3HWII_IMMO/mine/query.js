const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function query() {
    console.info("querying immo ..");
    (await prisma.immobilie.findMany({ include: { Verkauf: true } })).forEach((immo) => {
        console.log(`Immo: ${JSON.stringify(immo)}`);
    });
    console.info("querying kunden ..");
    (await prisma.kunde.findMany()).forEach((kunde) => {
        console.log(`Kunde: ${JSON.stringify(kunde)}`);
    });
    // Ausgabe aller noch nicht verkauften Immobilien:
    console.info("querying immo not sold ..");
    (await prisma.immobilie.findMany({
        where: {
            Verkauf: {
                none: {}
            }
        }
    })).forEach((immo) => {
        console.log(`Immo not sold: ${JSON.stringify(immo)}`);
    });
    console.log("\nAlle Kunden die schon gekauft haben:\n");
    (await prisma.kunde.findMany({
        where: {
            Verkauf: {
                some: {}
            }
        },
        include: {
            Verkauf: {
                select: {
                    Immobilie: true
                }
            }
        }
    }
    )).forEach((kunde) => {
        console.log(`Kunde: ${JSON.stringify(kunde)}`);
    });
    // const kunden = await prisma.kunde.findMany();
    // const verkaeufe = await prisma.verkauf.findMany();
    return;
}
query().catch(e => console.error(e.message)).finally(() => { prisma.$disconnect(); });
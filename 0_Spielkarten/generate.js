const farben = ['♥', '♠', '♦', '♣'];
const werte = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Bub', 'Dame', 'König', 'Ass'];
const karten = [];
farben.forEach((farbe) => {
    werte.forEach((wert) => {
        karten.push(`${farbe} ${wert}`);
    });
});
karten.sort(() => Math.random() - 0.5);
karten.forEach((karte) => console.log(karte));

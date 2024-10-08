import { Voiture } from "./voiture.js";

const voiture1 = new Voiture("BMW", "Serie 1", 80);
const voiture2 = new Voiture("Mercedes", "GLB", 100);

const resultats = [];

for (let i = 0; i < 3; i++) {
    voiture1.accelerer();
    resultats.push(voiture1.getDescription());
}

for (let i = 0; i < 2; i++) {
    voiture2.accelerer();
    resultats.push(voiture2.getDescription());
}

for (let i = 0; i < 2; i++) {
    voiture2.tourner();
    resultats.push(voiture2.getDescription());
}

document.addEventListener("DOMContentLoaded", () => {
    const resultatsDiv = document.getElementById("resultats");
    resultats.forEach(resultat => {
        const p = document.createElement("p");
        p.textContent = resultat;
        resultatsDiv.appendChild(p);
    });
});

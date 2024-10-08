export class Voiture {
    constructor(marque, modele, vitesse) {
        this.marque = marque;
        this.modele = modele;
        this.vitesse = vitesse;
    }

    accelerer() {
        this.vitesse += 10;
    }

    tourner() {
        this.vitesse -= 5;
    }

    getDescription() {
        return `la voiture ${this.marque} ${this.modele} avance désormais à ${this.vitesse} km/h`;
    }
}
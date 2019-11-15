class PuntoMateriale {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    distazaOrigine() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    }
    fullInfo() {
        return `x= ${this.x}
y= ${this.y}
z= ${this.z}`;
    }
}
class Particella extends PuntoMateriale {
    constructor(x, y, z, mass, charge, spin) {
        super(x, y, z);
        this.mass = mass;
        this.charge = charge;
        this.spin = spin;
    }
    fullInfo() {
        return `${super.fullInfo()}
Mass: ${this.mass} kg
Charge: ${this.charge} C
Spin: ${this.spin} hbar`;
    }
}
class Elettrone extends Particella {
    constructor(x, y, z, mass, charge, spin) {
        super(x, y, z, mass, charge, spin);
        this.mass = 9.109 * Math.pow(10, (-31));
        this.charge = 1.609 * Math.pow(10, (-19));
        this.spin = 0.5;
    }
    getColore() {
        return this.cheColore;
    }
    setColore(colore) {
        this.cheColore = colore;
    }
}
let e = new Elettrone(1, 1, 1, 1, 1, 1);
console.log(e.fullInfo());
console.log(e.getColore());
e.setColore('blu');
console.log(e.getColore());
//# sourceMappingURL=interfacetest.js.map
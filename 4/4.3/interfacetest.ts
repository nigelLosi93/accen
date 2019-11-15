class PuntoMateriale {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    distazaOrigine(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    }
    fullInfo(): string {
        return `x= ${this.x}
y= ${this.y}
z= ${this.z}`;
    }
}

class Particella extends PuntoMateriale {
    mass: number;
    charge: number;
    spin: number;
    constructor(x: number, y: number, z: number, mass: number, charge: number, spin: number) {
        super(x, y, z);
        this.mass = mass;
        this.charge = charge;
        this.spin = spin;
    }
    fullInfo(): string {
        return `${super.fullInfo()}
Mass: ${this.mass} kg
Charge: ${this.charge} C
Spin: ${this.spin} hbar`;
    }
}

class Elettrone extends Particella implements Colore {
    mass: number = 9.109 * 10 ** (-31);
    charge: number = 1.609 * 10 ** (-19);
    spin: number = 0.5;
    cheColore: string;
    constructor(x: number, y: number, z: number, mass: number, charge: number, spin: number) {
        super(x, y, z, mass, charge, spin);
    }
    getColore() {
        return this.cheColore;
    }
    setColore(colore) {
        this.cheColore = colore;
    }
}

interface Colore {
    setColore(colore);
    getColore();
    cheColore: string;
}

let e = new Elettrone(1, 1, 1, 1, 1, 1);
console.log(e.fullInfo());
console.log(e.getColore());
e.setColore('blu');
console.log(e.getColore());
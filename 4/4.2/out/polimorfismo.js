class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    fullInfo() {
        return `Name: ${this.name}
Weight: ${this.weight}`;
    }
    eat() {
        return this.weight += 1;
    }
}
class Mammal extends Animal {
    constructor(name, weight, race, energy) {
        super(name, weight);
        this.race = race;
        this.weight = weight;
        this.energy = energy;
    }
    eat() {
        super.eat();
        return this.energy += 1;
    }
    fullInfo() {
        return `${super.fullInfo()}
Race: ${this.race}
Energy: ${this.energy}
`;
    }
}
class Reptilian extends Animal {
    constructor(name, weight, race, temperature) {
        super(name, weight);
        this.race = race;
        this.temperature = temperature;
    }
    eat() {
        super.eat();
        return this.temperature += 1;
    }
    fullInfo() {
        return `${super.fullInfo()}
Race: ${this.race}
Temperature: ${this.temperature}
`;
    }
}
class Horse extends Mammal {
    constructor(name, weight, race, energy, maxweight) {
        super(name, weight, race, energy);
        this.maxweight = maxweight;
    }
    transport(maxweight) {
        return `Max transport capacity: ${this.maxweight}`;
    }
    fullInfo() {
        return `${super.fullInfo()}
Max transport capacity: ${this.maxweight}
        `;
    }
}
let as = [new Mammal("Felix", 25, "fox", 100), new Reptilian("Snek", 5, "snake", 25),
    new Horse("Chester", 300, "horse", 5000, 150)];
let x = [1, 2, 3, 4];
function f(as) {
    as.forEach(a => { a.eat(); });
    as.forEach(a => { console.log(a.fullInfo()); });
}
f(as);
//# sourceMappingURL=polimorfismo.js.map
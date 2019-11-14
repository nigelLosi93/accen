class Animal {
    name: string;
    weight: number;
    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
    }
    fullInfo(): string {
        return `Name: ${this.name}
Weight: ${this.weight}`;
    }
    eat(): number {
        return this.weight += 1;
    }
}

class Mammal extends Animal {
    race: string;
    energy: number;
    constructor(name: string, weight: number, race: string, energy: number) {
        super(name, weight);
        this.race = race;
        this.weight = weight;
        this.energy = energy;

    }
    eat(): number {
        super.eat();
        return this.energy += 1;
    }
    fullInfo(): string {
        return `${super.fullInfo()}
Race: ${this.race}
Energy: ${this.energy}
`;
    }
}

class Reptilian extends Animal {
    race: string;
    temperature: number;
    constructor(name: string, weight: number, race: string, temperature: number) {
        super(name, weight);
        this.race = race;
        this.temperature = temperature;
    }
    eat(): number {
        super.eat();
        return this.temperature += 1;
    }
    fullInfo(): string {
        return `${super.fullInfo()}
Race: ${this.race}
Temperature: ${this.temperature}
`;
    }
}

class Horse extends Mammal implements Transporting {
    maxweight: number;
    constructor(name: string, weight: number, race: string, energy: number, maxweight: number) {
        super(name, weight, race, energy);
        this.maxweight = maxweight;
    }
    transport(maxweight: number): string {
        return `Max transport capacity: ${this.maxweight}`;
    }
    fullInfo():string{
        return `${super.fullInfo()}
Max transport capacity: ${this.maxweight}
        `;
    }
}

interface Transporting {
    maxweight: number;
    transport(maxweight): string;
}

let as: Animal[] = [new Mammal("Felix", 25, "fox", 100), new Reptilian("Snek", 5, "snake", 25),
new Horse("Chester",300,"horse",5000,150)];
let x = [1, 2, 3, 4];

function f(as: Animal[]) {
    as.forEach(a => { a.eat(); });
    as.forEach(a => { console.log(a.fullInfo()); });
}

f(as);
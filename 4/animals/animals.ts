class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    fullInfo(): string {
        return this.name;
    }
    brush(): string {
        return "I am brushing " + this.name;
    }
}

class Dog extends Animal {
    race: string;
    constructor(name: string, race: string) {
        super(name);
        this.race = race;
    }
    brush(): string {
        return super.brush() + " of race " + this.race;
    }
}

class Cat extends Animal {
    race: string;
    constructor(name: string, race: string) {
        super(name);
        this.race = race;
    }
    brush(): string {
        return super.brush() + " of race " + this.race;
    }
}

let animali = [new Dog('bau', 'labrador'), new Cat('miao', 'gatto')];
animali.forEach((x) => { console.log(x.brush()); });
let animale = new Animal("micio");
console.log(animale.brush());
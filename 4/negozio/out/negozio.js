class Animal {
    constructor(name) {
        this.name = name;
    }
    fullInfo() {
        return this.name;
    }
    brush() {
        return "I am brushing " + this.name;
    }
}
class Dog extends Animal {
    constructor(name, race) {
        super(name);
        this.race = race;
    }
    brush() {
        return "I am brushing a dog called " + this.name + " of race " + this.race;
    }
}
class Cat extends Animal {
    constructor(name, race) {
        super(name);
        this.race = race;
    }
    brush() {
        return "I am brushing a cat called " + this.name + " of race " + this.race;
    }
}
class Toy {
    constructor(name) {
        this.name = name;
    }
    fullInfo() {
        return this.name;
    }
    brush() {
        return "I am brushing " + this.name;
    }
}
class TeddyBear extends Toy {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    brush() {
        return "I am brushing a toy called " + this.name + " of color " + this.color;
    }
}
let giocattoli = [new TeddyBear("bobo", "brown"), new TeddyBear("balù", "black & white")];
let animaletti = [new Cat("micio", "gattino"), new Dog("rex", "labrador")];
giocattoli.forEach((x) => { console.log(x.brush()); });
animaletti.forEach((x) => { console.log(x.brush()); });
//# sourceMappingURL=negozio.js.map
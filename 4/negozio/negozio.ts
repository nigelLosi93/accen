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

class Dog extends Animal implements Brushable {
    race: string;
    constructor(name: string, race: string) {
        super(name);
        this.race = race;
    }
    brush(): string {
        return "I am brushing a dog called " + this.name + " of race " + this.race;
    }
}

class Cat extends Animal implements Brushable {
    race: string;
    constructor(name: string, race: string) {
        super(name);
        this.race = race;
    }
    brush(): string {
        return "I am brushing a cat called " + this.name + " of race " + this.race;
    }
}

class Toy {
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

class TeddyBear extends Toy implements Brushable {
    color: string;
    constructor(name: string, color: string) {
        super(name);
        this.color = color;
    }
    brush(): string {
        return "I am brushing a toy called " + this.name + " of color " + this.color;
    }
}

interface Brushable {
    brush(): string;
}

let giocattoli: TeddyBear[] = [new TeddyBear("bobo", "brown"), new TeddyBear("balù", "black & white")];
let animaletti: Animal[] = [new Cat("micio", "gattino"), new Dog("rex", "labrador")];

giocattoli.forEach((x) => { console.log(x.brush()); });
animaletti.forEach((x) => { console.log(x.brush()); });
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
        return super.brush() + " of race " + this.race;
    }
}
class Cat extends Animal {
    constructor(name, race) {
        super(name);
        this.race = race;
    }
    brush() {
        return super.brush() + " of race " + this.race;
    }
}
let animali = [new Dog('bau', 'labrador'), new Cat('miao', 'gatto')];
animali.forEach((x) => { console.log(x.brush()); });
let animale = new Animal("micio");
console.log(animale.brush());
//# sourceMappingURL=animals.js.map
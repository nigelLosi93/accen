class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    fullInfo() {
        return this.first + ' ' + this.last;
    }
    static merge(p1, p2) {
        return new Person(p1.first + p2.first, p1.last + p2.last);
    }
}
let p = new Person('Tom', 'Jones');
console.log(p.fullInfo());
let persons = [new Person('Beppe', 'Mercury'), new Person('Marco', 'Bella')];
persons.forEach((x) => { console.log(x); });
console.log(Person.merge(persons[0], persons[1]).fullInfo());
//# sourceMappingURL=person.js.map
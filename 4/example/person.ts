class Person {
    first: string;
    last: string;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
    fullInfo(): string {
        return this.first + ' ' + this.last;
    }

    static merge(p1: Person, p2: Person) {
        return new Person(p1.first + p2.first, p1.last + p2.last)
    }
}

let p: Person = new Person('Tom', 'Jones');

console.log(p.fullInfo());

let persons = [new Person('Beppe', 'Mercury'), new Person('Marco', 'Bella')];

persons.forEach((x) => { console.log(x); });

console.log(Person.merge(persons[0],persons[1]).fullInfo());
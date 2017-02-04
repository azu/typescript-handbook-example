class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`;
    }
}
const greeter = new Greeter("world");

class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}`);
    }
}
class Snake extends Animal {
    move(distanceInMeters = 5) {
        console.log("Slititititit");
        super.move(distanceInMeters);
    }
}

// public by default
// private
class Mimic {
    private name: string
}

// protected

class Person {
    protected name: string;
}
class Employee extends Person {
    hi() {
        return this.name;
    }
}
// readonly that is initialized in consturctor

class Octopus {
    readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
}
// static 

class AAA {
    static star = {
        symbol: "★"
    }
}

// constructor
class Greeters {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

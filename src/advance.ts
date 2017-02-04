// Intersection Types 
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class PersonA {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
    }
}
var jim = extend(new PersonA("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();


// union

function padLeft(value: string, padding: string | number) {
    // ...
}

let indentedString = padLeft("Hello world", 1);
// Type Guards and Differentiating Types
interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

let pet: any = null;

if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}

function isNumber(x: any): x is number {
    return typeof x === "number";
}
// nullable type
let s = "foo";
s = null; // --strictNullChecks error

// string literal type
type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
    }
}
// never
function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
        default: return assertNever(s); // error here if there are missing cases
    }
}

// index type
// 引数同士を使った型のパターン
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

function getPropery<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name];
}

const Sub = {
    name: "name"
};
const nameOfPerson = getPropery(Sub, "name");

function setState<T, K extends keyof T>(obj: T, props: Pick<T, K>) {
    for (let k in props) {
        obj[k] = props[k];
    }
}


// mapped type
// A Typed pluck: exploring TypeScript 2.1’s mapped types – Medium https://medium.com/@danvdk/a-typed-pluck-exploring-typescript-2-1s-mapped-types-c15f72bf4ca8#.oesgxhr0j
type Freeze<T> = {
    readonly [P in keyof T]: T[P];
}
interface OOOO {
    name: string
}
let ooFreezed: Freeze<OOOO>;

// Partial オプショなるを表現できる

type NullablePerson = {[P in keyof Person]: Person[P] | null }
type PartialPerson = {[P in keyof Person]?: Person[P]}
// Proxyを表現する型
type Proxy<T> = {
    get(): T;
    set(value: T): void;
}
type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
}

function identity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}
const identityOutput = identity<string>(["string"]);

// interface

interface GenericIndetifyFn {
    <T>(arg: T): T;
}
function iden<T>(arg: T): T {
    return arg;
}
let myIden: GenericIndetifyFn = iden;
// Generics Classes

class GenericNumber<T>{
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<Number>();
myGenericNumber.add(1, 2);
// extends
// Genericsに一部プロパティを持たせられる
interface Lengthwise {
    length: number;
}

function logginIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// Using Type Parameters in Generic Constraints
// Work?
// function copyFields<T extends U, U>(target: T, source: U): T {
//     for (let id in source) {
//         target[id] = source[id];
//     }
//     return target;
// }

// let x = { a: 1, b: 2, c: 3, d: 4 };
// copyFields(x, { b: 10, d: 20 }); // okay

function create<T>(c: { new (): T; }): T {
    return new c();
}

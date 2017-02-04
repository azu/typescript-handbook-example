
interface LabelledValue {
    label: string;
}
function printLabel(labelledObject: LabelledValue) {

}
let myObj = { size: 10, label: "test" };
printLabel(myObj);
// optional

interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): { color: string, area: number } {
    return {
        color: "Tet",
        area: 1
    };
}

let mySquare = createSquare({ color: "red" });

// readonly

interface Point {
    readonly x: number;
    readonly y: number;
}

let point1: Point = { x: 10, y: 10 };
// point1.x = 10;

// Readonly array
let array: number[] = [1, 2, 3, 4];
let readArray: ReadonlyArray<number> = array;

(readArray as number[])[0] = 1
/// excess Property check



interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare2(config: SquareConfig): any {
    //
}
// castすることで知らないプロパティも居される
let mySquare2 = createSquare({ colour: "red", width: 100 } as SquareConfig);

interface SquareConfigWith {
    color?: string;
    width?: number;
    [propName: string]: any;
}
// accept ttt 
let squareOptions = { ttt: "red", width: 100 };
let mySquare3 = createSquare(squareOptions);


/// function type

interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
// indexable Types

interface StringArray {
    [index: number]: string;
    length: number;
    name?: string;
}
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArrayString: StringArray = ["Alice", "Bob"];

// class type
interface ClockInterface {
    currentTime: Date;
}
interface ClockContructor {
    new (hour: number, minutes: number): ClockInterface;
}
class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) {

    }
}

// extends
// interface Square extends Shape {
//     sideLength: number;
// }
// hybrid type
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
function getCounter(): Counter {
    let counter = <Counter>function (start: number) {

    };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}


let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;


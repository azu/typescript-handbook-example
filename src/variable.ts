function f(x: string) {
    var x: string;
    var x: string;
    if (true) {
        var x: string;
    }
}

f("string");

let input: [number, number] = [1, 2];
let [first, second] = input;
console.log(first);

[first, second] = [second, first];

function fD([first, second]: [number, number]) {
    console.log(first);
}
fD(input);
// object

let o = {
    a: "a",
    b: 12,
    c: "c"
};
let { a, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;

let { a: ra, b: rb }: { a: string, b: number } = o;
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}

keepWholeObject(o);


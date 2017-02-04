interface MyAdd {
    (x: number, y: number): number;
}
const myAdd: MyAdd = function (x: number, y: number): number {
    return x + y;
}
/// optional

function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return `${firstName} ${lastName}`;
    } else {
        return firstName;
    }
}
let resultName = buildName("test");
let resultName2 = buildName("test", "aad");

// rest parameter
function template(string: string, ...args: string[]) {

}
template("<p>${test}</p>", "test");

// this
function fThis(this: void, arg:string){

}
fThis("test")

interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    info: string;
    onClick(this: Handler, event: Event){
        this.info = event.type;
    }
}
const handler = new Handler()
// overload
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x: any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

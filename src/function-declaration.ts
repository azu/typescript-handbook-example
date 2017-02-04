type C = { a: string, b?: number };
function fnC({a, b}: C): void {

}
fnC({
    a: ""
});

// spread

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
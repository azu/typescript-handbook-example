const getClassNameSymbol: symbol = Symbol();

class CSymbol {
    [getClassNameSymbol](): string {
        return "C";
    }
}

let cInstanceL: CSymbol = new CSymbol();
cInstanceL[getClassNameSymbol](); // "C"


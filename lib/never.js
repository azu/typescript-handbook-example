"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("test");
}
function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.width * s.height;
        case "circle": return Math.PI * s.radius * s.radius;
        default: const _exhaustiveCheck = s;
    }
}
//# sourceMappingURL=never.js.map
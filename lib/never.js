function error(message) {
    throw new Error(message);
}
function fail() {
    return error("test");
}
var s = fail();
1;
//# sourceMappingURL=never.js.map
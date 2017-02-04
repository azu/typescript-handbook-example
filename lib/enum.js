var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c1 = Color.Green;
var ColorTwo;
(function (ColorTwo) {
    ColorTwo[ColorTwo["Red"] = 1] = "Red";
    ColorTwo[ColorTwo["Green"] = 2] = "Green";
    ColorTwo[ColorTwo["Blue"] = 3] = "Blue";
})(ColorTwo || (ColorTwo = {}));
;
var c2 = ColorTwo.Green;
var colorName = Color[2];
//# sourceMappingURL=enum.js.map
"use strict";
exports.__esModule = true;
var Shuffle = /** @class */ (function () {
    function Shuffle() {
    }
    Shuffle.prototype.fisherYates = function (a) {
        var _a;
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [
                a[j],
                a[i]
            ], a[i] = _a[0], a[j] = _a[1];
        }
        return a;
    };
    return Shuffle;
}());
exports["default"] = Shuffle;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewWindow = void 0;
var ViewWindow = /** @class */ (function () {
    function ViewWindow(_a) {
        var windowHeight = _a.windowHeight, listHeight = _a.listHeight, windowPosition = _a.windowPosition, itemSize = _a.itemSize;
        this.windowHeight = windowHeight;
        this.windowPosition = windowPosition;
        this.listHeight = listHeight;
        this.itemSize = itemSize;
    }
    ViewWindow.prototype.getWindowRange = function () {
        return [this.windowPosition, this.windowPosition + this.windowHeight];
    };
    ViewWindow.prototype.getStartIndex = function () {
        return Math.floor(this.windowPosition / this.itemSize + 1) - 1;
    };
    ViewWindow.prototype.getItemsInView = function () {
        return Math.ceil(this.windowHeight / this.itemSize);
    };
    ViewWindow.prototype.getItemIndexRange = function () {
        var start = this.getStartIndex();
        var end = start + this.getItemsInView() - 1;
        return [start, end];
    };
    return ViewWindow;
}());
exports.ViewWindow = ViewWindow;
//# sourceMappingURL=ViewWindow.js.map
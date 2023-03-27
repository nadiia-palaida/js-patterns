var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DomEl = /** @class */ (function () {
    function DomEl() {
    }
    DomEl.prototype.setStyle = function (style) {
        this.style = style;
    };
    DomEl.prototype.getInfo = function () {
        console.log("Element's type is ".concat(this.type));
        this.style.getInfo();
    };
    return DomEl;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'button';
        return _this;
    }
    return Button;
}(DomEl));
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'input';
        return _this;
    }
    return Input;
}(DomEl));
var TransparentStyle = /** @class */ (function () {
    function TransparentStyle() {
        this.background = 'transparent';
        this.border = '1px solid black';
        this.borderRadius = 8;
    }
    TransparentStyle.prototype.getInfo = function () {
        console.log("This is transparent style with ".concat(this.background, " background, ").concat(this.border, " border, ").concat(this.borderRadius, " border radius"));
    };
    return TransparentStyle;
}());
var ColorBackgroundStyle = /** @class */ (function () {
    function ColorBackgroundStyle() {
        this.background = 'white';
        this.border = 'none';
        this.borderRadius = 8;
    }
    ColorBackgroundStyle.prototype.getInfo = function () {
        console.log("This is color background style with ".concat(this.background, " background, ").concat(this.border, " border, ").concat(this.borderRadius, " border radius"));
    };
    return ColorBackgroundStyle;
}());
var btn1 = new Button();
btn1.setStyle(new TransparentStyle());
btn1.getInfo();
var input1 = new Input();
input1.setStyle(new ColorBackgroundStyle());
input1.getInfo();

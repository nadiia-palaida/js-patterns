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
var Button = /** @class */ (function () {
    function Button(height, background, border, color, borderRadius) {
        if (height === void 0) { height = 0; }
        if (background === void 0) { background = 'none'; }
        if (border === void 0) { border = 'none'; }
        if (color === void 0) { color = 'black'; }
        if (borderRadius === void 0) { borderRadius = 0; }
        this.height = height;
        this.background = background;
        this.border = border;
        this.color = color;
        this.borderRadius = borderRadius;
    }
    return Button;
}());
var ButtonEmpty = /** @class */ (function (_super) {
    __extends(ButtonEmpty, _super);
    function ButtonEmpty() {
        return _super.call(this, 50, 'transparent', '1px solid black', 'black', 8) || this;
    }
    return ButtonEmpty;
}(Button));
var ButtonFull = /** @class */ (function (_super) {
    __extends(ButtonFull, _super);
    function ButtonFull() {
        return _super.call(this, 50, '#fff', 'none', '#000', 8) || this;
    }
    return ButtonFull;
}(Button));
var ButtonDanger = /** @class */ (function (_super) {
    __extends(ButtonDanger, _super);
    function ButtonDanger() {
        return _super.call(this, 75, 'red', '2 px solid red', "#fff", 0) || this;
    }
    return ButtonDanger;
}(Button));
var BtnTypes;
(function (BtnTypes) {
    BtnTypes["TYPE_EMPTY"] = "empty";
    BtnTypes["TYPE_FULL"] = "full";
    BtnTypes["TYPE_DANGER"] = "danger";
})(BtnTypes || (BtnTypes = {}));
var ButtonFactory = /** @class */ (function () {
    function ButtonFactory() {
    }
    ButtonFactory.prototype.create = function (type) {
        if (type === BtnTypes.TYPE_EMPTY) {
            return new ButtonEmpty();
        }
        else if (type === BtnTypes.TYPE_FULL) {
            return new ButtonFull();
        }
        else if (type === BtnTypes.TYPE_DANGER) {
            return new ButtonDanger();
        }
    };
    return ButtonFactory;
}());
var btnFactory = new ButtonFactory();
var btn1 = btnFactory.create('empty');
var btn2 = btnFactory.create('full');
var btn3 = btnFactory.create('danger');
console.log('btn1', btn1);
console.log('btn2', btn2);
console.log('btn3', btn3);

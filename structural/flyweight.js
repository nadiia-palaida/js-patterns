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
        this.createdButtons = {};
    }
    ButtonFactory.prototype.create = function (type) {
        if (type === BtnTypes.TYPE_EMPTY) {
            if (!this.checkExist(type)) {
                return this.createdButtons[type] = new ButtonEmpty();
            }
            return this.checkExist(type);
        }
        else if (type === BtnTypes.TYPE_FULL) {
            if (!this.checkExist(type)) {
                return this.createdButtons[type] = new ButtonFull();
            }
            return this.checkExist(type);
        }
        else if (type === BtnTypes.TYPE_DANGER) {
            if (!this.checkExist(type)) {
                return this.createdButtons[type] = new ButtonDanger();
            }
            return this.checkExist(type);
        }
    };
    ButtonFactory.prototype.checkExist = function (type) {
        if (this.createdButtons[type]) {
            return this.createdButtons[type];
        }
    };
    ButtonFactory.prototype.getCreatedButtons = function () {
        console.table(this.createdButtons);
    };
    return ButtonFactory;
}());
var buttonFactory = new ButtonFactory();
var emptyBtn1 = buttonFactory.create('empty');
var fullBtn1 = buttonFactory.create('full');
var dangerBtn1 = buttonFactory.create('danger');
var dangerBtn2 = buttonFactory.create('danger');
buttonFactory.getCreatedButtons();

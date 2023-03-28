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
    function Button() {
        this.styles = [];
    }
    return Button;
}());
var SubmitButton = /** @class */ (function (_super) {
    __extends(SubmitButton, _super);
    function SubmitButton(text) {
        var _this = _super.call(this) || this;
        _this.text = text;
        return _this;
    }
    SubmitButton.prototype.handle = function () {
        return "You click on button ".concat(this.text, " ");
    };
    return SubmitButton;
}(Button));
var StylesButton = /** @class */ (function (_super) {
    __extends(StylesButton, _super);
    function StylesButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StylesButton;
}(Button));
var ColorBackgroundDecorator = /** @class */ (function (_super) {
    __extends(ColorBackgroundDecorator, _super);
    function ColorBackgroundDecorator(decoratedButton) {
        var _this = _super.call(this) || this;
        _this.decoratedButton = decoratedButton;
        decoratedButton.styles.push('background: orange;');
        return _this;
    }
    ColorBackgroundDecorator.prototype.handle = function () {
        return this.decoratedButton.handle() + 'with color background';
    };
    return ColorBackgroundDecorator;
}(StylesButton));
var BorderDecorator = /** @class */ (function (_super) {
    __extends(BorderDecorator, _super);
    function BorderDecorator(decoratedButton) {
        var _this = _super.call(this) || this;
        _this.decoratedButton = decoratedButton;
        decoratedButton.styles.push('border: 1px solid white;');
        return _this;
    }
    BorderDecorator.prototype.handle = function () {
        return this.decoratedButton.handle() + ', border';
    };
    return BorderDecorator;
}(StylesButton));
var btn1 = new SubmitButton('Send');
btn1 = new ColorBackgroundDecorator(btn1);
btn1 = new BorderDecorator(btn1);
console.log(btn1.handle());

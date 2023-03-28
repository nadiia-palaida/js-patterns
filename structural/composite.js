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
        this.domElements = [];
    }
    DomEl.prototype.addDomEl = function (domEl) {
        this.domElements.push(domEl);
    };
    DomEl.prototype.showAllElements = function () {
        return this.domElements;
    };
    return DomEl;
}());
var ElementTypes;
(function (ElementTypes) {
    ElementTypes["Page"] = "PAGE";
    ElementTypes["Form"] = "FORM";
    ElementTypes["Button"] = "BUTTON";
    ElementTypes["Input"] = "INPUT";
    ElementTypes["Select"] = "SELECT";
})(ElementTypes || (ElementTypes = {}));
var FormPage = /** @class */ (function (_super) {
    __extends(FormPage, _super);
    function FormPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ElementTypes.Page;
        return _this;
    }
    FormPage.prototype.show = function () {
        return this.showAllElements();
    };
    return FormPage;
}(DomEl));
var FormEl = /** @class */ (function (_super) {
    __extends(FormEl, _super);
    function FormEl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ElementTypes.Form;
        return _this;
    }
    FormEl.prototype.changeAction = function (action) {
        this.action = action;
    };
    FormEl.prototype.show = function () {
        var result = this.showAllElements();
        result.push(this);
        return result;
    };
    return FormEl;
}(DomEl));
var InputEl = /** @class */ (function (_super) {
    __extends(InputEl, _super);
    function InputEl(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.type = ElementTypes.Input;
        return _this;
    }
    InputEl.prototype.show = function () {
        return this;
    };
    return InputEl;
}(DomEl));
var SelectEl = /** @class */ (function (_super) {
    __extends(SelectEl, _super);
    function SelectEl(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.type = ElementTypes.Select;
        return _this;
    }
    SelectEl.prototype.show = function () {
        return this;
    };
    return SelectEl;
}(DomEl));
var ButtonEl = /** @class */ (function (_super) {
    __extends(ButtonEl, _super);
    function ButtonEl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ElementTypes.Button;
        return _this;
    }
    ButtonEl.prototype.show = function () {
        return this;
    };
    return ButtonEl;
}(DomEl));
var formPage1 = new FormPage();
formPage1.addDomEl(new ButtonEl());
var form1 = new FormEl();
form1.changeAction('send');
formPage1.addDomEl(form1);
form1.addDomEl(new InputEl('email'));
form1.addDomEl(new InputEl('phone'));
form1.addDomEl(new ButtonEl());
var form2 = new FormEl();
form2.changeAction('getDiscount');
formPage1.addDomEl(form2);
form2.addDomEl(new InputEl('discount'));
form2.addDomEl(new SelectEl('discountType'));
console.log(formPage1.show());

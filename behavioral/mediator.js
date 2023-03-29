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
var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent.prototype.setOrderFormMediator = function (mediator) {
        this.mediator = mediator;
    };
    return FormComponent;
}());
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Input.prototype.setValue = function (value) {
        this.value = value;
        console.log("Set input value ".concat(value));
        this.mediator.notify(this, 'setInputValue');
    };
    return Input;
}(FormComponent));
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Select.prototype.setOptions = function (options) {
        this.options = options;
    };
    Select.prototype.setValue = function (value) {
        this.value = value;
        console.log('Set select value');
        this.mediator.notify(this, 'setSelectValue');
    };
    return Select;
}(FormComponent));
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Button.prototype.send = function (data) {
        this.mediator.notify(this, 'sendFormData');
    };
    return Button;
}(FormComponent));
var OrderFormMediator = /** @class */ (function () {
    function OrderFormMediator(input, select, button) {
        this.input = input;
        this.select = select;
        this.button = button;
        this.input.setOrderFormMediator(this);
        this.select.setOrderFormMediator(this);
        this.button.setOrderFormMediator(this);
    }
    OrderFormMediator.prototype.notify = function (sender, event) {
        if (event === 'setInputValue') {
            if (this.input.value === 'pizza') {
                this.select.setOptions(['Havayska Pizza', 'Napoletana Pizza', 'Cheese Pizza']);
            }
            else {
                this.select.setOptions(['Havayska Pizza', 'Napoletana Pizza', 'Cheese Pizza', 'Philadelphia Sushi', 'Cheese Sushi']);
            }
        }
        else if (event === 'setSelectValue') {
            if (this.input.value && this.select.value) {
                var data = [this.input.value, this.select.value];
                this.button.send(data);
                console.log('Form data send from mediator');
            }
        }
    };
    return OrderFormMediator;
}());
var typeProductInput = new Input('type-product');
var productSelect = new Select('product');
var orderBtn = new Button('order');
var mediator = new OrderFormMediator(typeProductInput, productSelect, orderBtn);
console.log('Client triggers operation setInputValue.');
typeProductInput.setValue('pizza');
console.log('============');
console.log('Client triggers operation setSelectValue.');
productSelect.setValue('Napoletana Pizza');

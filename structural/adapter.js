var Checkbox = /** @class */ (function () {
    function Checkbox() {
        this.value = false;
    }
    Checkbox.prototype.onChange = function () {
        this.value = !this.value;
    };
    Checkbox.prototype.send = function () {
        console.log("Checkbox value added to data ".concat(this.value));
    };
    return Checkbox;
}());
var Input = /** @class */ (function () {
    function Input() {
        this.value = false;
    }
    Input.prototype.onInput = function () {
        this.value = !this.value;
    };
    Input.prototype.send = function () {
        console.log("Input value added to data ".concat(this.value));
    };
    return Input;
}());
var InputToChangeAdapter = /** @class */ (function () {
    function InputToChangeAdapter(input) {
        this.input = input;
    }
    InputToChangeAdapter.prototype.onChange = function () {
        this.input.onInput();
    };
    InputToChangeAdapter.prototype.send = function () {
        this.input.send();
    };
    return InputToChangeAdapter;
}());
var input1 = new Input();
var changeEventAdapter = new InputToChangeAdapter(input1);
input1.send();
changeEventAdapter.onChange();
input1.send();

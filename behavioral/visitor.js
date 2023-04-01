var InputEl = /** @class */ (function () {
    function InputEl() {
    }
    InputEl.prototype.accept = function (visitor) {
        visitor.validateVisitInput(this);
    };
    return InputEl;
}());
var SelectEl = /** @class */ (function () {
    function SelectEl() {
    }
    SelectEl.prototype.accept = function (visitor) {
        visitor.validateVisitSelect(this);
    };
    return SelectEl;
}());
var ValidateVisitor = /** @class */ (function () {
    function ValidateVisitor() {
    }
    ValidateVisitor.prototype.validateVisitInput = function (element) {
        console.log('Validate visit input element');
    };
    ValidateVisitor.prototype.validateVisitSelect = function (element) {
        console.log('Validate visit select element');
    };
    return ValidateVisitor;
}());
var input1 = new InputEl();
var select1 = new SelectEl();
var visitor1 = new ValidateVisitor();
input1.accept(visitor1);
select1.accept(visitor1);

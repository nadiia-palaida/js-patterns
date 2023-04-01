var Validator = /** @class */ (function () {
    function Validator(validateType) {
        this.validateType = validateType;
    }
    Validator.prototype.setValidateType = function (validateType) {
        this.validateType = validateType;
    };
    Validator.prototype.doValidation = function (data) {
        this.validateType.validate(data);
    };
    return Validator;
}());
var RequiredValidation = /** @class */ (function () {
    function RequiredValidation() {
    }
    RequiredValidation.prototype.validate = function (data) {
        if (data) {
            console.log('data exist');
        }
        else {
            console.log('data is empty');
        }
    };
    return RequiredValidation;
}());
var NumberValidation = /** @class */ (function () {
    function NumberValidation() {
    }
    NumberValidation.prototype.validate = function (data) {
        if (typeof +data === 'number') {
            console.log('data is number');
        }
        else {
            console.log('data isn`t number');
        }
    };
    return NumberValidation;
}());
var validator1 = new Validator(new RequiredValidation());
validator1.doValidation('some text');
var validator2 = new Validator(new NumberValidation());
validator2.doValidation('123');

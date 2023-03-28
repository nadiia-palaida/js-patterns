var SubmitButton = /** @class */ (function () {
    function SubmitButton(data) {
        this.data = data;
    }
    SubmitButton.prototype.send = function () {
        console.log('Send form');
    };
    return SubmitButton;
}());
var Validator = /** @class */ (function () {
    function Validator(submitBtn) {
        this.submitBtn = submitBtn;
    }
    Validator.prototype.send = function () {
        if (this.validate(this.submitBtn.data)) {
            console.log('Validate is successful');
            this.submitBtn.send();
        }
        else {
            console.log('Validate is faulty');
        }
    };
    Validator.prototype.validate = function (data) {
        return !!Object.keys(data).length;
    };
    return Validator;
}());
var submitBtn1 = new Validator(new SubmitButton({ name: 'Example name', email: 'Example email' }));
submitBtn1.send();
var submitBtn2 = new Validator(new SubmitButton({}));
submitBtn2.send();

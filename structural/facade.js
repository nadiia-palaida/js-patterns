var Submitter = /** @class */ (function () {
    function Submitter() {
    }
    Submitter.prototype.getDataForm = function () {
        console.log('Get data from form elements');
    };
    Submitter.prototype.send = function () {
        console.log('Send data');
    };
    return Submitter;
}());
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.prototype.setRules = function () {
        console.log('set validate rules');
    };
    Validator.prototype.validate = function () {
        console.log('Validate all data');
    };
    return Validator;
}());
var SubmitFacade = /** @class */ (function () {
    function SubmitFacade(submitter, validator) {
        this.submitter = submitter;
        this.validator = validator;
    }
    SubmitFacade.prototype.submit = function () {
        this.submitter.getDataForm();
        this.validator.setRules();
        this.validator.validate();
        this.submitter.send();
    };
    return SubmitFacade;
}());
var validator = new Validator();
var submitter = new Submitter();
var buttonSubmit = new SubmitFacade(submitter, validator);
buttonSubmit.submit();

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
var SubmitterForm = /** @class */ (function () {
    function SubmitterForm() {
    }
    SubmitterForm.prototype.submit = function (data) {
        this.getData(data);
        this.validateData(this.data);
        this.sendData(this.data);
    };
    SubmitterForm.prototype.getData = function (data) {
        this.data = data;
    };
    return SubmitterForm;
}());
var RegistrationSubmitterForm = /** @class */ (function (_super) {
    __extends(RegistrationSubmitterForm, _super);
    function RegistrationSubmitterForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegistrationSubmitterForm.prototype.validateData = function (data) {
        console.log('validate data for registration form');
    };
    RegistrationSubmitterForm.prototype.sendData = function (data) {
        console.log('do some actions for registration data');
        console.log('send data to registration request');
    };
    return RegistrationSubmitterForm;
}(SubmitterForm));
var DiscountSubmitterForm = /** @class */ (function (_super) {
    __extends(DiscountSubmitterForm, _super);
    function DiscountSubmitterForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiscountSubmitterForm.prototype.validateData = function (data) {
        console.log('validate data for discount form');
    };
    DiscountSubmitterForm.prototype.sendData = function (data) {
        console.log('do some actions for discount data');
        console.log('send data to discount request');
    };
    return DiscountSubmitterForm;
}(SubmitterForm));
var form1 = new RegistrationSubmitterForm();
var form2 = new DiscountSubmitterForm();
form1.submit('some registration data');
console.log('=====================================================');
form2.submit('discount data');

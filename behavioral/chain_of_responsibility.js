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
var AbstractSubmitter = /** @class */ (function () {
    function AbstractSubmitter() {
    }
    AbstractSubmitter.prototype.next = function (submitter) {
        this.nextSubmitter = submitter;
        return submitter;
    };
    AbstractSubmitter.prototype.handle = function (data) {
        if (this.nextSubmitter) {
            return this.nextSubmitter.handle(data);
        }
        else {
            return;
        }
    };
    return AbstractSubmitter;
}());
var GetFormDataSubmitter = /** @class */ (function (_super) {
    __extends(GetFormDataSubmitter, _super);
    function GetFormDataSubmitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetFormDataSubmitter.prototype.handle = function (data) {
        console.log('GetFormDataSubmitter');
        if (data.hasOwnProperty('user')) {
            return _super.prototype.handle.call(this, data);
        }
        return 'Form data doesn`t exist';
    };
    return GetFormDataSubmitter;
}(AbstractSubmitter));
var ValidateSubmitter = /** @class */ (function (_super) {
    __extends(ValidateSubmitter, _super);
    function ValidateSubmitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValidateSubmitter.prototype.handle = function (data) {
        console.log('ValidateSubmitter');
        if (!!Object.keys(data).length) {
            return _super.prototype.handle.call(this, data);
        }
        return 'Form data is empty';
    };
    return ValidateSubmitter;
}(AbstractSubmitter));
var SendSubmitter = /** @class */ (function (_super) {
    __extends(SendSubmitter, _super);
    function SendSubmitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SendSubmitter.prototype.handle = function (data) {
        console.log('SendSubmitter');
        return 'Send form data';
    };
    return SendSubmitter;
}(AbstractSubmitter));
var getData = new GetFormDataSubmitter();
var validate = new ValidateSubmitter();
var send = new SendSubmitter();
getData.next(validate).next(send);
console.log(getData.handle({}));
console.log('================================================================');
console.log(getData.handle({ user: 'Ivan', email: 'example@ema.vf' }));

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
var FormsData = /** @class */ (function () {
    function FormsData(state) {
        this.setState(state);
    }
    FormsData.prototype.setState = function (state) {
        this.state = state;
        this.state.setContextFormData(this);
    };
    FormsData.prototype.getState = function () {
        return this.state;
    };
    FormsData.prototype.actionRequest = function () {
        this.state.action();
    };
    return FormsData;
}());
var FormState = /** @class */ (function () {
    function FormState() {
    }
    FormState.prototype.setContextFormData = function (context) {
        this.contextFormData = context;
    };
    return FormState;
}());
var GetData = /** @class */ (function (_super) {
    __extends(GetData, _super);
    function GetData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'getData';
        return _this;
    }
    GetData.prototype.action = function () {
        console.log('STEP: get form data');
        this.contextFormData.setState(new ValidationData());
    };
    return GetData;
}(FormState));
var ValidationData = /** @class */ (function (_super) {
    __extends(ValidationData, _super);
    function ValidationData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'ValidationData';
        return _this;
    }
    ValidationData.prototype.action = function () {
        console.log('STEP: validation form data');
        this.contextFormData.setState(new SendingData());
    };
    return ValidationData;
}(FormState));
var SendingData = /** @class */ (function (_super) {
    __extends(SendingData, _super);
    function SendingData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'SendingData';
        return _this;
    }
    SendingData.prototype.action = function () {
        console.log('STEP: sending form data');
        this.contextFormData.setState(new GetData());
    };
    return SendingData;
}(FormState));
var formsData = new FormsData(new GetData());
console.log('formsData state', formsData.getState());
formsData.actionRequest();
console.log('formsData state', formsData.getState());
formsData.actionRequest();
console.log('formsData state', formsData.getState());
formsData.actionRequest();
console.log('formsData state', formsData.getState());

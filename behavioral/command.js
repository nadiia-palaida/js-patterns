var OrderForm = /** @class */ (function () {
    function OrderForm() {
    }
    return OrderForm;
}());
var OrderFormService = /** @class */ (function () {
    function OrderFormService() {
    }
    OrderFormService.prototype.validateData = function (data) {
        console.log("Validate form data");
        console.log(data);
    };
    OrderFormService.prototype.sendFormData = function (data) {
        console.log("Send form data");
        console.log(data);
    };
    OrderFormService.prototype.resetData = function () {
        console.log('Clear all forms fields');
    };
    OrderFormService.prototype.cancelSend = function () {
        console.log('Cancel sending data');
    };
    return OrderFormService;
}());
var SendFormDataCommand = /** @class */ (function () {
    function SendFormDataCommand(data, receiver) {
        this.data = data;
        this.receiver = receiver;
    }
    SendFormDataCommand.prototype.execute = function () {
        this.receiver.validateData(this.data);
        this.receiver.sendFormData(this.data);
    };
    return SendFormDataCommand;
}());
var ResetCommand = /** @class */ (function () {
    function ResetCommand(receiver) {
        this.receiver = receiver;
    }
    ResetCommand.prototype.execute = function () {
        this.receiver.resetData();
    };
    return ResetCommand;
}());
var CancelCommand = /** @class */ (function () {
    function CancelCommand(receiver) {
        this.receiver = receiver;
    }
    CancelCommand.prototype.execute = function () {
        this.receiver.cancelSend();
    };
    return CancelCommand;
}());
var FormController = /** @class */ (function () {
    function FormController() {
    }
    FormController.prototype.addReceiver = function (receiver) {
        this.receiver = receiver;
    };
    FormController.prototype.run = function () {
        var sendDataCommand = new SendFormDataCommand({ name: 'Example' }, this.receiver);
        var resetDataCommand = new ResetCommand(this.receiver);
        sendDataCommand.execute();
        resetDataCommand.execute();
    };
    return FormController;
}());
var controller = new FormController();
controller.addReceiver(new OrderFormService());
controller.run();

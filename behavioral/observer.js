var FormsData = /** @class */ (function () {
    function FormsData(name, email) {
    }
    return FormsData;
}());
var FormSubmitter = /** @class */ (function () {
    function FormSubmitter() {
        this.observers = [];
    }
    FormSubmitter.prototype.attach = function (observer) {
        if (this.observers.indexOf(observer) !== -1) {
            return;
        }
        this.observers.push(observer);
    };
    FormSubmitter.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex == -1) {
            return;
        }
        this.observers.splice(observerIndex, 1);
    };
    FormSubmitter.prototype.notify = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    return FormSubmitter;
}());
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.prototype.update = function (subject) {
        console.log('get updates in Validator');
        console.log('object: ', subject.value);
    };
    return Validator;
}());
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.prototype.update = function (subject) {
        console.log('get updates in Router');
        console.log('object: ', subject.value);
    };
    return Router;
}());
var subject = new FormSubmitter();
subject.value = new FormsData('Example name', 'ex@email.fdefr');
var subscriptor1 = new Validator();
var subscriptor2 = new Router();
subject.attach(subscriptor1);
subject.attach(subscriptor2);
subject.notify();
subject.detach(subscriptor1);
subject.notify();

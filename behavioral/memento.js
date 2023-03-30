var Memento = /** @class */ (function () {
    function Memento(value) {
        this.value = value;
    }
    return Memento;
}());
var Originator = /** @class */ (function () {
    function Originator() {
    }
    Originator.prototype.save = function (value) {
        return new Memento(value);
    };
    Originator.prototype.restore = function (memento) {
        return memento.value;
    };
    return Originator;
}());
var Caretaker = /** @class */ (function () {
    function Caretaker() {
        this.values = [];
    }
    Caretaker.prototype.addMemento = function (memento) {
        this.values.push(memento);
    };
    Caretaker.prototype.getMemento = function (index) {
        return this.values[index];
    };
    return Caretaker;
}());
var careTaker = new Caretaker();
var originator = new Originator();
careTaker.addMemento(originator.save({ name: 'Example name' }));
careTaker.addMemento(originator.save({ name: 'Example2 name' }));
careTaker.addMemento(originator.save({ name: 'Example3 name' }));
console.log(originator.restore(careTaker.getMemento(0)));

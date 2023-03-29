var ButtonsIterator = /** @class */ (function () {
    function ButtonsIterator(elements, keys, index) {
        if (keys === void 0) { keys = Object.keys(elements); }
        if (index === void 0) { index = 0; }
        this.elements = elements;
        this.keys = keys;
        this.index = index;
    }
    ButtonsIterator.prototype.getNext = function () {
        return this.elements[this.keys[this.index++]];
    };
    ButtonsIterator.prototype.hasMore = function () {
        return this.index < this.keys.length;
    };
    return ButtonsIterator;
}());
var ButtonsCollection = /** @class */ (function () {
    function ButtonsCollection() {
    }
    ButtonsCollection.prototype.createCollection = function (collection) {
        this.collection = collection;
    };
    return ButtonsCollection;
}());
var buttonCollection1 = new ButtonsCollection();
buttonCollection1.createCollection([
    { id: 1, type: 'button', eventName: 'openModal' },
    { id: 2, type: 'input', eventName: 'submit' },
    { id: 3, type: 'button', eventName: 'closeModal' },
]);
var buttonsIterator1 = new ButtonsIterator(buttonCollection1.collection);
while (buttonsIterator1.hasMore()) {
    console.log(buttonsIterator1.getNext());
}

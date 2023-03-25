var Store = /** @class */ (function () {
    function Store() {
        this.data = [];
    }
    Store.getStore = function () {
        if (!Store.store) {
            Store.store = new Store();
        }
        return Store.store;
    };
    Store.prototype.setData = function (data) {
        this.data.push(data);
    };
    Store.prototype.getData = function () {
        return this.data;
    };
    return Store;
}());
var store1 = Store.getStore();
var store2 = Store.getStore();
if (store1 === store2) {
    console.log('store1 is equals store2');
}
store1.setData({
    user: {
        name: 'Example',
        age: 24
    }
});
store2.setData({
    news: {
        title: 'Example title',
        date: '31.01.2019'
    }
});
console.log('ONE STORE: ', store1.getData());

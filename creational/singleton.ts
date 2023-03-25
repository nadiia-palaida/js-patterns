class Store {
    private static store: Store;
    private data: object[] = []

    private constructor() {
    }

    public static getStore(): Store {
        if (!Store.store) {
            Store.store = new Store()
        }
        return Store.store
    }

    setData(data: object): void {
        this.data.push(data)
    }

    getData(): object[] {
        return this.data
    }
}

const store1 = Store.getStore()
const store2 = Store.getStore()

if (store1 === store2) {
    console.log('store1 is equals store2')
}

store1.setData({
    user: {
        name: 'Example',
        age: 24
    }
})

store2.setData({
    news: {
        title: 'Example title',
        date: '31.01.2019'
    }
})

console.log('ONE STORE: ', store1.getData())

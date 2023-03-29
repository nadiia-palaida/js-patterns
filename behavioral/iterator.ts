interface IIterator {
    getNext()
    hasMore()
}

class ButtonsIterator implements IIterator {
   constructor(private elements: object[], private keys: any = Object.keys(elements), private index: number = 0) {
   }

   getNext() {
        return this.elements[this.keys[this.index++]]
   }

    hasMore() {
       return this.index < this.keys.length
    }
}

interface ICollection {
    createCollection(collection: any)
}

class ButtonsCollection implements ICollection {
    collection: object[]

    createCollection(collection: object[]) {
        this.collection = collection
    }
}

const buttonCollection1 = new ButtonsCollection()
buttonCollection1.createCollection([
    {id: 1, type: 'button', eventName: 'openModal'},
    {id: 2, type: 'input', eventName: 'submit'},
    {id: 3, type: 'button', eventName: 'closeModal'},
])

const buttonsIterator1 = new ButtonsIterator(buttonCollection1.collection)

while(buttonsIterator1.hasMore()) {
    console.log(buttonsIterator1.getNext())
}



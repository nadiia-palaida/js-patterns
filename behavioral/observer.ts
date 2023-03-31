interface Observer {
    update(subject: Subject): void
}

interface Subject {
    attach(observer: Observer): void
    detach(observer: Observer): void
    notify(): void
}

class FormsData {
    constructor(name: string, email: string) {
    }
}

class FormSubmitter implements Subject{
    private observers: Observer[] = []
    public value: FormsData

    attach(observer: Observer): void {
        if(this.observers.indexOf(observer) !== -1) {
            return
        }
        this.observers.push(observer)
    }

    detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer)
        if(observerIndex == -1) {
            return
        }
        this.observers.splice(observerIndex, 1)
    }

    notify(): void {
        for (const observer of this.observers) {
            observer.update(this)
        }
    }
}

class Validator implements Observer {
    update(subject: Subject): void {
        console.log('get updates in Validator')
        console.log('object: ', subject)
    }
}

class Router implements Observer {
    update(subject: Subject): void {
        console.log('get updates in Router')
        console.log('object: ', subject)
    }
}

const subject = new FormSubmitter()
subject.value = new FormsData('Example name', 'ex@email.fdefr')
const subscriptor1 = new Validator()
const subscriptor2 = new Router()

subject.attach(subscriptor1)
subject.attach(subscriptor2)
subject.notify()

subject.detach(subscriptor1)
subject.notify()

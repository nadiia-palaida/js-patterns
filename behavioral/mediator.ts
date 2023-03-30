class FormComponent {
    protected mediator: Mediator

    setOrderFormMediator(mediator: Mediator) {
        this.mediator = mediator
    }
}

class Input extends FormComponent{
    public value: string

    constructor(public name: string) {
        super()
    }

    setValue(value: string) {
        this.value = value
        console.log(`Set input value ${value}`)
        this.mediator.notify(this, 'setInputValue')
    }
}

class Select extends FormComponent{
    private options: string[]
    public value: string

    constructor(public name: string) {
        super()
    }

    setOptions(options: string[]) {
        this.options = options
    }

    setValue(value) {
        this.value = value
        console.log('Set select value')
        this.mediator.notify(this, 'setSelectValue')
    }
}

class Button extends FormComponent{
    constructor(public name: string) {
        super()
    }

    send(data: string[]) {
        this.mediator.notify(this, 'sendFormData')
    }
}

interface Mediator {
    notify(sender: object, event: string)
}

class OrderFormMediator implements Mediator{
    constructor(private input: Input, private select: Select, private button: Button) {
        this.input.setOrderFormMediator(this)
        this.select.setOrderFormMediator(this)
        this.button.setOrderFormMediator(this) 
    }

    notify(sender: object, event: string) {
        if(event === 'setInputValue') {
            if(this.input.value === 'pizza') {
                this.select.setOptions(['Havayska Pizza', 'Napoletana Pizza', 'Cheese Pizza'])
            } else {
                this.select.setOptions(['Havayska Pizza', 'Napoletana Pizza', 'Cheese Pizza', 'Philadelphia Sushi', 'Cheese Sushi'])
            }
        } else if(event === 'setSelectValue') {
            if(this.input.value && this.select.value) {
                const data = [this.input.value, this.select.value]
                this.button.send(data)
                console.log('Form data send from mediator')
            }
        }
    }
}

const typeProductInput = new Input('type-product')
const productSelect = new Select('product')
const orderBtn = new Button('order')

const mediator = new OrderFormMediator(typeProductInput, productSelect, orderBtn)

console.log('Client triggers operation setInputValue.')
typeProductInput.setValue('pizza')

console.log('============')

console.log('Client triggers operation setSelectValue.')
productSelect.setValue('Napoletana Pizza')
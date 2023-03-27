interface CheckboxInterface {
    onChange()
    send()
}

interface InputInterface {
    onInput()
    send()
}

class Checkbox implements CheckboxInterface {
    private value: boolean = false

    onChange() {
        this.value = !this.value
    }

    send() {
        console.log(`Checkbox value added to data ${this.value}`)
    }
}

class Input implements InputInterface {
    private value: boolean = false

    onInput() {
        this.value = !this.value
    }

    send() {
        console.log(`Input value added to data ${this.value}`)
    }
}

class InputToChangeAdapter implements CheckboxInterface {
    constructor(private input: Input) {
    }

    onChange() {
        this.input.onInput()
    }

    send() {
        this.input.send()
    }
}

let input1 = new Input()
let changeEventAdapter = new InputToChangeAdapter(input1)

input1.send()
changeEventAdapter.onChange()
input1.send()

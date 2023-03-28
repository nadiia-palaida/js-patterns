class SubmitButton {
    constructor(public data: object) {
    }

    send() {
        console.log('Send form')
    }
}

class Validator {
    constructor(public submitBtn: SubmitButton) {
    }

    send() {
        if(this.validate(this.submitBtn.data)) {
            console.log('Validate is successful')
            this.submitBtn.send()
        } else {
            console.log('Validate is faulty')
        }
    }

    private validate(data: object): Boolean {
        return !!Object.keys(data).length;
    }
}

const submitBtn1 = new Validator(new SubmitButton({name: 'Example name', email: 'Example email'}))
submitBtn1.send()

const submitBtn2 = new Validator(new SubmitButton({}))
submitBtn2.send()

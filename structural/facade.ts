class Submitter {
    getDataForm() {
        console.log('Get data from form elements')
    }

    send() {
        console.log('Send data')
    }
}

class Validator {
    setRules() {
        console.log('set validate rules')
    }


    validate() {
        console.log('Validate all data')
    }
}

class SubmitFacade {
    constructor(private submitter: Submitter, private validator: Validator) {
    }

    submit() {
        this.submitter.getDataForm()
        this.validator.setRules()
        this.validator.validate()
        this.submitter.send()
    }
}

const validator = new Validator()
const submitter = new Submitter()

const buttonSubmit = new SubmitFacade(submitter, validator)
buttonSubmit.submit()
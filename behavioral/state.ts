class FormsData {
    private state: FormState

    constructor(state: FormState) {
       this.setState(state)
    }

    setState(state: FormState) {
        this.state = state
        this.state.setContextFormData(this)
    }

    getState(): FormState {
        return this.state
    }

    actionRequest() {
        this.state.action()
    }
}

abstract class FormState {
    protected contextFormData: FormsData
    public abstract name: string

    public setContextFormData(context: FormsData) {
        this.contextFormData = context
    }

    public abstract action()
}

class GetData extends FormState {
    name: string = 'getData'

    action() {
        console.log('STEP: get form data')
        this.contextFormData.setState(new ValidationData())
    }
}

class ValidationData extends FormState {
    name: string = 'ValidationData'

    action() {
        console.log('STEP: validation form data')
        this.contextFormData.setState(new SendingData())
    }
}

class SendingData extends FormState {
    name: string = 'SendingData'

    action() {
        console.log('STEP: sending form data')
        this.contextFormData.setState(new GetData())
    }
}


const formsData = new FormsData(new GetData())
console.log('formsData state', formsData.getState())
formsData.actionRequest()
console.log('formsData state', formsData.getState())
formsData.actionRequest()
console.log('formsData state', formsData.getState())
formsData.actionRequest()
console.log('formsData state', formsData.getState())

class OrderFormService {
    validateData(data: object) {
        console.log(`Validate form data`)
        console.log(data);
    }

    sendFormData(data: object) {
        console.log(`Send form data`)
        console.log(data);
    }

    resetData() {
        console.log('Clear all forms fields')
    }

    cancelSend() {
        console.log('Cancel sending data')
    }
}

interface Command {
    execute()
}

class SendFormDataCommand implements Command {
    constructor(private data: object, private receiver: OrderFormService) {
    }

    execute() {
        this.receiver.validateData(this.data)
        this.receiver.sendFormData(this.data)
    }
}

class ResetCommand implements Command {
    constructor(private receiver: OrderFormService) {
    }

    execute() {
        this.receiver.resetData()
    }
}

class CancelCommand implements Command {
    constructor(private receiver: OrderFormService) {
    }

    execute() {
        this.receiver.cancelSend()
    }
}

class FormController {
    receiver: OrderFormService

    addReceiver(receiver: OrderFormService) {
        this.receiver = receiver
    }

    run() {
        const sendDataCommand = new SendFormDataCommand({name: 'Example'}, this.receiver)
        const resetDataCommand = new ResetCommand(this.receiver)
        sendDataCommand.execute()
        resetDataCommand.execute()
    }
}

const controller = new FormController()
controller.addReceiver(new OrderFormService())
controller.run()
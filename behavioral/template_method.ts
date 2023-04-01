abstract class SubmitterForm {
    private data: string

    submit(data: string) {
        this.getData(data)
        this.validateData(this.data)
        this.sendData(this.data)
    }

    getData(data: string) {
        this.data = data
    }

    abstract validateData(data: string)
    abstract sendData(data: string)
}

class RegistrationSubmitterForm extends SubmitterForm {
    validateData(data: string) {
        console.log('validate data for registration form')
    }

    sendData(data: string) {
        console.log('do some actions for registration data')
        console.log('send data to registration request')
    }
}

class DiscountSubmitterForm extends SubmitterForm {
    validateData(data: string) {
        console.log('validate data for discount form')
    }

    sendData(data: string) {
        console.log('do some actions for discount data')
        console.log('send data to discount request')
    }
}

const form1 = new RegistrationSubmitterForm()
const form2 = new DiscountSubmitterForm()

form1.submit('some registration data')
console.log('=====================================================')
form2.submit('discount data')
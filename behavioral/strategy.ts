class Validator {
    constructor(private validateType: IValidationType) {
    }

    setValidateType(validateType: IValidationType) {
        this.validateType = validateType
    }

    doValidation(data: string) {
        this.validateType.validate(data)
    }
}

interface IValidationType {
    validate(data: string)
}

class RequiredValidation implements IValidationType{
    validate(data: string) {
        if(data) {
            console.log('data exist')
        } else {
            console.log('data is empty')
        }
    }
}

class NumberValidation implements IValidationType{
    validate(data: string) {
        if(typeof +data === 'number') {
            console.log('data is number')
        } else {
            console.log('data isn`t number')
        }
    }
}

const validator1 = new Validator(new RequiredValidation())
validator1.doValidation('some text')

const validator2 = new Validator(new NumberValidation())
validator2.doValidation('123')
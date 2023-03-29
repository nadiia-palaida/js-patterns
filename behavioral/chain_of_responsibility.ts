interface ISubmitter {
    next(submitter: ISubmitter): ISubmitter
    handle(data: object): any
}

abstract class AbstractSubmitter implements ISubmitter {
    public nextSubmitter: ISubmitter

    next(submitter: ISubmitter): ISubmitter {
        this.nextSubmitter = submitter
        return submitter;
    }

    handle(data: object): any {
       if(this.nextSubmitter) {
           return this.nextSubmitter.handle(data)
       } else {
           return
       }
    }
}

class GetFormDataSubmitter extends AbstractSubmitter {
    handle(data: object): any {
        console.log('GetFormDataSubmitter')

        if(data.hasOwnProperty('user')) {
            return super.handle(data);
        }

        return 'Form data doesn`t exist'
    }
}

class ValidateSubmitter extends AbstractSubmitter {
    handle(data: object): any {
        console.log('ValidateSubmitter')

        if(!!Object.keys(data).length) {
            return super.handle(data);
        }

        return 'Form data is empty'
    }
}

class SendSubmitter extends AbstractSubmitter {
    handle(data: object): any {
        console.log('SendSubmitter')

        return 'Send form data'
    }
}

const getData = new GetFormDataSubmitter()
const validate =  new ValidateSubmitter()
const send = new SendSubmitter()

getData.next(validate).next(send)

console.log(getData.handle({}))
console.log('================================================================')
console.log(getData.handle({user: 'Ivan', email: 'example@ema.vf'}))
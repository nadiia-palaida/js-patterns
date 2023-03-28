abstract class DomEl {
    abstract type: string
    domElements: DomEl[] = []

    addDomEl(domEl: DomEl) {
        this.domElements.push(domEl)
    }

    showAllElements(): DomEl[] {
        return this.domElements
    }

    abstract show(): DomEl | DomEl[]
}

enum ElementTypes {
    Page = "PAGE",
    Form = "FORM",
    Button = "BUTTON",
    Input = "INPUT",
    Select = 'SELECT'
}

class FormPage extends DomEl {
    type: string = ElementTypes.Page

    show(): DomEl[] {
        return this.showAllElements()
    }
}

class FormEl extends DomEl {
    type: string = ElementTypes.Form
    private action: string

    changeAction(action: string) {
        this.action = action
    }

    show(): DomEl[] {
        let result = this.showAllElements()
        result.push(this)
        return result
    }
}

class InputEl extends DomEl {
    type: string = ElementTypes.Input

    constructor(private name: string) {
        super()
    }

    show(): DomEl {
        return this
    }
}

class SelectEl extends DomEl {
    type: string = ElementTypes.Select

    constructor(private name: string) {
        super()
    }

    show(): DomEl {
        return this
    }
}

class ButtonEl extends DomEl {
    type: string = ElementTypes.Button

    show(): DomEl {
        return this
    }
}

const formPage1 = new FormPage()
formPage1.addDomEl(new ButtonEl())

const form1 = new FormEl()
form1.changeAction('send')
formPage1.addDomEl(form1)
form1.addDomEl(new InputEl('email'))
form1.addDomEl(new InputEl('phone'))
form1.addDomEl(new ButtonEl())

const form2 = new FormEl()
form2.changeAction('getDiscount')
formPage1.addDomEl(form2)
form2.addDomEl(new InputEl('discount'))
form2.addDomEl(new SelectEl('discountType'))

console.log(formPage1.show())


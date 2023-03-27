abstract class DomElFactoryAbstract {
    abstract createButton(): Button
    abstract createInput(): Input
    abstract createDiv(): Div
}

class DomElTransparentFactory extends DomElFactoryAbstract{
    createButton() {
        return new ButtonTransparent()
    }

    createInput() {
        return new InputTransparent()
    }

    createDiv() {
        return new DivTransparent()
    }
}

class DomElFullFactory extends DomElFactoryAbstract{
    createButton() {
        return new ButtonFull()
    }

    createInput() {
        return new InputFull()
    }

    createDiv() {
        return new DivFull()
    }
}


interface Button {
    handleOnClick()
}
interface Input {
    handleOnChange()
    handleOnInput()
}
interface Div {
    show()
    hide()
}

class ButtonTransparent implements Button{
    constructor(private height: number = 50,
                private background: string = 'transparent',
                private border: string = '1px solid black',
                private color: string = 'black',
                private borderRadius: number = 8) {
    }

    handleOnClick() {
        this.background = 'red'
    }
}

class ButtonFull implements Button{
    constructor(private height: number = 50,
                private background: string = 'white',
                private border: string = 'none',
                private color: string = 'black',
                private borderRadius: number = 8) {
    }

    handleOnClick() {
        this.background = 'red'
    }
}

class InputTransparent implements Input {
    constructor(private height: number = 75,
                private background: string = 'transparent',
                ) {
    }
    handleOnChange() {
        console.log('change event for transparent input')
    }
    handleOnInput() {
        console.log('input event for transparent input')
    }
}

class InputFull implements Input {
    constructor(private height: number = 100,
                private background: string = 'white',
                ) {
    }
    handleOnChange() {
        console.log('change event for full input')
    }
    handleOnInput() {
        console.log('input event for full input')
    }
}

class DivTransparent implements Div {
    constructor(private border: string = '1px solid red',
                private background: string = 'transparent',
                ) {
    }
    show() {
        console.log('show transparent div')
    }
    hide() {
        console.log('hide transparent div')
    }
}

class DivFull implements Div {
    constructor(private border: string = 'none',
                private background: string = 'white',
                ) {
    }
    show() {
        console.log('show full div')
    }
    hide() {
        console.log('hide full div')
    }
}

const domElTransparentFactory = new DomElTransparentFactory()

const btnTransparent = domElTransparentFactory.createButton()
const inputTransparent = domElTransparentFactory.createInput()
const divTransparent = domElTransparentFactory.createDiv()

console.log('btnTransparent', btnTransparent)
console.log('inputTransparent', inputTransparent)
console.log('divTransparent', divTransparent)

const domElFullFactory = new DomElFullFactory()

const btnFull = domElFullFactory.createButton()
const inputFull = domElFullFactory.createInput()
const divFull = domElFullFactory.createDiv()

console.log('btnFull', btnFull)
console.log('inputFull', inputFull)
console.log('divFull', divFull)
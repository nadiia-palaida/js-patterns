abstract class DomEl {
    abstract type: string
    private style: Style

    setStyle(style: Style) {
        this.style = style
    }

    getInfo() {
        console.log(`Element's type is ${this.type}`)
        this.style.getInfo()
    }
}

class Button extends DomEl {
    type: string = 'button'
}

class Input extends DomEl {
    type: string = 'input'
}

interface Style {
    getInfo()
}

class TransparentStyle implements Style {
    private background: string = 'transparent'
    private border: string = '1px solid black'
    private borderRadius: number = 8

    getInfo() {
        console.log(`This is transparent style with ${this.background} background, ${this.border} border, ${this.borderRadius} border radius`)
    }
}

class ColorBackgroundStyle implements Style {
    private background: string = 'white'
    private border: string = 'none'
    private borderRadius: number = 8

    getInfo() {
        console.log(`This is color background style with ${this.background} background, ${this.border} border, ${this.borderRadius} border radius`)
    }
}

const btn1 = new Button()
btn1.setStyle(new TransparentStyle())
btn1.getInfo()

const input1 = new Input()
input1.setStyle(new ColorBackgroundStyle())
input1.getInfo()

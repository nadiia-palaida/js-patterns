abstract class Button {
    public text: string
    public styles: string[] = []

    public abstract handle(): string
}

class SubmitButton extends Button {
    constructor(text: string) {
        super();
        this.text = text
    }

    handle() {
        return `You click on button ${this.text} `
    }
}

abstract class StylesButton extends Button {
    decoratedButton: Button
    public abstract handle(): string
}

class ColorBackgroundDecorator extends StylesButton {
    constructor(public decoratedButton: Button) {
        super()

        decoratedButton.styles.push('background: orange;')
    }

    handle(): string {
        return this.decoratedButton.handle() + 'with color background'
    }
}

class BorderDecorator extends StylesButton {
    constructor(public decoratedButton: Button) {
        super()

        decoratedButton.styles.push('border: 1px solid white;')
    }

    handle(): string {
        return this.decoratedButton.handle() + ', border'
    }
}

let btn1 = new SubmitButton('Send')
btn1 = new ColorBackgroundDecorator(btn1)
btn1 = new BorderDecorator(btn1)

console.log(btn1.handle())

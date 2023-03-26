class Button {
    constructor(public height: number = 0,
                public background: string = 'none',
                public border: string = 'none',
                public color: string = 'black',
                public borderRadius: number = 0) {
    }
}

interface Builder {
    build()
}

interface ButtonBuilderInterface extends Builder {
    addHeight(height: number): ButtonBuilderInterface

    addBackground(background: string): ButtonBuilderInterface

    addBorder(border: string): ButtonBuilderInterface

    addColor(color: string): ButtonBuilderInterface

    addBorderRadius(borderRadius: number): ButtonBuilderInterface
}

class ButtonBuilder implements ButtonBuilderInterface {
    private button: Button

    constructor() {
        this.reset()
    }

    private reset() {
        this.button = new Button()
    }

    addHeight(height: number): ButtonBuilder {
        this.button.height = height
        return this
    }

    addBackground(background: string): ButtonBuilder {
        this.button.background = background
        return this
    }

    addBorder(border: string): ButtonBuilder {
        this.button.border = border
        return this
    }

    addColor(color: string): ButtonBuilder {
        this.button.color = color
        return this
    }

    addBorderRadius(borderRadius: number): ButtonBuilder {
        this.button.borderRadius = borderRadius
        return this
    }

    build(): Button {
        const result = this.button
        this.reset()
        return result
    }
}

class DirectorButton {
    private builder: ButtonBuilder

    constructor() {
    }

    setBuilder(builder: ButtonBuilder) {
        this.builder = builder
    }

    buildEmptyButton(): Button {
        return this.builder.addHeight(50)
            .addBackground('transparent')
            .addBorder('1px solid black')
            .addColor('black')
            .addBorderRadius(8)
            .build()
    }

    buildFullButton(): Button {
        return this.builder.addHeight(50)
            .addBackground('black')
            .addColor('white')
            .addBorderRadius(8)
            .build()
    }
}

const directorBtn = new DirectorButton()
const builderBtn = new ButtonBuilder()

directorBtn.setBuilder(builderBtn)

const btn1 = directorBtn.buildEmptyButton()
const btn2 = directorBtn.buildFullButton()
const btn3 = builderBtn.addHeight(20)
    .addBackground('red')
    .addColor('orange')
    .build()

console.log('btn1', btn1)
console.log('btn2', btn2)
console.log('btn3', btn3)




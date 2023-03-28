class Button {
    constructor(
        private height: number = 0,
        private background: string = 'none',
        private border: string = 'none',
        private color: string = 'black',
        private borderRadius: number = 0) {
    }
}

class ButtonEmpty extends Button {
    constructor() {
        super(50, 'transparent', '1px solid black', 'black', 8);
    }
}

class ButtonFull extends Button {
    constructor() {
        super(50, '#fff', 'none', '#000', 8);
    }
}

class ButtonDanger extends Button {
    constructor() {
        super(75, 'red', '2 px solid red', "#fff", 0);
    }
}

enum BtnTypes {
    TYPE_EMPTY = 'empty',
    TYPE_FULL = 'full',
    TYPE_DANGER = 'danger',
}


class ButtonFactory {
    private createdButtons: object

    constructor() {
        this.createdButtons = {}
    }

    create(type: string): Button {
        if (type === BtnTypes.TYPE_EMPTY) {
            if (!this.checkExist(type)) {
                return this.createdButtons[type] = new ButtonEmpty()
            }
            return this.checkExist(type)
        } else if (type === BtnTypes.TYPE_FULL) {
            if (!this.checkExist(type)) {
                return this.createdButtons[type] = new ButtonFull()
            }
            return this.checkExist(type)
        } else if (type === BtnTypes.TYPE_DANGER) {
            if (!this.checkExist(type)) {
                return this.createdButtons[type] = new ButtonDanger()
            }
            return this.checkExist(type)
        }
    }

    private checkExist(type: string): Button {
        if (this.createdButtons[type]) {
            return this.createdButtons[type]
        }
    }

    getCreatedButtons() {
        console.table(this.createdButtons)
    }
}

const buttonFactory = new ButtonFactory()

const emptyBtn1 = buttonFactory.create('empty')
const fullBtn1 = buttonFactory.create('full')
const dangerBtn1 = buttonFactory.create('danger')
const dangerBtn2 = buttonFactory.create('danger')

buttonFactory.getCreatedButtons()
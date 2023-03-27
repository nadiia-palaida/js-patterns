class Button {
    constructor(
        public height: number = 0,
        public background: string = 'none',
        public border: string = 'none',
        public color: string = 'black',
        public borderRadius: number = 0) {
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
    create(type: string): Button {
        if (type === BtnTypes.TYPE_EMPTY) {
            return new ButtonEmpty()
        } else if (type === BtnTypes.TYPE_FULL) {
            return new ButtonFull()
        } else if (type === BtnTypes.TYPE_DANGER) {
            return new ButtonDanger()
        }
    }
}

const btnFactory = new ButtonFactory()

const btn1 = btnFactory.create('empty')
const btn2 = btnFactory.create('full')
const btn3 = btnFactory.create('danger')

console.log('btn1', btn1)
console.log('btn2', btn2)
console.log('btn3', btn3)
interface Prototype {
    clone(): Prototype
}

class Button implements Prototype{
    constructor(public height: number, public background: string, public border: string = 'none') {
    }

    clone(): Button {
        return new Button(this.height, this.background, this.border)
    }

    createDomEl(): string {
        return `<button style="height: ${this.height}px; background: ${this.background}; border: ${this.border};"></button>`
    }
}

const btnPrototype = new Button(50, '#fff', '1px solid #000')

let btn1 = btnPrototype.clone()

let btn2 = btnPrototype.clone()

let btn3 = btnPrototype.clone()
btn3.height = 70
btn3.border = 'none'

console.log('btn1 element', btn1)
console.log('btn2 element', btn2)
console.log('btn3 element', btn3)

const btn1Dom = btn1.createDomEl()
const btn2Dom = btn2.createDomEl()
const btn3Dom = btn3.createDomEl()

console.log('btn1 DOM', btn1Dom)
console.log('btn2 DOM', btn2Dom)
console.log('btn3 DOM', btn3Dom)

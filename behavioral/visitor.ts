interface IFormEl {
    accept(visitor: IFormElVisitor)
}

class InputEl implements IFormEl{
    accept(visitor: IFormElVisitor) {
        visitor.validateVisitInput(this)
    }
}

class SelectEl implements IFormEl{
    accept(visitor: IFormElVisitor) {
        visitor.validateVisitSelect(this)
    }
}

interface IFormElVisitor {
    validateVisitInput(element: InputEl)

    validateVisitSelect(element: InputEl)
}

class ValidateVisitor implements IFormElVisitor{
    public validateVisitInput(element: InputEl) {
        console.log('Validate visit input element')
    }
    public validateVisitSelect(element: SelectEl) {
        console.log('Validate visit select element')
    }
}

const input1 = new InputEl()
const select1 = new SelectEl()

const visitor1 = new ValidateVisitor()

input1.accept(visitor1)
select1.accept(visitor1)
